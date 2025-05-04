//reports.js under the modules folder
const mongoose = require('mongoose');

const reportingSchema = new mongoose.Schema({
    facility:String,
    issue:String,
    residentInfo:String, //for the resident information.

    status: {
        type: String,
        enum: ['Pending','In progress','Done'],
        default: 'Pending' //when the admin books the status it should appear to update the schema
    }
}); 


const ReportModel = mongoose.model("Reports",reportingSchema);
module.exports = ReportModel;