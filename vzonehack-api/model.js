import mongoose from 'mongoose'

const Talk = mongoose.model('Talk', {
  name: String,
  conferenceName: String,
  video: String,
  votes: Number,
  description: String,
  speakerName: String,
  date: String
})



const User = mongoose.model('user', {
  vzId: String,
  firstName: String,
  lastName: String,
  email: String,
  portfolio: String,
  location: String,
  phoneNo: String
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

export default User
