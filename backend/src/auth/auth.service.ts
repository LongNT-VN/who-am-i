import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { User, UserDocument } from "../user/schemas/user.schema";
import { User as UserInterface } from "../user/interface/user";
import { signup as signupInterface } from "./interface/auth";

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async findUserByEmail(email: string): Promise<User> {
    return await this.userModel
      .findOne({
        email,
        isDelete: false,
      })
      .select({ email: 1, password: 1 })
      .exec();
  }
  async login(userId: ObjectId): Promise<UserInterface> {
    return await this.userModel
      .findOne({ userId, isDelete: false })
      .select({ password: 0 })
      .exec();
  }
  async signup(userInfo: signupInterface): Promise<User> {
    return await new this.userModel(userInfo).save();
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
