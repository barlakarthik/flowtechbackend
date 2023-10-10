import mongoose from "mongoose";
const enquirymodel = new mongoose.Schema({
    accountname: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    territory: {
        type: String,
        required: true
    },
    enqRefNum: {
        type: String,
        required: true
    },
    enqSource:{
        type:String,
        required:true
    },
    sector: {
        type: Object,
        required: true,
    },
    enqOwner: {
        type: Object,
        required: true
    },
    approve: {
        type: Boolean,
        default: false
    },
    export: {
        type: Boolean,
        default: false
    },
    products: {
        type: Array
    }
})
const Enquiry = mongoose.model("enquiry", enquirymodel);
export default Enquiry;