const GateAllocation = require('../models/GateAllocation');
const { sendErrorResponse, sendSuccessResponse } = require('../utils/response');
const { Op } = require('sequelize');

const Customer = require("../models");

exports.createGateAllocation = async (req, res) => {
    try {

        console.log("Controller Allert!!");
        let body = req.body;

        if (!Array.isArray(body)) {
            body = [body];
        }

        // Validation Before Entry
        for (const allocation of body) {
            const { societyId, gate, allocatedTo } = allocation;
            if (!societyId || !gate || !allocatedTo) {
                return sendErrorResponse(
                    res,
                    "Gate Number and Securety are Required!!",
                    400
                );
            }
        }

        // Check for existing allocation
        const existingAllocations = await GateAllocation.findAll({
            where: {
                [Op.or]: body.map(allocation => ({
                    societyId: allocation.societyId,
                    gateId: allocation.gate,
                    profileId: allocation.allocatedTo
                }))
            }
        });

        if (existingAllocations.length > 0) {
            return sendErrorResponse(
                res,
                "Duplicate entry found for the given combination of Gate and Guard.",
                400,
            );
        }

        // Create Multiple Allocation
        const allocatedGates = await Promise.all(
            body.map(allocation => {
                return GateAllocation.create({
                    societyId: allocation.societyId,
                    gateId: allocation.gate,
                    profileId: allocation.allocatedTo
                })
            })
        );

        return sendSuccessResponse(
            res,
            "Gate Allocation Successfully",
            allocatedGates,
            201
        );
    } catch (error) {
        console.error("Error in gate allocation:", error);
        return sendErrorResponse(res, "Internal server error", 500, error.message);
    }
};

exports.getAllGateAllocations = async (req, res) => {
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

exports.getGateAllocationById = async (req, res) => {
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

exports.getGateAllocationsBySocietyId = async (req, res) => {
    try{
        console.log(req);
        const { societyId } = req.params;

        if(!societyId){
            return sendErrorResponse(res, "Society Id not found", 400);
        }

        console.log("By SocietyID:",societyId);
        console.log(typeof(societyId));

        const gateAllocations = await GateAllocation.findAll({
            where: {societyId},
            // include:[
            //     {model:Customer},
            // ],
        });


        if(gateAllocations.length === 0){
            return sendErrorResponse(res, `No gate allocation found for socity Id ${societyId}`, 404);
        }

        return sendSuccessResponse(res, `Gate Allocation For socity ID ${societyId} Fetched Successfully`, gateAllocations, 200);
    }catch (error){
        // res.status(500).json({error: error.message});
        console.error("Error Fetching gate allocations by socity id: ", error);
        return sendErrorResponse(res, "Internalserver Error", 500, error.message);
    }
};

exports.updateGateAllocation = async (req, res) => {
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

exports.deleteGateAllocation = async (req, res) => {
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