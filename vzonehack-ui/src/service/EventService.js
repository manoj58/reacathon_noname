import axios from 'axios';
import ApolloClient, { gql } from 'apollo-boost';

export class EventService {

    client = new ApolloClient({
        uri: 'http://10.74.22.231:3002/graphql'
    });

    GET_EVENTS = gql`
           query getEventQuery {
               getAllEvents {
                 eventId
                 eventName
                 eventType
                 eventStartDate
                 eventEndDate
                 nominationStartDate
                 nominationEndDate
                 minTeamSize
                 maxTeamSize
                 eventPortfolio
                 eventLocation
                 eventPOCMail
                 viewCount
                 likesCount
               }
             } `;
    ADD_EVENT = gql`
             mutation CreateEventQuery($eventName: String!, $eventType: String!, $eventStartDate: Date!, $eventEndDate: Date!, $nominationStartDate: Date!, $nominationEndDate: Date!, $minTeamSize: Int!, $maxTeamSize: Int!, $eventPortfolio: String!, $eventLocation: String!, $eventPOCMail: String!) {
                 addEventAuto(eventName: $eventName, eventType: $eventType, eventStartDate: $eventStartDate, eventEndDate: $eventEndDate, nominationStartDate: $nominationStartDate, nominationEndDate: $nominationEndDate, minTeamSize: $minTeamSize, maxTeamSize: $maxTeamSize, eventPortfolio: $eventPortfolio, eventLocation: $eventLocation, eventPOCMail: $eventPOCMail, viewCount: 0, likesCount: 0) {
                   eventName
                   eventType
                   eventStartDate
                   eventEndDate
                   nominationStartDate
                   nominationEndDate
                   minTeamSize
                   maxTeamSize
                   eventPortfolio
                   eventLocation
                   eventPOCMail
                   viewCount
                   likesCount
                 }
               } `;

    GET_UPCOMING_EVENTS = gql`
               query getUpcomingEvents {
                   getUpcomingEvents {
                     eventId
                     eventName
                     eventType
                     eventStartDate
                     eventEndDate
                     nominationStartDate
                     nominationEndDate
                     minTeamSize
                     maxTeamSize
                     eventPortfolio
                     eventLocation
                     eventPOCMail
                     viewCount
                     likesCount
                   }
                 } `;

    GET_ONGOING_EVENTS = gql`
                 query getOngoingEvents {
                     getOngoingEvents {
                       eventId
                       eventName
                       eventType
                       eventStartDate
                       eventEndDate
                       nominationStartDate
                       nominationEndDate
                       minTeamSize
                       maxTeamSize
                       eventPortfolio
                       eventLocation
                       eventPOCMail
                       viewCount
                       likesCount
                     }
                   } `;

    GET_EVENTS_PORTFOLIO = gql`
                   query getEventsByPortfolio($portfolio: String!) {
                       getEventsByPortfolio(portfolio: $portfolio) {
                           eventId
                           eventName
                           eventType
                           eventStartDate
                           eventEndDate
                           nominationStartDate
                           nominationEndDate
                           minTeamSize
                           maxTeamSize
                           eventPortfolio
                           eventLocation
                           eventPOCMail
                           viewCount
                           likesCount
                       }
                   } `;

    GET_EVENT_LOCATION = gql`
        query getEventsByLocation($location: String!) {
            getEventsByLocation(location: $location) {
                eventId
                eventName
                eventType
                eventStartDate
                eventEndDate
                nominationStartDate
                nominationEndDate
                minTeamSize
                maxTeamSize
                eventPortfolio
                eventLocation
                eventPOCMail
                viewCount
                likesCount
            }
        } `;

    getEvents() {
        return axios.get('assets/demo/data/scheduleevents.json')
            .then(res => res.data.data);
    }

    getAllEvents() {
        return this.client.query({
            query: this.GET_EVENTS
        }).then(results => results.data);
    }

    getUpcomingEvents() {
        return this.client.query({
            query: this.GET_UPCOMING_EVENTS
        }).then(results => results.data);
    }

    getOngoingEvents() {
        return this.client.query({
            query: this.GET_ONGOING_EVENTS
        }).then(results => results.data);
    }

    getEventsbyPortfolio(portfolio) {
        return this.client.query({
            query: this.GET_EVENTS_PORTFOLIO,
            variables: {
                "portfolio": portfolio
            }
        }).then(results => results.data);
    }

    getEventsbyLocation(location) {
        return this.client.query({
            query: this.GET_EVENT_LOCATION,
            variables: {
                "location": location
            }
        }).then(results => results.data);
    }

    addEvent(eventName, eventType, eventStartDate, eventEndDate, nominationStartDate, nominationEndDate, minTeamSize, maxTeamSize, eventPortfolio, eventLocation, eventPOCMail) {
        return this.client.mutate({
            mutation: this.ADD_EVENT,
            variables: {
                "eventName": eventName,
                "eventType": eventType,
                "eventStartDate": eventStartDate,
                "eventEndDate": eventEndDate,
                "nominationStartDate": nominationStartDate,
                "nominationEndDate": nominationEndDate,
                "minTeamSize": minTeamSize,
                "maxTeamSize": maxTeamSize,
                "eventPortfolio": eventPortfolio,
                "eventLocation": eventLocation,
                "eventPOCMail": eventPOCMail
            }
        }).then(results => results.data);
    }
}