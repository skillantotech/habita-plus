const { Document } = require("../models");
const upload = require("../middleware/upload");

// ✅ Create Document by Society ID
const createDocumentBySocietyId = async (req, res) => {
    upload.fields([{ name: 'document' }, { name: 'picture' }])(req, res, async (err) => {
        if (err) return res.status(400).json({ message: "File upload error", error: err.message });

        try {
            const { documentName } = req.body;
            const { societyId } = req.params;

            if (!societyId) return res.status(400).json({ message: "societyId is required" });

            const documentPath = req.files?.document ? req.files.document[0].path : null;
            const picturePath = req.files?.picture ? req.files.picture[0].path : null;

            const newDocument = await Document.create({
                societyId,
                documentName,
                document: documentPath,
                picture: picturePath
            });

            return res.status(201).json({ message: "Document uploaded successfully", data: newDocument });
        } catch (err) {
            return res.status(500).json({ message: "Error uploading document", error: err.message });
        }
    });
};

// ✅ Create Document by User ID
const createDocumentByUserId = async (req, res) => {
    upload.fields([{ name: 'document' }, { name: 'picture' }])(req, res, async (err) => {
        if (err) return res.status(400).json({ message: "File upload error", error: err.message });

        try {
            const { documentName } = req.body;
            const { userId } = req.params;

            if (!userId) return res.status(400).json({ message: "userId is required" });

            const documentPath = req.files?.document ? req.files.document[0].path : null;
            const picturePath = req.files?.picture ? req.files.picture[0].path : null;

            const newDocument = await Document.create({
                userId,
                documentName,
                document: documentPath,
                picture: picturePath
            });

            return res.status(201).json({ message: "Document uploaded successfully", data: newDocument });
        } catch (err) {
            return res.status(500).json({ message: "Error uploading document", error: err.message });
        }
    });
};

// ✅ Get Documents by Society ID
const getDocumentBySocietyId = async (req, res) => {
    try {
        const { societyId } = req.params;
        const documents = await Document.findAll({ where: { societyId } });

        if (!documents.length) return res.status(404).json({ message: "No document found for this society" });

        return res.status(200).json({ message: "Documents fetched successfully", data: documents });
    } catch (err) {
        return res.status(500).json({ message: "Failed to fetch document", error: err.message });
    }
};

// ✅ Get Documents by User ID
const getDocumentByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const documents = await Document.findAll({ where: { userId } });

        if (!documents.length) return res.status(404).json({ message: "No document found for this user" });

        return res.status(200).json({ message: "Documents fetched successfully", data: documents });
    } catch (err) {
        return res.status(500).json({ message: "Failed to fetch document by user id", error: err.message });
    }
};

module.exports = { createDocumentBySocietyId, createDocumentByUserId, getDocumentBySocietyId, getDocumentByUserId };
