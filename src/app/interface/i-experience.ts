import {IExperienceContent} from "./i-experience-content";

export interface IExperience {
  title: String,
  company: String,
  companyLogo: String,
  color: String,
  duration: String,
  content: IExperienceContent[]
}
