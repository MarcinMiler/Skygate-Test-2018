import { GraphQLServer } from 'graphql-yoga'
import { createTypeormConn } from './utils/createTypeormConn'
import { generateSchema } from './utils/generateSchema'

export const startServer = async () => {
    const server = new GraphQLServer({ schema: generateSchema() })

    await createTypeormConn()

    const app = await server.start()
    console.log('Server is running on localhost:4000')

    return app
}
