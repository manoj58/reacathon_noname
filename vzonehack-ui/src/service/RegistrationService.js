import ApolloClient, { gql } from 'apollo-boost';

export class RegistrationService {

    client = new ApolloClient({
        uri: 'http://10.74.22.231:3002/graphql'
    });

    GET_ALL_REGISTRATION = gql`
           query getAllRegistration {
            getAllRegistration {
                eventId
                vzId
                teamId
                teamName
               }
             } `;

    GET_MY_REGISTRATION = gql`
        query getMyRegistration($vzId: String!) {
            getMyRegistration(vzId: $vzId) {
                eventId
                vzId
                teamId
                teamName
            }
        } `;

    GET_EVENT_REGISTRATION = gql`
        query getEventRegistration($eventId: String!) {
            getEventRegistration(eventId: $eventId) {
                eventId
                vzId
                teamId
                teamName
            }
        } `;

    GET_EVENTID_REGISTRATION = gql`
        query getEventIdRegistration($eventId: Int!) {
            getEventIdRegistration(eventId: $eventId) {
                eventId
                teamId
                teamName
                pocEmail
                teamEmail
            }
        } `;

    ADD_REGISTRATION = gql`
             mutation addEvent($eventId: String!, $vzId: String!, $teamId: Date!, $teamName: Date!) {
                 addEvent(eventId: $eventId, vzId: $vzId, teamId: $teamId, teamName: $teamName) {
                    eventId
                    vzId
                    teamId
                    teamName
                 }
               } `;
    ADD_EVENT_REGISTRATION = gql`
             mutation addEventRegistration($eventId: Int!, $teamName: String!, $pocEmail: String!, $teamEmail: String!) {
                 addEventRegistration(eventId: $eventId, teamName: $teamName, pocEmail: $pocEmail, teamEmail: $teamEmail) {
                    eventId
                    teamName
                    pocEmail
                    teamEmail
                 }
               } `;

    getAllRegistration() {
        return this.client.query({
            query: this.GET_ALL_REGISTRATION
        }).then(results => results.data);
    }

    getMyRegistration(vzId) {
        return this.client.query({
            query: this.GET_MY_REGISTRATION,
            variable: {
                "vzId": vzId
            }
        }).then(results => results.data);
    }

    getEventRegistration(eventId) {
        return this.client.query({
            query: this.GET_EVENT_REGISTRATION,
            variable: {
                "eventId": eventId
            }
        }).then(results => results.data);
    }

    getEventIdRegistration(eventId) {
        return this.client.query({
            query: this.GET_EVENTID_REGISTRATION,
            variable: {
                "eventId": eventId
            }
        }).then(results => results.data);
    }

    addEventRegistration(eventId, teamName, pocEmail, teamEmail) {
        return this.client.mutate({
            mutation: this.ADD_EVENT_REGISTRATION,
            variables: {
                "eventId": eventId,
                "teamName": teamName,
                "pocEmail": pocEmail,
                "teamEmail": teamEmail
            }
        }).then(results => results.data);
    }

    addRegistration(eventId, vzId, teamId, teamName) {
        return this.client.mutate({
            mutation: this.ADD_REGISTRATION,
            variables: {
                "eventId": eventId,
                "vzId": vzId,
                "teamId": teamId,
                "teamName": teamName
            }
        }).then(results => results.data);
    }
}