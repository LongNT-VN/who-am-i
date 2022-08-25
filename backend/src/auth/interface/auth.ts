import { ObjectId } from "mongoose";

export interface auth {
  info: {
    _id: ObjectId;
    email: string;
    name: string;
    gender: boolean;
    dateOfBirth: Date;
    interest: string;
    numberPhone: string;
    address: string;
    education: string;
    skill: string;
    projects: Array<ObjectId>;
    isDelete: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
  token: string;
}

export interface signup {
  email: string;
  password: string;
  name: string;
  gender: boolean;
  dateOfBirth: Date;
  interest: string;
  numberPhone: string;
  address: string;
  education: string;
  skill: string;
  projects: Array<ObjectId>;
}
