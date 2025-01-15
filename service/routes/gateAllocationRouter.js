const express = require('express');
const gateAllocationRouter = express.Router();
const upload = require('../middleware/upload');
const gateAllocationController = require('../controllers/gateallocationController');


// Routes for gate allocations
gateAllocationRouter.get('/', gateAllocationController.getAllGateAllocations); 
gateAllocationRouter.get('/:id', gateAllocationController.getGateAllocationById); 
gateAllocationRouter.post('/', gateAllocationController.createGateAllocation); 
gateAllocationRouter.put('/:id', gateAllocationController.updateGateAllocation); 
gateAllocationRouter.delete('/:id', gateAllocationController.deleteGateAllocation); 


module.exports = gateAllocationRouter;