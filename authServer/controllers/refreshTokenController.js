const jwt = require('jsonwebtoken');
const db = require('../config/dbConnection')

const handleRefreshToken = async(req,res)=>{
    // const cookies = req.cookies;
    // console.log(req.cookies)
    // if (!cookies?.jwt) return res.sendStatus(401);
    // const refreshToken = cookies.jwt;
    const refreshToken = req.body.refreshToken
    const decoded = jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET);
    db.query("SELECT * FROM users WHERE username = ? ",[decoded.username],
    (err,result)=>{
        if(err) return res.sendStatus(403); //Forbidden user
        if(result.length===1){
            const accessToken = jwt.sign({
                    username: result[0].username,
                    role: result[0].role
                },
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn:'60s'}
            );
            res.json({accessToken});
        }

    })
}

module.exports = {handleRefreshToken}

