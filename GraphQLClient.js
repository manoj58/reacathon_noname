import ApolloClient, { gql } from 'apollo-boost';

export class GraphQLClient {

    userInfo;
//uri: 'http://10.74.22.183:3000/graphiql'
    client = new ApolloClient({
        uri: 'http://10.74.22.183:3000/graphql'
    });

    setData(data) {
        this.userInfo = data;
    }

    getAllUsers() {
        let GET_USER = gql`
        query getAllUsers {
            getAllUsers {
                vzId
                firstName
                lastName
            }
        } `;

        this.client.query({
            query: GET_USER
        }).then(results => {
            this.setData(results.data)
        });
        return this.userInfo;
    }

    getAllEvents() {
        let GET_EVENTS = gql`
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

        this.client.query({
            query: GET_EVENTS
        }).then(results => {
            this.setData(results.data)
        });
        return this.userInfo;
    }

    addEvent(eventId, eventName, eventType, eventStartDate,eventEndDate, nominationStartDate, nominationEndDate, minTeamSize, maxTeamSize, eventPortfolio, eventLocation, eventPOCMail) {
        let ADD_EVENT = gql`
        mutation CreateEventQuery($eventId: String!, $eventName: String!, $eventType: String!, $eventStartDate: Date!, $eventEndDate: Date!, $nominationStartDate: Date!, $nominationEndDate: Date!, $minTeamSize: Int!, $maxTeamSize: Int!, $eventPortfolio: String!, $eventLocation: String!, $eventPOCMail: String!) {
            addEvent(eventId: $eventId, eventName: $eventName, eventType: $eventType, eventStartDate: $eventStartDate, eventEndDate: $eventEndDate, nominationStartDate: $nominationStartDate, nominationEndDate: $nominationEndDate, minTeamSize: $minTeamSize, maxTeamSize: $maxTeamSize, eventPortfolio: $eventPortfolio, eventLocation: $eventLocation, eventPOCMail: $eventPOCMail, viewCount: 0, likesCount: 0) {
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
          let ADD_EVENT_VARIABLE = {
            "eventId": eventId,
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
          };

        this.client.mutate({
            mutation: ADD_EVENT,
            variables: ADD_EVENT_VARIABLE
        }).then(results => {
            this.setData(results.data)
        });

        return this.userInfo;
    }
    
}

export default GraphQLClient;

/*
To invoke this, you can import below -

import GraphQLClient from './GraphQLClient';

And then create Object and call method like 

var graphQLClient = new GraphQLClient();

Get ALl Users
graphQLClient.getAllUsers();

Get ALl Events
graphQLClient.getAllEvents();

Add New Event
graphQLClient.addEvent("e010", "test", "test", "2018-07-10T18:30:00.000Z", "2018-07-11T18:30:00.000Z", "2018-07-01T18:30:00.000Z", "2018-07-03T18:30:00.000Z", 1, 1, "test", "test", "test");
*/
