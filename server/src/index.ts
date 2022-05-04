import "reflect-metadata"
import { ApolloServer } from 'apollo-server-express'
import {
    ApolloServerPluginLandingPageGraphQLPlayground
} from "apollo-server-core";

import { buildSchema } from 'type-graphql'
import app from './app'
import { Config } from "./config/env";

const start = async () => {

    const schema = await buildSchema({
        resolvers: [__dirname + '/resolvers/**/*.ts'],
    })

    const apolloServer = new ApolloServer({
        schema,
        ...(Config.IS_DEV && { plugins: [ApolloServerPluginLandingPageGraphQLPlayground()] })
    })

    await apolloServer.start()
    apolloServer.applyMiddleware({ app })

    app.listen(Config.PORT, () => {
        console.log(`Server started on http://localhost:${Config.PORT}${apolloServer.graphqlPath}`)
    })
}

start()