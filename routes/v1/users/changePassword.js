const userdb = require('../../../services/userdb');

module.exports=()=>{
    return (req,res)=>{
        const email = req.user.email;
        const password = req.body.password;
        const newpassword = req.body.newpassword;
        const message = userdb.updatePassword(email,password,newpassword);
        res.status(200).json({
            message: message
        })
    }
}