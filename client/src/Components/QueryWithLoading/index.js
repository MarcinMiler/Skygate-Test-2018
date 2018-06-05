import React from 'react'
import { Query } from 'react-apollo'

import Spinner from '../Spinner'

const QueryWithLoading = ({ children, query, variables }) => (
    <Query query={query} variables={variables}>
        {({ data, loading }) => (loading ? <Spinner /> : children(data))}
    </Query>
)

export default QueryWithLoading
