const {Schema,model} = require("mongoose")

const applicationSchema = new Schema({
    name:String
},{
    versionKey:false,
    timestamps:true
});

module.exports = model("Application",applicationSchema);