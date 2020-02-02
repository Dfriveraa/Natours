const express=require('express');
const router=express.Router();
const tourController=require('./../controllers/tourController');

router.get('/',tourController.getAllTours);

router.get('/:id',tourController.getTourById);

router.patch('/:id',tourController.updateTour);

router.delete(':id',tourController.deleteTour);

router.post('/',tourController.createTour);

module.exports  =router;