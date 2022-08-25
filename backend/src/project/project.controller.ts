import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
} from "@nestjs/common";
import { Project } from "./schemas/project.schema";
import { ProjectService } from "./project.service";
import { UserService } from "src/user/user.service";

@Controller("projects")
export class ProjectControler {
  constructor(
    private projectService: ProjectService,
    private userService: UserService
  ) {}
  @Get()
  async getMe(): Promise<Project[]> {
    return this.projectService.getProject();
  }

  @Post()
  async createMe(@Req() req): Promise<Project> {
    const { name, type, startTime, endTime, isEnding, summary, demo } =
      req.body;
    if (!name || !startTime) {
      throw new HttpException("BAD_REQUEST", HttpStatus.BAD_REQUEST);
    }
    const projectInfo: Project = {
      name,
      type,
      startTime,
      endTime,
      isEnding,
      summary,
      demo,
    };
    return this.projectService.createProject(projectInfo);
  }
}
