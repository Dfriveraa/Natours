const getAllUsers=(req,res)=>{
    console.log(req.requestHora)
    res.status(200).json({
        status:"Success"
    })
};

const getUserById=(req,res)=>{

    res.status(200).json({
        status:"Success",
        results:1,

    })
}
const updateUser=(req,res)=>{
    res.status(200).json({
        status:"Success",
        data:{
            tour:"<Update tour here>"
        }
    })
}
const deleteUser=(req,res)=>{

    res.status(204).json({
        status:"Success",
        data:null
    })
}
const createUser=(req,res)=>{
    //console.log(req.body);
        res.status(201).json({
            status:"Success"
        })
    
}
module.exports={createUser,getAllUsers,getUserById,deleteUser,updateUser}