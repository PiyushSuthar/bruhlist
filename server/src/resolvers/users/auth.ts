import { Args, ArgsType, Field, Mutation, Query, Resolver, ObjectType } from 'type-graphql'
import { IsEmail, MaxLength, MinLength } from 'class-validator'
import { User } from '../../entities/User'
import * as argon2 from 'argon2'

@ArgsType()
class RegisterInput {
    @MinLength(3)
    @MaxLength(30)
    @Field()
    name: string

    @MinLength(3)
    @MaxLength(30)
    @Field()
    username: string

    @Field()
    @IsEmail()
    email: string

    @MinLength(8)
    @MaxLength(20)
    @Field()
    password: string
}

@ObjectType()
class FieldError {
    @Field()
    field: string;
    @Field()
    message: string;
}

@ObjectType()
class UserResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];

    @Field(() => User, { nullable: true })
    user?: User;
}

@Resolver()
export class AuthResolver {

    @Query(() => String)
    me() {
        return "Hello World"
    }

    @Mutation(() => UserResponse)
    async register(
        @Args() input: RegisterInput
    ): Promise<UserResponse> {

        // TODO: Validate the user input

        const hashedPassword = await argon2.hash(input.password)

        const user = User.create({
            ...input,
            password: hashedPassword
        })

        await user.save()

        return { user }
    }
}