import mongoose, { models } from 'mongoose'
const  AutoIncrement= require('mongoose-sequence')(mongoose);

var EventRegSchema = mongoose.Schema({
  //teamId: Number,
  eventId:Number,
  pocEmail: String,
  teamEmail: String,
  teamName: String
});



EventRegSchema.plugin(AutoIncrement, {inc_field: 'teamId'});
const EventRegistartion=mongoose.model('eventregistration',EventRegSchema);
export default EventRegistartion

