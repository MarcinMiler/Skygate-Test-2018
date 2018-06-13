import React, { Component, createContext } from 'react'

const SearchContext = createContext()

class SearchContextProvider extends Component {
    state = {
        title: '',
        location: {
            description: '',
            terms: []
        },
        title: '',
        category: 'All',
        from: null,
        to: null,
        changeState: (key, value) => this.setState(() => ({ [key]: value }))
    }

    render() {
        return (
            <SearchContext.Provider value={this.state}>
                {this.props.children}
            </SearchContext.Provider>
        )
    }
}

export { SearchContext, SearchContextProvider }
