const bcrypt = require('bcrypt');
const users =[
    {
        id:1,
        name: 'Tejas',
        email:'t@g.com',
        phone:'8000000000',
        password: '$2b$10$gnyfIPwc3cdoRJIX7C19HuKJC0Pl2v3MiTqUWENztVaM97OVM1hM.'
    },
    {
        id:2,
        name:'Keyur',
        email: 'k@g.com',
        phone:'9000000000',
        password: '$2b$10$OSX7gPwV5rwduLrFShEw9OXMfNGdqsH2dB6gAxJup77xApHAbPU02'
    }
]


const getAllUsers = ()=>{
    return users
}
const getUser =(id)=>{
    const user = users.filter((eachUser)=> eachUser.id == id)
    return user
}

const addUser= (name,email,phone,password)=>{
    const id = users.length+1;
    const user = {id:id, name:name,email:email,phone:phone,password:password}
    users.push(user)
    return users
}

const getUserEmail =(email)=>{
    const user = users.filter((eachUser)=> eachUser.email == email)
    return user
}

const updateUser =(email,name,newemail,newphone)=>{
    for(let i=0; i<users.length;i++){
        if(users[i].email==email){
            users[i].name=name;
            users[i].email=newemail;
            users[i].phone = newphone;
            break
        }
    }
    return users

}


const updatePassword =(email,password,newpassword)=>{
    message = "Wrong Password"
    for(let i=0; i<users.length;i++){
        if(users[i].email==email && bcrypt.compareSync(password,users[i].password)){

            users[i].password=bcrypt.hashSync(newpassword, 10);
            message = "Password Changed Successfully"
            break
        }
    }
    return message

}

module.exports={
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    updatePassword,
    getUserEmail,
}