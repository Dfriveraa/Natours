const express=require('express');
const router=express.Router();
const tourController=require('./../controllers/tourController');
router.param('id', tourController.checkID);

router.get('/:id',tourController.getTour);

router.get('/',tourController.getAllTours);

router.patch('/:id',tourController.updateTour);

router.delete(':id',tourController.deleteTour);

router.post('/',tourController.createTour);

module.exports  =router;