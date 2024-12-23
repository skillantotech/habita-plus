const GateAllocation = require('../models/GateAllocation');

// Create a new gate allocation entry with file upload
exports.createGateAllocation = async (req, res) => {
    try {
        const { firstName, lastName, societyId, role, email, mobileNo } = req.body;

        // Save file paths if files are uploaded
        const profilePhoto = req.files?.profilePhoto ? req.files.profilePhoto[0].path : null;
        const idProof = req.files?.idProof ? req.files.idProof[0].path : null;

        // Create a new gate allocation record
        const newEntry = await GateAllocation.create({
            firstName,
            lastName,
            profilePhoto,
            idProof,
            societyId,
            role,
            email,
            mobileNo
        });

        res.status(201).json({ message: 'Gate allocation created successfully', data: newEntry });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Fetch all gate allocations
exports.getAllGateAllocations = async (req, res) => {
    try {
        const allocations = await GateAllocation.findAll();
        res.status(200).json(allocations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// Fetch a specific gate allocation by ID
exports.getGateAllocationById = async (req, res) => {
    try {
        const allocation = await GateAllocation.findByPk(req.params.id);
        if (!allocation) {
            return res.status(404).json({ message: 'Gate allocation not found' });
        }
        res.status(200).json(allocation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Fetch gate allocations by foreign key (societyId)
exports.getGateAllocationsBySocietyId = async (req, res) => {
    try {
        const { societyId } = req.params; // Extract the societyId from the request parameters

        // Query all gate allocations where societyId matches
        const allocations = await GateAllocation.findAll({
            where: { societyId },
        });

        // Check if any allocations are found
        if (allocations.length === 0) {
            return res.status(404).json({ message: 'No gate allocations found for the specified society' });
        }

        res.status(200).json(allocations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a gate allocation record
exports.updateGateAllocation = async (req, res) => {
    try {
        const allocation = await GateAllocation.findByPk(req.params.id);
        if (!allocation) {
            return res.status(404).json({ message: 'Gate allocation not found' });
        }

        // Handle file uploads if available
        const profilePhoto = req.files?.profilePhoto ? req.files.profilePhoto[0].path : allocation.profilePhoto;
        const idProof = req.files?.idProof ? req.files.idProof[0].path : allocation.idProof;

        // Update the gate allocation record
        const updatedAllocation = await allocation.update({
            ...req.body,
            profilePhoto,
            idProof
        });

        res.status(200).json({ message: 'Gate allocation updated successfully', data: updatedAllocation });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a gate allocation record
exports.deleteGateAllocation = async (req, res) => {
    try {
        const allocation = await GateAllocation.findByPk(req.params.id);
        if (!allocation) {
            return res.status(404).json({ message: 'Gate allocation not found' });
        }

        await allocation.destroy();
        res.status(200).json({ message: 'Gate allocation deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

