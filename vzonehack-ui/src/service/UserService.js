import ApolloClient, { gql } from 'apollo-boost';

export class UserService {

    client = new ApolloClient({
        uri: 'http://10.74.22.231:3002/graphql'
    });

    GET_ALL_USERS = gql`
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
     GET_USER_BY_VZID = gql`
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

    GET_USER_BY_PORTFOLIO = gql`
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

    GET_USER_BY_LOCATION = gql`
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

    getAllUsers() {
        return this.client.query({
            query: this.GET_ALL_USERS
        }).then(results => results.data);
    }

    getUserbyVzId(vzId) {
        return this.client.query({
            query: this.GET_USER_BY_VZID,
            variable: {
                "vzId": vzId
            }
        }).then(results => results.data);
    }

    getUserbyPortfolio(portfolio) {
        return this.client.query({
            query: this.GET_USER_BY_PORTFOLIO,
            variable: {
                "portfolio": portfolio
            }
        }).then(results => results.data);
    }

    getUserbyLocation(location) {
        return this.client.query({
            query: this.GET_USER_BY_LOCATION,
            variable: {
                "location": location
            }
        }).then(results => results.data);
    }
}