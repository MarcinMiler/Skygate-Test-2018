import { ResolverMap } from '../../types/resolverMap'
import { Event } from '../../entity/Event'

export const resolver: ResolverMap = {
    Mutation: {
        deleteEvent: async (_, { id }) => {
            try {
                await Event.delete(id)
                return true
            } catch (err) {
                return false
            }
        }
    }
}
