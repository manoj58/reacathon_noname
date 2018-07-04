import mongoose from 'mongoose'

const Registration = mongoose.model('registration', {
  vzId: String,
  eventId: String,
  teamId: String,
  teamName: String
})



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

export default Registration
