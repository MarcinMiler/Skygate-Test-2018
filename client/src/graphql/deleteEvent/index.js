import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const deleteEventMutation = gql`
    mutation deleteEvent($id: Int!) {
        deleteEvent(id: $id)
    }
`

export const deleteEvent = graphql(deleteEventMutation, { name: 'deleteEvent' })
