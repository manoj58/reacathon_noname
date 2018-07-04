import mongoose, { models } from 'mongoose'
const  AutoIncrement= require('mongoose-sequence')(mongoose);

var EventSchema = mongoose.Schema({
  //eventId: no need,
  eventName: String,
  eventType: String,
  eventStartDate: Date,
  eventEndDate: Date,
  nominationStartDate: Date,
  nominationEndDate: Date,
  minTeamSize: Number,
  maxTeamSize: Number,
  eventPortfolio: String,
  eventLocation: String,
  eventPOCMail: String,
  multipleParticipationAllowed: Boolean,
  viewCount: Number,
  likesCount: Number
});



EventSchema.plugin(AutoIncrement, {inc_field: 'eventId'});
const Event=mongoose.model('event',EventSchema);
export default Event




/**
 * 
mutation CreateUSERForTest {
  createUser(vzid: "v1111111", firstName: "MANOJ", lastName:  "SEKAR",
    eMail: "test@VERIZON.COM") {
    vzid
    ,firstName,lastName,eMail
  }
}

 */


