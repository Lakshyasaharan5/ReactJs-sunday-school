require('dotenv').config();
const express = require('express');
const cors = require('cors');

const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
// const db = require('./config/dbConnection')
const authController = require('./controllers/authController');
const refreshTokenController = require('./controllers/refreshTokenController');
const userController = require('./controllers/userController');
const credentials = require('./middleware/credentials');
const verifyJWT = require('./middleware/verifyJWT')
const path = require("path");
// const corsOptions = require('./config/corsOptions');

const app = express();
app.use(cors())
app.use(express.static('public'))
// app.use(cors({
//     credentials: true, 
//     origin:'http://192.168.1.6:3000',
//     methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
// }));
// app.use(cors({
//     origin:"192.168.1.6:3000",
//     credentials: true,
// }));

// const allowedOrigins = [
//     "http://localhost:3000",
//     "http://192.168.1.6:3000"
// ]
// app.use(cors({
//         origin:"http://192.168.1.6:3000",
//         // origin: function(origin, callback){
//         //     if(!origin) return callback(null, true);
//         //     if(allowedOrigins.indexOf(origin) === -1){
//         //       var msg = 'The CORS policy for this site does not ' +
//         //                 'allow access from the specified Origin.';
//         //       return callback(new Error(msg), false);
//         //     }
//         //     return callback(null, true);
//         //   },
//         credentials:true
//     }));

app.use(cookieParser());
app.use(express.json());

app.get('/api/v1/test',(req,res)=>{
    res.send('test success')
})

app.post('/api/v1/login',authController.handleLogin);

app.get('/api/v1/refresh', refreshTokenController.handleRefreshToken);

app.get('/api/v1/user',verifyJWT,userController.handleUserData)

app.get('/api/v1/logout',(req,res)=>{
    res
        .status(202)
        .clearCookie('refreshToken').send("cookies cleared")
})

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/index.html'))
})
// app.use(express.static(path.join(__dirname,'../public/index.html')))

app.listen(1339,()=>{
    console.log("server started at port:1339")
})