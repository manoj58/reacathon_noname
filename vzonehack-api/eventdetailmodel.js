import mongoose, { models } from 'mongoose'
const  AutoIncrement= require('mongoose-sequence')(mongoose);

var EventDetailSchema = mongoose.Schema({
 // problemId: auto increment,
  eventId: Number,
  problemStatement: String,
  eventPOCMail: String,
  Rules: String
});



EventDetailSchema.plugin(AutoIncrement, {inc_field: 'problemId'});
const EventDetail=mongoose.model('eventdetail',EventDetailSchema);

export default EventDetail





