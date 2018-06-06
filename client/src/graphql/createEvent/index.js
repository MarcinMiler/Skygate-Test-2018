import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const createEventMutation = gql`
    mutation createEvent(
        $title: String!
        $description: String!
        $organizer: String!
        $location: String!
        $startDate: String!
        $endDate: String!
        $photo: String!
        $category: String!
    ) {
        createEvent(
            title: $title
            description: $description
            organizer: $organizer
            location: $location
            startDate: $startDate
            endDate: $endDate
            photo: $photo
            category: $category
        ) {
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

export default graphql(createEventMutation, { name: 'createEvent' })
