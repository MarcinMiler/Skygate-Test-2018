import { ResolverMap } from '../../types/resolverMap'
import { Event } from '../../entity/Event'

export const resolver: ResolverMap = {
    Mutation: {
        createEvent: async (_, args) => {
            const {
                title,
                description,
                organizer,
                location,
                startDate,
                endDate,
                photo,
                category
            } = args

            const event = Event.create({
                title,
                description,
                organizer,
                location,
                startDate,
                endDate,
                photo,
                category
            })

            await event.save()

            return event
        }
    }
}
