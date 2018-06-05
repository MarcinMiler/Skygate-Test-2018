import { GraphQLServer } from 'graphql-yoga'
import { generateSchema } from './utils/generateSchema'
import { createTypeormConn } from './utils/createTypeormConn'
import { createTestConn } from './testUtils/createTestConn'

export const startServer = async () => {
    const server = new GraphQLServer({ schema: generateSchema() })

    if (process.env.NODE_ENV === 'test') {
        await createTestConn(true)
    } else {
        await createTypeormConn()
    }

    const options = {
        port: process.env.NODE_ENV === 'test' ? 0 : 4000,
        endpoint: '/graphql',
        cors: {
            origin: '*'
        }
    }

    const app = await server.start(options)
    console.log('Server is running on localhost:4000')

    return app
}
