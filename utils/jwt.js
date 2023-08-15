const jwt = require("jsonwebtoken")
const SECRET_KEY = "12345678";
require("dotenv").config();

exports.createAccessToken = (payload)=>{
    return jwt.sign(payload,process.env.SECRET_KEY || SECRET_KEY,{expiresIn:60 * 60 * 24})
}


exports.verifyToken = function(token){
    return jwt.verify(token, process.env.SECRET_KEY || SECRET_KEY);
}