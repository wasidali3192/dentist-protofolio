const mongoose=require('mongoose')
const Schema= mongoose.Schema;
const loginSchema=new Schema({
    name: {
        type: String,
        //required: true
    },
    email: {
        type: String,
        //required:true
    },
    Mobile:{
        type: Number
    },
    reason:{
        type: String
    }

});

const Logindata=mongoose.model('details',loginSchema);
module.exports=Logindata;