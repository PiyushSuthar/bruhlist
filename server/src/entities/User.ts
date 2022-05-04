import { Field, Int, ObjectType } from "type-graphql"
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm"

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
    @Field(() => String, { nullable: true })
    profileUrl: string | null;

    @Column("text")
    @Field(() => String, { nullable: true })
    bannerUrl: string | null;

    @Column("text", { unique: true })
    email: string;

    @Column("text")
    password: string;

    @Column("int", { default: 0 })
    token_version: number;

    @Field(() => Date)
    @CreateDateColumn({ type: "timestamp with time zone" })
    createdAt: Date;

    @Field(() => Date)
    @UpdateDateColumn({ type: "timestamp with time zone" })
    updatedAt: Date;

    /**
     * Anime and Manga stats and information
     */

    // TODO: Add anime and manga stats entity
}