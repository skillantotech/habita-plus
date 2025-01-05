
const JobProfile = require('../models/JobProfile');

exports.createJobProfile = async (req, res) => {
    try {
        const { firstName, lastName, societyId, roleId, email, mobileNo, status } = req.body;

        // if (!req.files?.profilePhoto){
        //     console.log("Profile Photo is missing");
        // }
        // if(!req.files?.idProof){
        //     console.log("Id is missing");
        // }

        if (!req.files?.profilePhoto || !req.files?.idProof) {
            return res.status(400).json({ error: "Profile photo and ID proof are required." });
        }

        const profilePhoto = req.files.profilePhoto[0].path;
        const idProof = req.files.idProof[0].path;

        const newJobProfile = await JobProfile.create({
            firstName,
            lastName,
            profilePhoto,
            idProof,
            societyId,
            roleId,
            email,
            mobileNo,
            status
        });

        res.status(201).json({ message: 'Job profile created successfully.!!', data: newJobProfile });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// exports.getAllJobProfiles = async (req, res) => {
//     try {
//         const jobProfiles = await JobProfile.findAll();
//         res.status(200).json(jobProfiles);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

exports.getJobProfileById = async (req, res) => {
    try {
        const jobProfile = await JobProfile.findByPk(req.params.id);
        if (!jobProfile) {
            return res.status(404).json({ message: 'Job profile not found' });
        }
        res.status(200).json(jobProfile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getJobProfilesBySocietyId = async (req, res) => {
    try {
        const { societyId } = req.params;
        const jobProfiles = await JobProfile.findAll({ where: { societyId } });
        if (!jobProfiles.length) {
            return res.status(404).json({ message: 'No job profiles found for the specified society' });
        }
        res.status(200).json(jobProfiles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateJobProfile = async (req, res) => {
    try {
        const jobProfile = await JobProfile.findByPk(req.params.id);
        if (!jobProfile) {
            return res.status(404).json({ message: 'Job profile not found' });
        }

        const { firstName, lastName, roleId, email, mobileNo, status } = req.body;
        const profilePhoto = req.files?.profilePhoto ? req.files.profilePhoto[0].path : jobProfile.profilePhoto;
        const idProof = req.files?.idProof ? req.files.idProof[0].path : jobProfile.idProof;

        const updatedJobProfile = await jobProfile.update({
            firstName,
            lastName,
            profilePhoto,
            idProof,
            roleId,
            email,
            mobileNo,
            status
        });

        res.status(200).json({ message: 'Job profile updated successfully', data: updatedJobProfile });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteJobProfile = async (req, res) => {
    try {
        const jobProfile = await JobProfile.findByPk(req.params.id);
        if (!jobProfile) {
            return res.status(404).json({ message: 'Job profile not found' });
        }

        await jobProfile.destroy();
        res.status(200).json({ message: 'Job profile deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
