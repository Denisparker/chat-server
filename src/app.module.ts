import {Module} from "@nestjs/common"
import {AppController} from "./app.controller"
import {AppService} from "./app.service"
import {MongooseModule} from "@nestjs/mongoose"
import {GraphQLModule} from "@nestjs/graphql"
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo"
import {UserModule} from "src/user/user.module"


@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "src/schema.gql",
      installSubscriptionHandlers: true,
      sortSchema: true,
      playground: true
    }),
    MongooseModule.forRoot("mongodb+srv://example:example37@cluster0.v73xjsv.mongodb.net/?retryWrites=true&w=majority")
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
