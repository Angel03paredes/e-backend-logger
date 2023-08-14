const {verifyToken} = require("./../utils/jwt")

exports.ensureAuth = (req, res, next) => {
    if(!req.headers.authorization){
        return res.status(403).send({message:"No hay header de autenticación."});
    }
    const token = req.headers.authorization.replace(/['"]+/g, '');
    try {
        var payload = verifyToken(token)
    } catch (ex) {
        console.error(ex);
        return res.status(403).send({message: "Token inválido."});
    }
    
    req.app = payload;
    next();
}