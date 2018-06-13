import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import registerServiceWorker from './registerServiceWorker'

import Routes from './routes'
import { client } from './apollo'
import { SearchContextProvider } from './Components/SearchContext'

const App = () => (
    <ApolloProvider client={client}>
        <SearchContextProvider>
            <Routes />
        </SearchContextProvider>
    </ApolloProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
