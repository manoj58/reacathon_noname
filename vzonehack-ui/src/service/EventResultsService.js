import axios from 'axios';
import ApolloClient, { gql } from 'apollo-boost';

export class EventService {

    client = new ApolloClient({
        uri: 'http://10.74.22.231:3002/graphql'
    });

    GET_EVENTID_RESULTS = gql`
           query getEventIdResults($eventId: Int!) {
            getEventIdResults(eventId: $eventId) {
                eventId
                prizeId
                teamId
               }
             } `;
    ADD_EVENT_RESULT = gql`
             mutation addEventIdResult($eventId: Int!, $prizeId: Int!, $teamId: Int!) {
                addEventIdResult(eventId: $eventId, prizeId: $prizeId, teamId: $teamId) {
                    eventId
                    prizeId
                    teamId
                 }
               } `;

    getEventIdResults(eventId) {
        return this.client.query({
            query: this.GET_EVENTID_RESULTS,
            variables: {
                "eventId": eventId
            }
        }).then(results => results.data);
    }

    addEventIdResult(eventId, prizeId, teamId) {
        return this.client.mutate({
            mutation: this.ADD_EVENT_RESULT,
            variables: {
                "eventId": eventId,
                "prizeId": prizeId,
                "teamId": teamId
            }
        }).then(results => results.data);
    }
}