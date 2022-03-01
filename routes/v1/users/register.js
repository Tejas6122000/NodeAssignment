const userdb = require('../../../services/userdb');
const bcrypt =require('bcrypt')
module.exports=()=>{
    return (req,res)=>{
        const email = req.body.email;
        const name = req.body.email;
        const password = req.body.password;
        const phone = req.body.phone;
        const passwordHash = bcrypt.hashSync(password, 10);
        const Alluser = userdb.getAllUsers();
        const exists = Alluser.filter((eachUser)=> eachUser.email==email)
        if(exists.length>0){
            res.json({message:'Email Already exists'})
        }else{
            const users = userdb.addUser(name,email,phone,passwordHash)
            res.status(200).json({
            message: users
        })
        }
        
        
    }
}