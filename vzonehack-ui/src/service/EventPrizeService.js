import axios from 'axios';
import ApolloClient, { gql } from 'apollo-boost';

export class EventService {

    client = new ApolloClient({
        uri: 'http://10.74.22.231:3002/graphql'
    });

    GET_EVENTID_PRIZE = gql`
           query getEventIdPrizes($eventId: Int!) {
            getEventIdPrizes(eventId: $eventId) {
                eventId
                prizeId
                prizeName
                prize
               }
             } `;
    ADD_EVENT_PRIZE = gql`
             mutation addEventPrize($eventId: Int!, $prizeName: String!, $prize: String!) {
                addEventPrize(eventId: $eventId, prizeName: $prizeName, prize: $prize) {
                    eventId
                    prizeName
                    prize
                 }
               } `;

    getEventIdPrizes(eventId) {
        return this.client.query({
            query: this.GET_EVENTID_PRIZE,
            variables: {
                "eventId": eventId
            }
        }).then(results => results.data);
    }

    addEventIdPrize(eventId, prizeName, prize) {
        return this.client.mutate({
            mutation: this.ADD_EVENT_PRIZE,
            variables: {
                "eventId": eventId,
                "prizeName": prizeName,
                "prize": prize
            }
        }).then(results => results.data);
    }
}