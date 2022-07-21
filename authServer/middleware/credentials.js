const allowedOrigins = [
    'https://www.yoursite.com',
    'http://192.168.1.4:3000',
    'http://localhost:3000'
];

const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.header('Access-Control-Allow-Credentials', true);
    }
    next();
}

module.exports = credentials