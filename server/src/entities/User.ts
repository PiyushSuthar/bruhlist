import { Arg, Field, Int, ObjectType } from "type-graphql"
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, In } from "typeorm"
import { Anime } from "./Anime";

@ObjectType()
@Entity()
export class User extends BaseEntity {
    /**
     * User Profile and Authentication Information
     */

    @PrimaryGeneratedColumn("uuid")
    @Field(() => String)
    id: string;

    @Column("text")
    @Field(() => String)
    name: string;

    @Column("text")
    @Field(() => String)
    username: string;

    @Column("text", { nullable: true })
    @Field(() => String, { nullable: true })
    profileUrl?: string | null;

    @Column("text", { nullable: true })
    @Field(() => String, { nullable: true })
    bannerUrl?: string | null;

    @Column("text", { nullable: true })
    @Field(() => String, { nullable: true })
    bio?: string | null;

    @Column("text", { unique: true })
    email: string;

    @Column("text")
    password: string;

    @Column("int", { default: 0 })
    token_version: number;

    @Field(() => String)
    @CreateDateColumn({ type: "timestamp with time zone" })
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn({ type: "timestamp with time zone" })
    updatedAt: Date;

    /**
     * Anime and Manga stats and information
     */

    // I don't know if this is the best way to do this
    @Column("text", { nullable: true, default: [] })
    _animeList?: string[]

    @Field(() => [Anime])
    animeList(
        @Arg("page", () => Int, {
            defaultValue: 1,
        }) page: number,
        @Arg("limit", () => Int, {
            defaultValue: 10,
        }) perPage: number
    ): Promise<Anime[]> {

        // A lot of errors here... Need to refactor
        if (this._animeList && this._animeList.length != 0) {
            return Promise.resolve([])
        }
        return Anime.find({
            where: { id: In(this._animeList!) },
            skip: ((page - 1) * perPage),
            take: perPage
        })
    }
    // TODO: Add anime and manga stats entity
}