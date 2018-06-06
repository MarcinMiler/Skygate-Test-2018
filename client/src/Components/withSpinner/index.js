import React, { Component } from 'react'

import Spinner from '../Spinner'

export const withSpinner = WrappedComponent =>
    class extends Component {
        render() {
            if (this.props.data.loading) return <Spinner />
            return <WrappedComponent {...this.props} />
        }
    }
