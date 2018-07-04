import ApolloClient, { gql } from 'apollo-boost';

export class GraphQLClient {

    userInfo;
//uri: 'http://10.74.22.231:3002/graphql'
//uri: 'http://10.74.22.183:3000/graphql'
    client = new ApolloClient({
        uri: 'http://10.74.22.231:3002/graphql'
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
                email
                portfolio
                location
                phoneNo
            }
        } `;

        this.client.query({
            query: GET_USER
        }).then(results => {
            //this.setData(results.data)
            return results.data;
        });
        //return this.userInfo;
    }

    getUserByVzId(vzId) {
        let GET_USER_VZID = gql`
        query getUserbyVzId($vzId: String!) {
            getUserbyVzId(vzId: $vzId) {
                vzId
                firstName
                lastName
                email
                portfolio
                location
                phoneNo
            }
        } `;
        let GET_USER_VZID_VARIABLE = {
            "vzId": vzId
        }

        this.client.query({
            query: GET_USER_VZID,
            variables: GET_USER_VZID_VARIABLE
        }).then(results => {
            this.setData(results.data)
        });
        return this.userInfo;
    }

    getUserByPortfolio(portfolio) {
        let GET_USER_PORTFOLIO = gql`
        query getUserByPortfolio($portfolio: String!) {
            getUserByPortfolio(portfolio: $portfolio) {
                vzId
                firstName
                lastName
                email
                portfolio
                location
                phoneNo
            }
        } `;
        let GET_USER_PORTFOLIO_VARIABLE = {
            "portfolio": portfolio
        }

        this.client.query({
            query: GET_USER_PORTFOLIO,
            variables: GET_USER_PORTFOLIO_VARIABLE
        }).then(results => {
            this.setData(results.data)
        });
        return this.userInfo;
    }

    getUserByLocation(location) {
        let GET_USER_LOCATION = gql`
        query getUserByLocation($location: String!) {
            getUserByLocation(location: $location) {
                vzId
                firstName
                lastName
                email
                portfolio
                location
                phoneNo
            }
        } `;
        let GET_USER_LOCATION_VARIABLE = {
            "location": location
        }

        this.client.query({
            query: GET_USER_LOCATION,
            variables: GET_USER_LOCATION_VARIABLE
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
    
    getUpcomingEvents() {
        let GET_UPCOMING_EVENTS = gql`
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

        this.client.query({
            query: GET_UPCOMING_EVENTS
        }).then(results => {
            this.setData(results.data)
        });
        return this.userInfo;
    }   

    getOngoingEvents() {
        let GET_ONGOING_EVENTS = gql`
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

        this.client.query({
            query: GET_ONGOING_EVENTS
        }).then(results => {
            this.setData(results.data)
        });
        return this.userInfo;
    }   

    getEventsByPortfolio(portfolio) {
        let GET_EVENTS_PORTFOLIO = gql`
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
        let GET_EVENTS_PORTFOLIO_VARIABLE = {
            "portfolio": portfolio
        }

        this.client.query({
            query: GET_EVENTS_PORTFOLIO,
            variables: GET_EVENTS_PORTFOLIO_VARIABLE
        }).then(results => {
            this.setData(results.data)
        });
        return this.userInfo;
    }

    getEventsByLocation(location) {
        let GET_EVENT_LOCATION = gql`
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
        let GET_EVENT_LOCATION_VARIABLE = {
            "location": location
        }

        this.client.query({
            query: GET_EVENT_LOCATION,
            variables: GET_EVENT_LOCATION_VARIABLE
        }).then(results => {
            this.setData(results.data)
        });
        return this.userInfo;
    }

    addEvent(eventId, eventName, eventType, eventStartDate,eventEndDate, nominationStartDate, nominationEndDate, minTeamSize, maxTeamSize, eventPortfolio, eventLocation, eventPOCMail) {
        let ADD_EVENT = gql`
        mutation CreateEventQuery($eventId: Int!, $eventName: String!, $eventType: String!, $eventStartDate: Date!, $eventEndDate: Date!, $nominationStartDate: Date!, $nominationEndDate: Date!, $minTeamSize: Int!, $maxTeamSize: Int!, $eventPortfolio: String!, $eventLocation: String!, $eventPOCMail: String!) {
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

//export default GraphQLClient;