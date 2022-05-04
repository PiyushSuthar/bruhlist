import { Query, Resolver } from 'type-graphql'

@Resolver()
export class AuthResolver {

    @Query(() => String)
    me() {
        return "Hello World"
    }
}