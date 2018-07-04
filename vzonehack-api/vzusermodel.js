import mongoose from 'mongoose';

/**import mongoose from 'mongoose';

const Date = new GraphQLScalarType({
  name: 'Date',
  serialize(value) {
    return value;
  },
});**/



//table name is users

const VZUser = mongoose.model('vzuser', {
   vzid: String,
  firstName: String,
  lastName: String,
  eMail: String
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

export default VZUser
