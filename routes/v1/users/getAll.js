const userdb = require('../../../services/userdb');
module.exports=()=>{
    return (req,res)=>{
        users = userdb.getAllUsers();
        res.status(200).json({
            success: true,
            message: users
        })
    }
}