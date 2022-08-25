import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProjectDocument = Project & Document;

@Schema()
export class Project {
  @Prop({ required: true })
  name: string;
  @Prop()
  type: string;
  @Prop()
  startTime: Date;
  @Prop()
  endTime: Date;
  @Prop()
  isEnding: boolean;
  @Prop()
  summary: string;
  @Prop()
  demo: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
