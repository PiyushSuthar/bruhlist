import "reflect-metadata"
import { config } from 'dotenv'
import { ApolloServer } from 'apollo-server-express'
import {
    ApolloServerPluginLandingPageGraphQLPlayground
} from "apollo-server-core";

import { buildSchema } from 'type-graphql'
import app from './app'

const start = async () => {

    config()
    const schema = await buildSchema({
        resolvers: [__dirname + '/resolvers/**/*.ts'],
    })
    const apolloServer = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({ app })

    app.listen(parseInt(process.env.PORT!) || 3000, () => {
        console.log(`Server started on http://localhost:${process.env.PORT || 3000}${apolloServer.graphqlPath}`)
    })
}

start()