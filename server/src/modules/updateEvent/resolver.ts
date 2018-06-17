import { ResolverMap } from '../../types/resolverMap'
import { Event } from '../../entity/Event'

export const resolver: ResolverMap = {
    Mutation: {
        updateEvent: async (_, args) => {
            const {
                id,
                title,
                description,
                organizer,
                location,
                lat,
                lng,
                startDate,
                endDate,
                photo,
                category
            } = args

            await Event.update(id, {
                title,
                description,
                organizer,
                location,
                lat,
                lng,
                startDate,
                endDate,
                photo,
                category
            })

            const updatedEvent = await Event.findOne(id)

            return updatedEvent
        }
    }
}
