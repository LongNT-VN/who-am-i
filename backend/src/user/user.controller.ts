import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { hashSync } from "bcrypt";
import { User as UserInterface } from "./interface/user";
import { message } from "src/enum/errorMessage";
import { signup as signupInterface } from "src/auth/interface/auth";
import { regex } from "src/enum/regex";
@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async getAllUsers(): Promise<UserInterface[]> {
    return this.userService.getMe();
  }

  @Post("create")
  async createUser(@Req() req): Promise<UserInterface> {
    const {
      email,
      password,
      gender,
      name,
      numberPhone,
      dateOfBirth,
      interest,
      address,
      education,
      skill,
      projects,
    } = req.body;
    if (!email || !numberPhone || !name) {
      throw new HttpException(message.BAD_REQUEST, HttpStatus.BAD_REQUEST);
    }
    if (!new RegExp(regex.emailRegex).test(email))
      throw new HttpException(message.NOT_FOUND_EMAIL, HttpStatus.BAD_REQUEST);
    const userExisted = await this.userService.findUserByEmail(email);
    if (userExisted)
      throw new HttpException(message.EXISTED_USER, HttpStatus.BAD_REQUEST);
    if (!new RegExp(regex.passwordRegex).test(password))
      throw new HttpException(message.WEAK_PASSWORD, HttpStatus.BAD_REQUEST);
    if (!new RegExp(regex.numberPhoneRegex).test(numberPhone))
      throw new HttpException(
        message.NOT_FOUND_NUMBER_PHONE,
        HttpStatus.BAD_REQUEST
      );
    const userInfo: signupInterface = {
      email,
      password: hashSync(password, 10),
      gender,
      name,
      numberPhone,
      dateOfBirth: new Date(dateOfBirth),
      interest,
      address,
      education,
      skill,
      projects,
    };
    const createdUser = await this.userService.createUser(userInfo);
    return await this.userService.findUserById(createdUser._id);
  }
}
