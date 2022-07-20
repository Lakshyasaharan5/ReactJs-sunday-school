// const jwt = require('jsonwebtoken');
const userData = require('./teacher.json')

const handleUserData = async(req,res)=>{
    
    res.json({userData})
}

module.exports = {handleUserData}