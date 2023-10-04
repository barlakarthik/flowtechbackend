import mongoose from "mongoose";
const enquirymodel = new mongoose.Schema({
    id: {
        type: String
    },
    accountname: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
    },
    territory: {
        type: String,
    },
    enqRefNum: {
        type: String
    },
    sector: {
        type: Object,
        required: true,
    },
    enqOwner: {
        type: Object,
        required: true
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