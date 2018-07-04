export default `

scalar Date

type VZUser {
  vzid: String
  firstName: String
  lastName: String
  eMail: String
}

type EventDetail {
  problemId: Int
  eventId: Int
  problemStatement: String
  eventPOCMail: String
  Rules: String
}

type EventPrize {
   prizeId: Int
   eventId: Int
   prize: String
   prizeName: String
}

type EventResult {
  prizeId: Int
  eventId: Int
  teamId: Int

}


type EventRegistration {
  teamId: Int
  eventId:Int
  pocEmail: String
  teamEmail: String
  teamName: String
}

type User {
  vzId: String
  firstName: String
  lastName: String
  email: String
  portfolio: String
  location: String
  phoneNo: String
}

type Event {
  eventId: Int
  eventName: String
  eventType: String
  eventStartDate: Date
  eventEndDate: Date
  nominationStartDate: Date
  nominationEndDate: Date
  minTeamSize: Int
  maxTeamSize: Int
  eventPortfolio: String
  eventLocation: String
  eventPOCMail: String
  multipleParticipationAllowed: Boolean
  viewCount: Int
  likesCount: Int
}

type Registration {
  vzId: String
  eventId:Int
  teamId: String
  teamName: String
}


type Query {
  getAllUsers(
    vzId: String,
    firstName: String,
    lastName: String,
    email: String,
    portfolio: String,
    location: String,
    phoneNo: String
  ): [User!]!,
  getUserbyVzId(
    vzId: String!,
    firstName: String,
    lastName: String,
    email: String,
    portfolio: String,
    location: String,
    phoneNo: String
  ): [User!]!,
  getUserbyLocation(
    vzId: String,
    firstName: String,
    lastName: String,
    email: String,
    portfolio: String,
    location: String!,
    phoneNo: String
  ): [User!]!,
  getUserbyPortfolio(
    vzId: String,
    firstName: String,
    lastName: String,
    email: String,
    portfolio: String!,
    location: String,
    phoneNo: String
  ): [User!]!,
  getAllEvents(
    eventId:Int,
  eventName: String,
  eventType: String,
  eventStartDate: Date,
  eventEndDate: Date,
  nominationStartDate: Date,
  nominationEndDate: Date,
  minTeamSize: Int,
  maxTeamSize: Int,
  eventPortfolio: String,
  eventLocation: String,
  eventPOCMail: String,
  viewCount: Int,
  likesCount: Int
  ): [Event!]!,
  getEventsByLocation(
    eventId:Int,
  eventName: String,
  eventType: String,
  eventStartDate: Date,
  eventEndDate: Date,
  nominationStartDate: Date,
  nominationEndDate: Date,
  minTeamSize: Int,
  maxTeamSize: Int,
  eventPortfolio: String,
  eventLocation: String!,
  eventPOCMail: String,
  viewCount: Int,
  likesCount: Int
  ): [Event!]!,
  getEventsByPortfolio(
    eventId:Int,
  eventName: String,
  eventType: String,
  eventStartDate: Date,
  eventEndDate: Date,
  nominationStartDate: Date,
  nominationEndDate: Date,
  minTeamSize: Int,
  maxTeamSize: Int,
  eventPortfolio: String!,
  eventLocation: String,
  eventPOCMail: String,
  viewCount: Int,
  likesCount: Int
  ): [Event!]!,
  getUpcomingEvents(
    eventId: Int,
  eventName: String,
  eventType: String,
  eventStartDate: Date,
  eventEndDate: Date,
  nominationStartDate: Date,
  nominationEndDate: Date,
  minTeamSize: Int,
  maxTeamSize: Int,
  eventPortfolio: String,
  eventLocation: String,
  eventPOCMail: String,
  viewCount: Int,
  likesCount: Int
  ): [Event!]!,

  getTopUpcomingEvents(
    eventId: Int,
  eventName: String,
  eventType: String,
  eventStartDate: Date,
  eventEndDate: Date,
  nominationStartDate: Date,
  nominationEndDate: Date,
  minTeamSize: Int,
  maxTeamSize: Int,
  eventPortfolio: String,
  eventLocation: String,
  eventPOCMail: String,
  viewCount: Int,
  likesCount: Int
  ): [Event!]!,
  getOngoingEvents(
    eventId:Int,
  eventName: String,
  eventType: String,
  eventStartDate: Date,
  eventEndDate: Date,
  nominationStartDate: Date,
  nominationEndDate: Date,
  minTeamSize: Int,
  maxTeamSize: Int,
  eventPortfolio: String,
  eventLocation: String,
  eventPOCMail: String,
  viewCount: Int,
  likesCount: Int
  ): [Event!]!,
  getCompletedEvents(
    eventId:Int,
  eventName: String,
  eventType: String,
  eventStartDate: Date,
  eventEndDate: Date,
  nominationStartDate: Date,
  nominationEndDate: Date,
  minTeamSize: Int,
  maxTeamSize: Int,
  eventPortfolio: String,
  eventLocation: String,
  eventPOCMail: String,
  viewCount: Int,
  likesCount: Int
  ): [Event!]!,
  getAllRegistration(
    vzId: String,
  eventId:Int,
  teamId: String,
  teamName: String
  ): [Registration!],
  getEventRegistration(
    vzId: String,
  eventId: Int!,
  teamId: String,
  teamName: String
  ): [Registration!],
  getMyRegistration(
    vzId: String!,
  eventId:Int,
  teamId: String,
  teamName: String
  ): [Registration!],
  getMyTeam(
    vzId: String,
  eventId: Int!,
  teamId: String!,
  teamName: String
  ): [Registration!],

  getUser(
    vzid: String,
    firstName: String,
    lastName: String,
    eMail: String
  ): [VZUser!]


  
  getAllEventDetails (
  problemId: Int,
  eventId: Int,
  problemStatement: String,
  eventPOCMail: String,
  Rules: String
): [EventDetail!]
  getEventIdDetails (
  problemId: Int,
  eventId: Int!,
  problemStatement: String,
  eventPOCMail: String,
  Rules: String
): [EventDetail!]

getAllEventPrizes(
  prizeId: Int,
  eventId: Int,
  prize: String,
  prizeName: String
 ): [EventPrize!]

getEventIdPrizes(
  prizeId: Int,
  eventId: Int!,
  prize: String,
  prizeName: String
 ): [EventPrize!]

  getAllEventResults (
  prizeId: Int,
  eventId: Int,
  teamId: Int

): [EventResult!]

getEventIdResults (
  prizeId: Int,
  eventId: Int!,
  teamId: Int

): [EventResult!]

getAllEventRegistration (
  teamId: Int
  eventId:Int
  pocEmail: String
  teamEmail: String
  teamName: String

): [EventRegistration!]

getEventIdRegistration (
  teamId: Int
  eventId:Int!
  pocEmail: String
  teamEmail: String
  teamName: String

): [EventRegistration!]



}

type Mutation {
  addUser(
    vzId: String!,
    firstName: String!,
    lastName: String!,
    email: String!,
    portfolio: String!,
    location: String!,
    phoneNo: String!
  ): User!

  addEvent(
  eventId: Int!,
  eventName: String!,
  eventType: String!,
  eventStartDate: Date!,
  eventEndDate: Date!,
  nominationStartDate: Date!,
  nominationEndDate: Date!,
  minTeamSize: Int!,
  maxTeamSize: Int!,
  eventPortfolio: String!,
  eventLocation: String!,
  eventPOCMail: String!,
  viewCount: Int,
  likesCount: Int
  ): Event!


  addEventAuto(
    eventId: Int,
    eventName: String!,
    eventType: String!,
    eventStartDate: Date!,
    eventEndDate: Date!,
    nominationStartDate: Date!,
    nominationEndDate: Date!,
    minTeamSize: Int!,
    maxTeamSize: Int!,
    eventPortfolio: String!,
    eventLocation: String!,
    eventPOCMail: String!,
    viewCount: Int,
    likesCount: Int
    ): Event!

    upLikeCount(
    eventId: Int!
  ): [Event!]!

  upViewCount(
    eventId: Int!
  ): [Event!]!

  addRegistration(
    vzId: String!,
  eventId: Int!,
  teamId: String!,
  teamName: String!
  ): Registration!

  addEventRegistration(
    teamId: Int
    eventId:Int!
    pocEmail: String!
    teamEmail: String!
    teamName: String!
  ): EventRegistration!

  addEventDetail(
    problemId: Int
    eventId: Int!
    problemStatement: String!
    eventPOCMail: String!
    Rules: String!
  ): EventDetail!

  addEventPrize(
     prizeId: Int
     eventId: Int!
     prize: String!
     prizeName: String!
  ): EventPrize!

  addEventResult(
    prizeId: Int!
    eventId: Int!
    teamId: Int!
  ): EventResult!

  createUser(
    vzid: String!,
    firstName: String!,
    lastName: String!,
    eMail: String!
  ): VZUser!
}

`
