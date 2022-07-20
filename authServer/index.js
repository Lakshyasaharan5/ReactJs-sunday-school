require('dotenv').config();
const express = require('express');
const cors = require('cors');

const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const db = require('./config/dbConnection')
const authController = require('./controllers/authController');
const refreshTokenController = require('./controllers/refreshTokenController');
const userController = require('./controllers/userController');
const credentials = require('./middleware/credentials');
const verifyJWT = require('./middleware/verifyJWT')
const corsOptions = require('./config/corsOptions');

const app = express();

app.use(express.json());
app.use(cors());
app.use(credentials);
app.use(cors(corsOptions));
app.use(cookieParser());


app.post('/api/v1/login', authController.handleLogin);

app.post('/api/v1/refresh', refreshTokenController.handleRefreshToken);

app.get('/api/v1/user',verifyJWT,userController.handleUserData)

app.listen(3001,()=>{
    console.log("server started at port:3001")
})