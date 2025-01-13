const GateAllocation = require('../models/GateAllocation');
// const Customer = require('../models/Customer');
// const Gate = require('../models/Gate');
// const JobProfile = require('../models/JobProfile');

// Get all gate allocations
// const getAllGateAllocations = async (req, res) => {
//     try {
//         const gateAllocations = await GateAllocation.findAll({
//             include: [
//                 { model: Customer, attributes: ['customerName'] }, 
//                 { model: Gate, attributes: ['gateName'] }, 
//                 { 
//                     model: JobProfile, 
//                     attributes: ['firstName', 'lastName'] 
//                 },
//             ],
//         });
//         res.status(200).json(gateAllocations);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// Create a new gate allocation
const createGateAllocation = async (req, res) => {
    try {
        const { societyId, gateId, profileId } = req.body;

        const newGateAllocation = await GateAllocation.create({
            societyId,
            gateId,
            profileId,
        });

        res.status(201).json(newGateAllocation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllGateAllocations = async (req, res) => {
    try {
        const gateAllocations = await GateAllocation.findAll();
        
        if (!gateAllocations || gateAllocations.length === 0) {
            return res.status(404).json({ message: 'Gate Allocations not found' });
        }

        // Check if any allocation has missing profileId or gateId
        const invalidAllocations = gateAllocations.filter(allocation => !allocation.profileId || !allocation.gateId);
        
        if (invalidAllocations.length > 0) {
            return res.status(400).json({ 
                message: 'Invalid allocations found', 
                invalidAllocations 
            });
        }

        res.status(200).json(gateAllocations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// Get gate allocation by ID
// const getGateAllocationById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const gateAllocation = await GateAllocation.findByPk(id, {
//             include: [
//                 { model: Customer },
//                 { model: Gate },
//                 { model: JobProfile },
//             ],
//         });

//         if (!gateAllocation) {
//             return res.status(404).json({ message: 'Gate Allocation not found' });
//         }

//         res.status(200).json(gateAllocation);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

const getGateAllocationById = async (req, res) => {
    try {
        const { id } = req.params;
        const gateAllocation = await GateAllocation.findByPk(id);

        if (!gateAllocation) {
            return res.status(404).json({ message: 'Gate Allocation not found' });
        }

        res.status(200).json(gateAllocation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Update a gate allocation
const updateGateAllocation = async (req, res) => {
    try {
        const { id } = req.params;
        const { societyId, gateId, profileId } = req.body;

        const gateAllocation = await GateAllocation.findByPk(id);

        if (!gateAllocation) {
            return res.status(404).json({ message: 'Gate Allocation not found' });
        }

        await gateAllocation.update({
            societyId,
            gateId,
            profileId,
        });

        res.status(200).json(gateAllocation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a gate allocation
const deleteGateAllocation = async (req, res) => {
    try {
        const { id } = req.params;

        const gateAllocation = await GateAllocation.findByPk(id);

        if (!gateAllocation) {
            return res.status(404).json({ message: 'Gate Allocation not found' });
        }

        await gateAllocation.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllGateAllocations,
    getGateAllocationById,
    createGateAllocation,
    updateGateAllocation,
    deleteGateAllocation,
};



