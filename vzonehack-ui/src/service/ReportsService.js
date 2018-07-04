import axios from 'axios';
import ApolloClient, { gql } from 'apollo-boost';

export class ReportsService {
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

    getLeaderboardStats() {
        return axios.get('assets/demo/data/leaderboard.json')
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
}