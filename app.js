const express = require('express');
const morgan=require('morgan');
var userRouter=require('./routes/userRoutes');
var tourRoutes=require('./routes/tourRoutes');

const app =express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1/tours',tourRoutes);
app.use('/api/v1/users',userRouter);

module.exports=app;

