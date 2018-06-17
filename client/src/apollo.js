import ApolloClient from 'apollo-boost'

export const client = new ApolloClient({
    uri: 'https://evently-server.herokuapp.com/graphql'
})
// online server https://evently-server.herokuapp.com/graphql
// local server http://localhost:4000/graphql
