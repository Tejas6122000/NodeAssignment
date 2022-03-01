const userdb = require('../../../services/userdb');
const jwt = require('jsonwebtoken');
const bcrypt =require('bcrypt')

module.exports=()=>{
    return (req,res)=>{
        const email = req.body.email;
        const password = req.body.password;
        // const phone =req.body.phone;
        const users = userdb.getAllUsers();
        const user = users.filter((eachUser)=> eachUser.email == email && bcrypt.compareSync(password,eachUser.password))
        if(user.length==0){
            message="Wrong Credentials"
            res.json({message:message})
        }
        else{
            useremail = {email: email}
            const accessToken = jwt.sign(useremail,process.env.TOKEN)
            res.json({accessToken:accessToken})
        }


    }
}