import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      "mongodb+srv://admin:admin@my-cluster.9lgvu.mongodb.net/whoAmI?retryWrites=true&w=majority"
    ),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
