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

const title = 'Meetup'
const description = 'Some meetup'
const organizer = 'Connect People'
const location = 'Cracow'
const lat = 50.5
const lng = 35.35
const startDate = '11.11.2018 14:00'
const endDate = '11.11.2018 24:00'
const photo = 'groupPhoto.jpeg'
const category = 'Meetup'

const addEventMutation = `
    mutation {
        createEvent(
            title: "Color Festival"
            description: "Some event"
            organizer: "Somelab"
            location: "Warsaw"
            lat: 50.5
            lng: 35.5
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
const updateEventMutation = `
    mutation {
        updateEvent(
            id: 1,
            title: "${title}"
            description: "${description}"
            organizer: "${organizer}"
            location: "${location}"
            lat: ${lat}
            lng: ${lng}
            startDate: "${startDate}"
            endDate: "${endDate}"
            photo: "${photo}"
            category: "${category}"
        ) {
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

it('should update event', async () => {
    await request(url, addEventMutation)

    const response = await request(url, updateEventMutation)

    expect(response).toMatchObject({
        updateEvent: {
            title,
            description,
            organizer,
            location,
            startDate,
            endDate,
            photo,
            category
        }
    })

    const event = await Event.findOne(1)

    expect(event).toMatchObject({
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
})
