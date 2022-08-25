import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { User, UserDocument } from "./schemas/user.schema";
import { User as UserInterface } from "./interface/user";
import { signup as signupInterface } from "src/auth/interface/auth";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getMe(): Promise<UserInterface[]> {
    return await this.userModel.find().select({ password: 0 }).exec();
  }
  async createUser(userInfo: signupInterface): Promise<User> {
    return await new this.userModel(userInfo).save();
  }
  async findUserByEmail(email: string): Promise<UserInterface> {
    return await this.userModel
      .findOne({
        email,
      })
      .select({ password: 0 })
      .exec();
  }
  async findUserById(_id: ObjectId): Promise<UserInterface> {
    return await this.userModel
      .findById({
        _id: _id,
      })
      .select({ password: 0 })
      .exec();
  }
}
