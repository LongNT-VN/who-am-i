import {
  Injectable,
  NestMiddleware,
  NotFoundException,
  Req,
  UnauthorizedException,
} from "@nestjs/common";
import { NextFunction, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";
import { message } from "src/enum/errorMessage";

@Injectable()
export class authMiddleware implements NestMiddleware {
  use(@Req() req, res: Response, next: NextFunction) {
    const token = req.headers.token;
    if (!token) throw new NotFoundException(message.NOT_FOUND_TOKEN);
    const tokenInfo = token.toString().split(" ");
    if (tokenInfo.length != 2)
      throw new UnauthorizedException(message.TOKEN_INVALID);
    verify(tokenInfo[1], process.env.JWT_PRIVATE_KEY, (err, information) => {
      if (err) throw new UnauthorizedException(message.TOKEN_EXPIRED);
      req.userId = information._id;
      next();
    });
  }
}
