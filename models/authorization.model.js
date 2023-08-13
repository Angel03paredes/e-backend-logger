const {Schema,model,Types} = require("mongoose")

const authorizationSchema = new Schema({
    application_id : Types.ObjectId,
    token:String 
},{
    versionKey:false,
    timestamps:true
}); 

module.exports = model("Authorization",authorizationSchema)