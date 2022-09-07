const jwt = require('jsonwebtoken');
const db = require('../config/dbConnection')

const handleLogin = async(req,res) =>{
    
    // res.header('Access-Control-Allow-Credentials', true);
    console.log(req.body)
    // const username = req.body.username;
    // const password = req.body.password;
    db.query("SELECT * FROM users WHERE username = ? AND password = ?",[req.body.username,req.body.password],
    (err,result)=>{
        if(err) return res.sendStatus(401);
        if(result.length===1){
            const accessToken = jwt.sign({
                    username: result[0].username,
                    role: result[0].role
                },

                process.env.ACCESS_TOKEN_SECRET,
                
                {expiresIn:'20s'}
            );
            const refreshToken = jwt.sign(
                {username:result[0].username},
                process.env.REFRESH_TOKEN_SECRET,
                {expiresIn:'1d'}
            );
            // res.cookie('jwt', JSON.stringify(refreshToken), { httpOnly: false, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });
            res
                .cookie('refreshToken',refreshToken,{
                    sameSite:'strict',
                    expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
                    httpOnly:true
                }).json({accessToken})
        }else{
            res.sendStatus(401);
        }
    })
}

module.exports = {handleLogin}