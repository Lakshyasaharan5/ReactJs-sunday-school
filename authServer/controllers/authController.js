const jwt = require('jsonwebtoken');
const db = require('../config/dbConnection')

const handleLogin = async(req,res) =>{
    const username = req.body.username;
    const password = req.body.password;
    db.query("SELECT * FROM users WHERE username = ? AND password = ?",[username,password],
    (err,result)=>{
        if(err) return res.sendStatus(401);
        if(result.length===1){
            const accessToken = jwt.sign({
                    username: result[0].username,
                    role: result[0].role
                },

                process.env.ACCESS_TOKEN_SECRET,
                
                {expiresIn:'60s'}
            );
            const refreshToken = jwt.sign(
                {username:result[0].username},
                process.env.REFRESH_TOKEN_SECRET,
                {expiresIn:'1d'}
            );
            // res.cookie('jwt', JSON.stringify(refreshToken), { httpOnly: false, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

            res.json({accessToken,refreshToken})
        }else{
            res.sendStatus(401);
        }
    })
}

module.exports = {handleLogin}