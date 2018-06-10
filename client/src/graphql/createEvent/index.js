import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const createEventMutation = gql`
    mutation createEvent(
        $title: String!
        $description: String!
        $organizer: String!
        $location: String!
        $lat: Float
        $lng: Float
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
            lat: $lat
            lng: $lng
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
            lat
            lng
            startDate
            endDate
            photo
            category
        }
    }
`

export const createEvent = graphql(createEventMutation, { name: 'createEvent' })
