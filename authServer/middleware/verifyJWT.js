const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    
    const authHeader = req.headers['Authorization'] || req.headers['authorization']; // "bearer {token}"
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401);
    // console.log(token)
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403); //invalid token
            req.username = decoded.username;
            req.role = decoded.role;
            next();
        }
    );
}

module.exports = verifyJWT