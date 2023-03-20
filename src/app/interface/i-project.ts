import {ISkill} from "./i-skill";

export interface IProject {
  name: String,
  description: String,
  techStacks: ISkill[],
  link: String | undefined,

  linkName: String | undefined
}
