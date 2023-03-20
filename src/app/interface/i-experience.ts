import {ISkill} from "./i-skill";

export interface IExperience {
  title: String,
  company: String,
  color: String,
  duration: String,
  description: String[],
  skills: ISkill[]
}
