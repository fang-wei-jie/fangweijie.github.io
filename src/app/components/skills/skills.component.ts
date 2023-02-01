import { Component } from '@angular/core';
import {ISkill} from "../../interface/i-skill";

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent {
  readonly languages: ISkill[] = [
    { link: "/assets/skills/js.png", name: "JavaScript" },
    { link: "/assets/skills/java.png", name: "Java" }
  ]

  readonly technologies: ISkill[] = [
    { link: "/assets/skills/angular.png", name: "Angular" },
    { link: "/assets/skills/spring-boot.png", name: "Spring Boot" },
    { link: "/assets/skills/tailwind-css.png", name: "Tailwind CSS" },
    { link: "/assets/skills/ng-zorro.png", name: "NG-ZORRO" }
  ]

  readonly tools: ISkill[] = [
    { link: "/assets/skills/IDEA.png", name: "IntelliJ IDEA" },
    { link: "/assets/skills/vscode.png", name: "VS Code" }
  ]

}
