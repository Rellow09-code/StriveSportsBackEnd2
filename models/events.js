//events.js under the modules folder
const mongoose = require('mongoose');

const TempeventsSchema = new mongoose.Schema({ //changin the name of the schema to events
    event:String,
    date:String,
    time_from:String,
    time_to:String, 
    event_description:String,

}); 


const TempEventModel = mongoose.model("Events",TempeventsSchema);
module.exports = TempEventModel;

