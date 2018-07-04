
export default {
  Query: {
    getAllUsers: async (parent, args, { User }) => {
      const user = await User.find(args)
      return user
    },
    getUserbyVzId: async (parent, args, { User }) => {
      const user = await User.find(args)
      return user
    },
    getUserbyLocation: async (parent, args, { User }) => {
      const user = await User.find(args)
      return user
    },
    getUserbyPortfolio: async (parent, args, { User }) => {
      const user = await User.find(args)
      return user
    },

    getAllEvents: async (parent, args, { Event }) => {
      const event = await Event.find(args)
      return event
    },
    getEventsByLocation: async (parent, args, { Event }) => {
      const event = await Event.find(args)
      return event
    },
    getEventsByPortfolio: async (parent, args, { Event }) => {
      const event = await Event.find(args)
      return event
    },

    getCompletedEvents: async (parent, args, { Event }) => {
      console.log(Event)
      const events = await Event.find(args)
      var resp = []
      var current = new Date().getTime()

      events.map(x => {
        var end = x.eventEndDate.getTime()
        if (end < current) resp.push(x)
      })
      return resp
    },

    getTopUpcomingEvents: async (parent, args, { Event }) => {
      const events = await Event.find(args).sort({viewCount: -1}).limit(5)
    

      var resp = []
      var current = new Date().getTime()
        events.map(x => {
          var start = x.eventStartDate.getTime()
          var end = x.eventEndDate.getTime()
          if (start > current) resp.push(x)
        })
  

        
   
      return resp
    },
    getUpcomingEvents: async (parent, args, { Event }) => {
      const events = await Event.find(args)
      var resp = []
      var current = new Date().getTime()
     
     
     // if (!events === undefined) {
      
        events.map(x => {
          var start = x.eventStartDate.getTime()
          var end = x.eventEndDate.getTime()

          if (start > current) resp.push(x)
        })
      //}
      return resp
    },
    getOngoingEvents: async (parent, args, { Event }) => {
      const events = await Event.find(args)

      var resp = []
      var current = new Date().getTime()

      events.map(x => {
        var start = x.eventStartDate.getTime()
        var end = x.eventEndDate.getTime()

        if (start < current && current < end) resp.push(x)
      })
      return resp
    },

    getAllRegistration: async (parent, args, { Registration }) => {
      const registeration = await Registration.find(args)
      return registeration
    },

    getEventRegistration: async (parent, args, { EventRegistration }) => {
      const registeration = await Registration.find(args)
      return registeration
    },

    getMyRegistration: async (parent, args, { Registration }) => {
      const registeration = await Registration.find(args)
      return registeration
    },

    getMyTeam: async (parent, args, { Registration }) => {
      const registeration = await Registration.find(args)
      return registeration
    },

    getUser: async (parent, args, { VZUser }) => {
      const user = await VZUser.find(args)
      return user
    },

   getAllEventDetails: async (parent, args, { EventDetail }) => {
      const eventdetail = await EventDetail.find(args)
      return eventdetail
    },

    getEventIdDetails: async (parent, args, { EventDetail }) => {
      const eventdetail = await EventDetail.find(args)
      return eventdetail
    },
    
    
    getAllEventPrizes: async (parent, args, { EventPrize }) => {
      const prize = await EventPrize.find(args)
      return prize
    },

    getEventIdPrizes: async (parent, args, { EventPrize }) => {
      const prize = await EventPrize.find(args)
      return prize
    },
    
    getAllEventResults: async (parent, args, { EventResult }) => {
      const eventresult = await EventResult.find(args)
      return eventresult
    }, 

    getEventIdResults: async (parent, args, { EventResult }) => {
      const eventresult = await EventResult.find(args)
      return eventresult
    }, 

    getAllEventRegistration: async (parent, args, { EventRegistration }) => {
      const eventresult = await EventRegistration.find(args)
      return eventresult
    }, 

    getEventIdRegistration: async (parent, args, { EventRegistration }) => {
      const eventresult = await EventRegistration.find(args)
      return eventresult
    },
  },
  Mutation: {
    addUser: async (parent, args, { User }) => {
      const user = await new User(args).save()
      user._id = user._id.toString()
      return user
    },
    addEvent: async (parent, args, { Event }) => {
      const event = await new Event(args).save()
      event._id = event._id.toString()
      return event
    },

    addEventAuto: async (parent, args, { Event }) => {
 
      const event = await new Event(args).save()
      event._id = event._id.toString()
      return event
    },

    addEventDetail: async (parent, args, { EventDetail }) => {
      const eventdetail = await new EventDetail(args).save()
      eventdetail._id = eventdetail._id.toString()
      return eventdetail
    },
    addEventPrize: async (parent, args, { EventPrize }) => {
      const eventprice = await new EventPrize(args).save()
      eventprice._id = eventprice._id.toString()
      return eventprice
    },
    addEventResult: async (parent, args, { EventResult }) => {
      const eventresult = await new EventResult(args).save()
      eventresult._id = eventresult._id.toString()
      return eventresult
    },
    addEventRegistration: async (parent, args, { EventRegistration }) => {
      const eventregistration = await new EventRegistration(args).save()
      eventregistration._id = eventregistration._id.toString()
      return eventregistration
    },
   
    addRegistration: async (parent, args, { Registration }) => {
      const registration = await new Registration(args).save()
      registration._id = registration._id.toString()
      return registration
    },
    upLikeCount: async (parent, args, { Event }) => {
      const events = await Event.find(args)
      var resp=[];

      return events.map(x => {
       
        x.set({ likesCount: x.likesCount ? x.likesCount + 1 : 1 })
        x.save()
     
       return x
      })
  
      return  events
    },

    upViewCount: async (parent, args, { Event }) => {
      const events = await Event.find(args)
      var resp=[];

      return events.map(x => {
       
        x.set({ viewCount: x.viewCount ? x.viewCount + 1 : 1 })
        x.save()
     
       return x
      })
  
      return  events
    },

    /**createTalk: async (parent, args, { Talk }) => {
      const talk = await new Talk(args).save()
      talk._id = talk._id.toString()
      return talk
    },
  
 
    upvoteTalk: async (parent, args, { Talk }) => {
      const talk = await Talk.findById(args.id)
      talk.set({ votes: talk.votes ? talk.votes + 1 : 1 })
      await talk.save()
      return talk
    },  **/
  },
}
