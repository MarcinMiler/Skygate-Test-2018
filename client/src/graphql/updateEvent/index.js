import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const updateEventMutation = gql`
    mutation updateEvent(
        $id: Int!
        $title: String
        $description: String
        $organizer: String
        $location: String
        $startDate: String
        $endDate: String
        $photo: String
        $category: String
    ) {
        updateEvent(
            id: $id
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

export const updateEvent = graphql(updateEventMutation, { name: 'updateEvent' })
