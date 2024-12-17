const express = require('express');
const gateAllocationRouter = express.Router();
const upload = require('../middleware/upload');
const gateAllocationController = require('../controllers/gateallocationController');

// Routes to handle gate allocations
gateAllocationRouter.post(
    '/create',
    upload.fields([
        { name: 'profilePhoto', maxCount: 1 },
        { name: 'idProof', maxCount: 1 }
    ]),
    gateAllocationController.createGateAllocation
);

gateAllocationRouter.get('/', gateAllocationController.getAllGateAllocations);
gateAllocationRouter.get('/:id', gateAllocationController.getGateAllocationById);
gateAllocationRouter.put(
    '/update/:id',
    upload.fields([
        { name: 'profilePhoto', maxCount: 1 },
        { name: 'idProof', maxCount: 1 }
    ]),
    gateAllocationController.updateGateAllocation
);
gateAllocationRouter.delete('/delete/:id', gateAllocationController.deleteGateAllocation);

module.exports = gateAllocationRouter;