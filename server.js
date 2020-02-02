const app=require('./app');
const ttn=require('./ttn');

const port=3000;
app.listen(port,()=>{
    console.log("Listen o port ",port);
});