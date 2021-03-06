import { ResolverMap } from '../../types/resolverMap'
import { Event } from '../../entity/Event'

export const resolver: ResolverMap = {
    Query: {
        event: (_, { id }) => Event.findOne(id)
    }
}
