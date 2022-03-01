const userdb = require('../../../services/userdb');

module.exports=()=>{
    return (req,res)=>{
        const email = req.user.email;
        const user = userdb.getUserEmail(email);
        if(user.length>0){
            message = user[0].name
        }else{
            message="No user Found"
        }
        res.status(200).json({
            success: true,
            message: message
        })
    }
}