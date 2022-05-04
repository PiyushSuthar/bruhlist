import { Field, ObjectType } from 'type-graphql'
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { User } from './User'

@ObjectType()
@Entity()
export class Anime extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Field()
    @Column('text')
    title: string

    @Field()
    @Column('text', { nullable: true })
    description: string | null

    @Field()
    @Column('text', { nullable: true })
    posterUrl: string | null

    @Field()
    @Column('text', { nullable: true })
    bannerUrl: string | null

    @Field()
    @Column('text', { nullable: true })
    trailerUrl: string | null

    @Field()
    @Column('text', { nullable: true })
    releaseDate: string | null

    @Field()
    @Column('text', { nullable: true })
    status: string | null

    @Field()
    @Column('text', { nullable: true })
    duration: string | null

    @Field()
    @Column('text', { nullable: true })
    rating: string | null

    @Field()
    @Column('text', { nullable: true })
    genres: string | null

    @Field()
    @Column('text', { nullable: true })
    studios: string | null

    @Field(() => String)
    @CreateDateColumn({ type: 'timestamp with time zone' })
    createdAt: Date

    @Field(() => String)
    @UpdateDateColumn({ type: 'timestamp with time zone' })
    updatedAt: Date
}