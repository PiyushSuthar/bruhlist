import { Field, Int, ObjectType } from "type-graphql"
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@ObjectType()
@Entity()
export class User extends BaseEntity {
    /**
     * User Profile and Authentication Information
     */

    @PrimaryGeneratedColumn("uuid")
    @Field(() => Int)
    id: number

    @Column("text")
    @Field(() => String)
    name: string;

    @Column("text")
    @Field(() => String)
    profile_picture: string;

    @Column("text")
    @Field(() => String)
    banner_image: string;

    @Column("text", { unique: true })
    email: string;

    @Column("text")
    password: string;

    @Column("int", { default: 0 })
    token_version: number;

    /**
     * Anime and Manga stats and information
     */

    // TODO: Add anime and manga stats entity
}