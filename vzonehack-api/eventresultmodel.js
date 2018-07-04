import mongoose, { models } from 'mongoose'


var EventResultSchema = mongoose.Schema({
  prizeId: Number,
  eventId: Number,
  teamId: Number,
});

const EventResult=mongoose.model('eventresult',EventResultSchema);
export default EventResult




