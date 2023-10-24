import {Injectable} from "@nestjs/common"
import {InjectModel} from "@nestjs/mongoose"
import {Model} from "mongoose"
import {CreateUser} from "src/user/model/create-user.model"
import {User, UserDocument, UserSchema} from "./model/user.model"

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  private arr = []

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec()
  }

  async getUser(id: number): Promise<User> {
    return this.userModel.findById(id)
  }

  async create(user: CreateUser): Promise<User> {
    const createdUser = new this.userModel(user)
    console.log()
    return await createdUser.save()
  }
}
