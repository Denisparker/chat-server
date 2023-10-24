import {Args, Int, Mutation, Query, Resolver} from "@nestjs/graphql"
import {CreateUser} from "src/user/model/create-user.model"
import {User} from "src/user/model/user.model"
import {UserService} from "src/user/user.service"
// import {CreateUserInput} from "src/users/dto/create-user.input"
// import {UpdateUserInput} from "src/users/dto/update-user.input"

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args("input", ) input: CreateUser) {
    return this.userService.create(input)
  }

  @Query(() => [User], {name: "users"})
  async findAll() {
    return this.userService.getAllUsers()
  }

  @Query(() => User, {name: "user"})
  findOne(@Args("id", {type: () => Int}) id: number) {
    return this.userService.getUser(id)
  }

  // @Mutation(() => User)
  // updateUser(@Args("updateUserInput") updateUserInput: UpdateUserInput) {
  //   return this.userService.update(updateUserInput.id, updateUserInput)
  // }
  //
  // @Mutation(() => User)
  // removeUser(@Args("id", {type: () => Int}) id: number) {
  //   return this.userService.remove(id)
  // }

}
