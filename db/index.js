const  {connect} = require("mongoose")

const Connection = async()=>{
    try{
        await connect( process.env.MONGODB_URI ||"mongodb://127.0.0.1:27017/e-backend-logger")
        console.log("DB Connected")
    }catch(error){
        console.error(error)
    }
}

module.exports = {Connection}