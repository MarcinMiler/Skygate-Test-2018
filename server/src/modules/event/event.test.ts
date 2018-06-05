import { Connection } from 'typeorm'
import { createTestConn } from '../../testUtils/createTestConn'
import { User } from '../../entity/User'

let conn: Connection
beforeAll(async () => {
    conn = await createTestConn()
})

afterAll(async () => {
    conn.close()
})

describe('It should work', () => {
    it('works', async () => {
        await User.create({
            firstName: 'Marcin'
        }).save()

        const u = await User.findOne(1)
        expect(u).toMatchObject({ id: 1, firstName: 'Marcin' })
    })
})
