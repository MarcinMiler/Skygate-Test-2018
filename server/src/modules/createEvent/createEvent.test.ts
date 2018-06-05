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

it('should create new event', async () => {
    const response = await request(url, addEventMutation)
    expect(response).toMatchSnapshot()

    const event = await Event.find()
    expect(event).toMatchSnapshot()
})
