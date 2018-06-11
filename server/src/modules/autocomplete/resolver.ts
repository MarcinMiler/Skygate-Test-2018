import { ResolverMap } from '../../types/resolverMap'
import { Event } from '../../entity/Event'

export const resolver: ResolverMap = {
    Query: {
        autocomplete: async (_, { pattern }) => {
            const events = await Event.find()

            const filtredEvents = events
                .filter(event =>
                    event.title.toLowerCase().includes(pattern.toLowerCase())
                )
                .slice(0, 5)

            return filtredEvents
        }
    }
}
