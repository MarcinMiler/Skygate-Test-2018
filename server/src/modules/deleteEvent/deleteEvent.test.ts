import { Connection } from 'typeorm'
import { createTestConn } from '../../testUtils/createTestConn'
import { request } from 'graphql-request'
import { Event } from '../../entity/Event'

let conn: Connection
beforeAll(async () => {
    conn = await createTestConn(true)
})

afterAll(async () => {
    conn.close()
})

const url = process.env.TEST_HOST as string

const addEventMutation = `
    mutation {
        createEvent(
            title: "Color Festival"
            description: "Some event"
            organizer: "Somelab"
            location: "Warsaw"
            startDate: "11.07.2018 10:30"
            endDate: "11.07.2018 20:00"
            photo: "photo.jpeg"
            category: "Music") {
                id
                title,
                description,
                organizer,
                location,
                startDate,
                endDate,
                photo,
                category,
            }
    }
`
const deleteEventMutation = `
    mutation {
        deleteEvent(id: 1)
    }
`
it('should return event', async () => {
    await request(url, addEventMutation)
    await request(url, addEventMutation)

    const response = await request(url, deleteEventMutation)
    expect(response).toMatchObject({ deleteEvent: true })

    const events = await Event.find()
    expect(events).toHaveLength(1)
    expect(events[0].id).toEqual(2)
})
