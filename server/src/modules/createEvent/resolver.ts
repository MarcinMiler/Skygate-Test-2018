import { ResolverMap } from '../../types/resolverMap'
import { Event } from '../../entity/Event'

export const resolver: ResolverMap = {
    Mutation: {
        createEvent: async (_, args) => {
            const event = Event.create({
                title: args.title,
                description: args.description,
                organizer: args.organizer,
                location: args.location,
                lat: args.lat,
                lng: args.lng,
                startDate: args.startDate,
                endDate: args.endDate,
                photo: args.photo,
                category: args.category
            })
            await event.save()

            return event
        }
    }
}
