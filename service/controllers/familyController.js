const { User, Role, Address } = require("../models");
const addressService = require("../services/addressService");

const createFamilyMemberBySocietyId = async (req, res) => {
  try {
    const loggedInUserId = req.user.userId;
    const { address, salutation, firstName, lastName, email, mobileNumber, alternateNumber } = req.body;

    const tenantUser = await User.findOne({ where: { userId: loggedInUserId, primaryContact: true } });
    if (!tenantUser) {
      return res.status(403).json({ message: "Only primary contact can add family members" });
    }

    const parentRole = await Role.findByPk(tenantUser.roleId);
    let familyRoleCategory = parentRole.roleCategory === "society_owner"
      ? "society_owner_family"
      : parentRole.roleCategory === "society_tenant"
        ? "society_tenant_family"
        : null;

    if (!familyRoleCategory) return res.status(403).json({ message: "Not authorized to add family members" });

    const familyRole = await Role.findOne({ where: { roleCategory: familyRoleCategory } });
    if (!familyRole) return res.status(500).json({ message: "Family role not configured" });

    const addressData = await addressService.createAddress(address);

    const familyUser = await User.create({
      salutation,
      firstName,
      lastName,
      email,
      password: "Himansu2", // secure this in prod
      countryCode: address.countryCode || 91,
      mobileNumber,
      alternateNumber,
      roleId: familyRole.roleId,
      unitId: tenantUser.unitId,
      societyId: tenantUser.societyId,
      addressId: addressData.addressId,
      livesHere: true,
      primaryContact: false,
      isManagementCommittee: false,
      managementDesignation: null,
      status: "active"
    });

    res.status(201).json({ message: "Family member created", result: familyUser });

  } catch (error) {
    console.error("Create family error:", error);
    res.status(500).json({ error: error.message });
  }
};

const getFamilyMembers = async (req, res) => {
  try {
    const userId = req.user.userId;
    const parentUser = await User.findByPk(userId);

    const parentRole = await Role.findByPk(parentUser.roleId);
    let allowedCategories = parentRole.roleCategory === "society_owner"
      ? ["society_owner_family"]
      : parentRole.roleCategory === "society_tenant"
        ? ["society_tenant_family"]
        : [];

    const roles = await Role.findAll({
      where: { roleCategory: allowedCategories }
    });

    const roleIds = roles.map(r => r.roleId);

    const familyMembers = await User.findAll({
      where: {
        societyId: parentUser.societyId,
        unitId: parentUser.unitId,
        roleId: roleIds
      },
      include: [
        {model: Role, as:"role"},
        {model: Address}
    ]
    });

    res.status(200).json({ members: familyMembers });
  } catch (error) {
    console.error("Get family error:", error);
    res.status(500).json({ error: error.message });
  }
};

const updateFamilyMember = async (req, res) => {
  try {
    const userId = req.user.userId;
    const familyMemberId = req.params.familyMemberId;
    const updateData = req.body;

    const parentUser = await User.findByPk(userId);
    const member = await User.findByPk(familyMemberId);

    if (
      !member ||
      member.unitId !== parentUser.unitId ||
      member.societyId !== parentUser.societyId ||
      member.primaryContact === true
    ) {
      return res.status(403).json({ message: "Unauthorized or invalid family member" });
    }

    if (updateData.address) {
      await addressService.updateAddress(member.addressId, updateData.address);
    }

    await member.update({
      ...updateData,
      addressId: member.addressId
    });

    res.status(200).json({ message: "Family member updated", result: member });
  } catch (error) {
    console.error("Update family error:", error);
    res.status(500).json({ error: error.message });
  }
};

const deleteFamilyMember = async (req, res) => {
  try {
    const userId = req.user.userId;
    const familyMemberId = req.params.familyMemberId;

    const parentUser = await User.findByPk(userId);
    const member = await User.findByPk(familyMemberId);

    if (
      !member ||
      member.unitId !== parentUser.unitId ||
      member.societyId !== parentUser.societyId ||
      member.primaryContact === true
    ) {
      return res.status(403).json({ message: "Unauthorized or invalid family member" });
    }

    await member.destroy();
    res.status(200).json({ message: "Family member deleted successfully" });
  } catch (error) {
    console.error("Delete family error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createFamilyMemberBySocietyId,
  getFamilyMembers,
  updateFamilyMember,
  deleteFamilyMember
};
