const userdb = require('../../../services/userdb');

module.exports=()=>{
    return (req,res)=>{
        const email = req.user.email;
        const newname = req.body.newname;
        const newemail = req.body.newemail;
        const newphone = req.body.newphone;
        const users = userdb.updateUser(email,newname,newemail,newphone);
        res.status(200).json({
            message: users
        })
    }
}