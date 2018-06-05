import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const query = gql`
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

export const getEvents = graphql(query, { name: 'events' })
