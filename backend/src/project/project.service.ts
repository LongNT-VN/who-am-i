import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Project, ProjectDocument } from "./schemas/project.schema";

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>
  ) {}

  async getProject(): Promise<Project[]> {
    return await this.projectModel.find().exec();
  }
  async createProject(projectInfo: Project): Promise<Project> {
    const Info: Project = await new this.projectModel(projectInfo).save();
    return Info;
  }
}
