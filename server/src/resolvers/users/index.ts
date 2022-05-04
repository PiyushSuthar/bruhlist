import { Arg, Int, Query, Resolver } from 'type-graphql'
import { User } from '../../entities/User'

@Resolver()
export class UserResolver {

    @Query(() => [User])
    Users(
        @Arg('page', () => Int, {
            defaultValue: 1
        }) page: number,
        @Arg('limit', () => Int, {
            defaultValue: 10
        }) limit: number,
    ) {
        return User.find({ take: limit, skip: (page - 1) * limit })
    }
}