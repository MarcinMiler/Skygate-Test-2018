import React from 'react'
import { Query } from 'react-apollo'

import Spinner from '../Spinner'

const QueryWithLoading = ({ children, ...props }) => (
    <Query {...props}>
        {({ data, loading }) => (loading ? <Spinner /> : children(data))}
    </Query>
)

export default QueryWithLoading
