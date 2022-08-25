import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Post,
  Req,
} from "@nestjs/common";
import { compare, hashSync } from "bcrypt";
import { message } from "src/enum/errorMessage";
import { AuthService } from "./auth.service";
import { User as UserInterface } from "../user/interface/user";
import { sign } from "jsonwebtoken";
import {
  auth as authInterface,
  signup as signupInterface,
} from "./interface/auth";
import { regex } from "src/enum/regex";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get("getMe")
  async getMe(@Req() req): Promise<UserInterface> {
    // get id from headers
    const userId = req.userId;

    // get user information
    return await this.authService.findUserById(userId);
  }
  @Post("login")
  async login(@Req() req): Promise<authInterface> {
    const { email, password } = req.body;

    // check input
    if (!email || !password) throw new BadRequestException(message.BAD_REQUEST);

    // check email valid
    if (!new RegExp(regex.emailRegex).test(email))
      throw new NotFoundException(message.NOT_FOUND_EMAIL);

    //check existed user
    const userExisted = await this.authService.findUserByEmail(email);
    if (!userExisted) throw new NotFoundException(message.NOT_FOUND_USER);

    // compare password
    const isUser = compare(password, userExisted.password);
    if (!isUser) throw new NotFoundException(message.WRONG_PASSWORD);

    // get user information
    const userInfo = await this.authService.login(userExisted._id);

    //create token
    const token = sign({ _id: userInfo._id }, process.env.JWT_PRIVATE_KEY, {
      expiresIn: "1h",
    });
    return { info: userInfo, token };
  }
  @Post("signup")
  async signup(@Req() req): Promise<authInterface> {
    const {
      email,
      password,
      gender,
      name,
      numberPhone,
      interest,
      address,
      education,
      skill,
      projects,
      dateOfBirth,
    } = req.body;

    // check input
    if (!email || !numberPhone || !name) {
      throw new BadRequestException(message.BAD_REQUEST);
    }

    // check email valid
    if (!new RegExp(regex.emailRegex).test(email))
      throw new NotFoundException(message.NOT_FOUND_EMAIL);

    // check existed user
    const userExisted = await this.authService.findUserByEmail(email);
    if (userExisted) throw new BadRequestException(message.EXISTED_USER);

    // check password format
    if (!new RegExp(regex.passwordRegex).test(password))
      throw new BadRequestException(message.WEAK_PASSWORD);

    // check email valid
    if (!new RegExp(regex.numberPhoneRegex).test(numberPhone))
      throw new BadRequestException(message.NOT_FOUND_NUMBER_PHONE);

    // transform user data
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

    //save user to db
    const userCreated = await this.authService.signup(userInfo);

    //create token
    const token = sign({ _id: userCreated._id }, process.env.JWT_PRIVATE_KEY, {
      expiresIn: "1h",
    });

    //get user created information
    const userSaved = await this.authService.findUserById(userCreated._id);
    return { info: userSaved, token };
  }
}
