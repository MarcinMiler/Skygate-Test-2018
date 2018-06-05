import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export class Event extends BaseEntity {
    @PrimaryGeneratedColumn() id: number

    @Column() title: string

    @Column() description: string

    @Column() organizer: string

    @Column() location: string

    @Column() startDate: string

    @Column() endDate: string

    @Column() photo: string

    @Column() category: string
}
