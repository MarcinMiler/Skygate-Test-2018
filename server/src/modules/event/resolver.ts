import { ResolverMap } from '../../types/resolverMap'

export const resolver: ResolverMap = {
    Query: {
        event: async () => `hello world`
    }
}
