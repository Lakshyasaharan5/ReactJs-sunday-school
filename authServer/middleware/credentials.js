const allowedOrigins = [
    'https://www.yoursite.com',
    'http://192.168.1.6:3000',
    'http://localhost:3000'
];

const credentials = (req, res, next) => {
    // const origin = req.headers.origin;
    // if (allowedOrigins.includes(origin)) {
        
    // }
    console.log('middleware');
    res.header('Access-Control-Allow-Origin', 'http://192.168.1.6:3000');
    res.header('Access-Control-Allow-Credentials', true);
    next();
}

module.exports = credentials