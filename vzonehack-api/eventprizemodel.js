import mongoose, { models } from 'mongoose'
const  AutoIncrement= require('mongoose-sequence')(mongoose);

var EventPrizeSchema = mongoose.Schema({
  //prizeId: auto increment,
  eventId: Number,
  prize: String,
  prizeName: String
});



EventPrizeSchema.plugin(AutoIncrement, {inc_field: 'prizeId'});
const EventPrize=mongoose.model('eventprize',EventPrizeSchema);
export default EventPrize




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


