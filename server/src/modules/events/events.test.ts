import { Connection } from 'typeorm'
import { createTestConn } from '../../testUtils/createTestConn'
import { request } from 'graphql-request'

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
const eventsQuery = `
    {
        events {
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
it('should return events', async () => {
    await request(url, addEventMutation)
    await request(url, addEventMutation)

    const response = await request(url, eventsQuery)
    expect(response).toMatchSnapshot()
})
