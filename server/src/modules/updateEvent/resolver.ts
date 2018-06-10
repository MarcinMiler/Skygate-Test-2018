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

            if (title) {
                await Event.update(id, { title })
            }
            if (description) {
                await Event.update(id, { description })
            }
            if (organizer) {
                await Event.update(id, { organizer })
            }
            if (location) {
                await Event.update(id, { location })
            }
            if (lat) {
                await Event.update(id, { lat })
            }
            if (lng) {
                await Event.update(id, { lng })
            }
            if (startDate) {
                await Event.update(id, { startDate })
            }
            if (endDate) {
                await Event.update(id, { endDate })
            }
            if (photo) {
                await Event.update(id, { photo })
            }
            if (category) {
                await Event.update(id, { category })
            }

            const updatedEvent = await Event.findOne(id)

            return updatedEvent
        }
    }
}
