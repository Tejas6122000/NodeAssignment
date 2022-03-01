const routes = require('express').Router()
const auth_mw = require('../../../middleware/auth_mw')


module.exports=()=>{
    routes.get('/',auth_mw.auth,require('./getAll')());
    routes.get('/:id',auth_mw.auth,require('./getOne')());
    routes.get('/profile/self',auth_mw.auth,require('./getSelf')());
    routes.post('/profile/update',auth_mw.auth,require('./updateUser')());
    routes.post('/profile/resetpassword',auth_mw.auth,require('./changePassword')());
    routes.post('/login',require('./login')());
    routes.post('/register',require('./register')());


    
    return routes
}