import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const eventQuery = gql`
    query event($id: Int!) {
        event(id: $id) {
            id
            title
            description
            organizer
            location
            lat
            lng
            startDate
            endDate
            photo
            category
        }
    }
`
const eventOptions = {
    options: ({
        match: {
            params: { id }
        }
    }) => ({
        variables: {
            id
        },
        fetchPolicy: 'network-only'
    })
}

export const getEvent = graphql(eventQuery, eventOptions)
