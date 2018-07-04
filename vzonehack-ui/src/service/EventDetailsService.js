import axios from 'axios';
import ApolloClient, { gql } from 'apollo-boost';

export class EventService {

    client = new ApolloClient({
        uri: 'http://10.74.22.231:3002/graphql'
    });

    GET_EVENTID_DETAILS = gql`
           query getEventIdDetails($eventId: Int!) {
            getEventIdDetails(eventId: $eventId) {
                    eventId
                    problemId
                    problemStatement
                    Rules
                    eventPOCMail
               }
             } `;
    ADD_EVENT_DETAIL = gql`
             mutation addEventDetail($eventId: Int!, $problemStatement: String!, $Rules: String!, $eventPOCMail: String!) {
                addEventDetail(eventId: $eventId, problemStatement: $problemStatement, Rules: $Rules, eventPOCMail: $eventPOCMail) {
                    eventId
                    problemStatement
                    Rules
                    eventPOCMail
                 }
               } `;

    getEventIdDetails(eventId) {
        return this.client.query({
            query: this.GET_EVENTID_DETAILS,
            variables: {
                "eventId": eventId
            }
        }).then(results => results.data);
    }

    addEventDetail(eventId, problemStatement, Rules, eventPOCMail) {
        return this.client.mutate({
            mutation: this.ADD_EVENT_DETAIL,
            variables: {
                "eventId": eventId,
                "problemStatement": problemStatement,
                "Rules": Rules,
                "eventPOCMail": eventPOCMail
            }
        }).then(results => results.data);
    }
}