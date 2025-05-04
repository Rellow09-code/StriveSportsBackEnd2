//sportsbookings.js under the modules folder
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    sport:String,
    date:String,
    time:String,
    residentInfo:String, //for the resident information.

    status: {
        type: String,
        enum: ['pending','approved','rejected'],
        default: 'pending' //when the admin books the status it should appear to update the schema
    }
}); //added ;



const UserModel = mongoose.model("Sports",bookingSchema);
module.exports = UserModel;