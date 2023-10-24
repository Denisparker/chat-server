import {Module} from "@nestjs/common"
import {MongooseModule} from "@nestjs/mongoose"
import {User, UserSchema} from "./model/user.model"
import {UserResolver} from "src/user/user.resolver"
import {UserService} from "src/user/user.service"

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema
      }
    ])
  ],
  providers: [UserResolver, UserService]
})

export class UserModule {}
