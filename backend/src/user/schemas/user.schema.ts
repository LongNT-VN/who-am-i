import { ObjectId } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  _id: ObjectId;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop({ required: true })
  name: string;
  @Prop()
  gender: boolean;
  @Prop()
  dateOfBirth: Date;
  @Prop()
  interest: string;
  @Prop({ required: true })
  numberPhone: string;
  @Prop()
  address: string;
  @Prop()
  education: string;
  @Prop()
  skill: string;
  @Prop({ ref: "Projects", default: [] })
  projects: Array<ObjectId>;
  @Prop({ default: false })
  isDelete: boolean;
  @Prop()
  createdAt: Date;
  @Prop()
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
