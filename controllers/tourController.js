const fs =require('fs');


const tours=JSON.parse(fs.readFileSync(`./dev-data/data/tours-simple.json`));

const getAllTours=(req,res)=>{
    res.status(200).json({
        status:"Success",
        results:tours.length,
        data:{
            tours:tours
        }
    })
};

const getTourById=(req,res)=>{
    const tour=tours.find(el=>el.id==req.params.id*1);
    if(!tour){
        return res.status(404).json({
        status:"Error",
        message:"Invalid id"
        })
    }
    res.status(200).json({
        status:"Success",
        results:1,
        data:{
            tour:tour
        }
    })
};
const updateTour=(req,res)=>{
    
    if(req.params.id*1 > tours.length){
        return res.status(404).json({
        status:"Error",
        message:"Invalid id"
        })
    }
    res.status(200).json({
        status:"Success",
        data:{
            tour:"<Update tour here>"
        }
    })
}
const deleteTour=(req,res)=>{
    if(req.params.id*1 > tours.length){
        return res.status(404).json({
        status:"Error",
        message:"Invalid id"
        })
    }
    res.status(204).json({
        status:"Success",
        data:null
    })
}
const createTour=(req,res)=>{
    //console.log(req.body);
    const newId=tours[tours.length-1].id+1;
    const newTour=Object.assign({id:newId},req.body);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err=>{
        res.status(201).json({
            status:"Success",
            data:{
                tours:newTour
            }
        })
    })
}

module.exports={createTour,updateTour,getAllTours,getTourById,deleteTour};