const jwt = require('jsonwebtoken');

const auth = (req,res,next)=>{
    const authHeader = req.headers['authorization']
    const token =authHeader && authHeader.split(' ')[1]
    if(token ==null){
    return res.status(401).json({success:false})
    }
    else{
        jwt.verify(token,process.env.TOKEN,(err,useremail)=>{
            if(err) return res.status(400).json({message:false})
            req.user = useremail
            next()
        })
    }

}

module.exports={
    auth,
}