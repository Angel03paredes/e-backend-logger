const {Schema,model} = require("mongoose")

const applicationSchema = new Schema({
    name:String
},{
    versionKey:false,
    timestamps:{createdAt:"created_at",updatedAt:"updated_at"}
});

module.exports = model("Application",applicationSchema);