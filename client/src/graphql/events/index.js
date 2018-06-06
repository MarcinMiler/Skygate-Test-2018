import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const eventsQuery = gql`
    {
        events {
            id
            title
            description
            organizer
            location
            startDate
            endDate
            photo
            category
        }
    }
`

export default graphql(eventsQuery, {
    options: { fetchPolicy: 'network-only' }
})
