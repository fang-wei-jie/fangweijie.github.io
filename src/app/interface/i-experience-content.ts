import {IExperienceContentProject} from "./i-experience-content-project";

export interface IExperienceContent {
  type: String|null,
  description: String[]|null,
  projects: IExperienceContentProject[]|null
}
