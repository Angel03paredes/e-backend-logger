const {Schema,model,Types} = require("mongoose")

const logSchema = new Schema({
    application_id : Types.ObjectId,
    type:{
        type:String,
        enum:["error","info","warning"]
    },
    priority:{
        type:String,
        enum:["lowest", "low", "medium", "high", "highest"]
    },
    path:String,
    message:String,
    request:{
        data:Schema.Types.Mixed
    },
    response:{
        data:Schema.Types.Mixed
    }

})

module.exports = model("Log",logSchema)