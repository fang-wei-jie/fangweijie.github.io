import { Component } from '@angular/core';
import {ISkill} from "../../interface/i-skill";
import {languageConstant} from "../../constants/language-constant";
import {techStackConstant} from "../../constants/tech-stack-constant";
import {toolConstant} from "../../constants/tool-constant";

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent {
  readonly languages: ISkill[] = [
    languageConstant.typeScript,
    languageConstant.javaScript,
    languageConstant.java,
    languageConstant.php
  ]

  readonly frameworks: ISkill[] = [
    techStackConstant.angular,
    techStackConstant.angularJs,
    techStackConstant.springBoot,
    techStackConstant.tailwind,
    techStackConstant.ngZorro,
    techStackConstant.bootstrap5,
    techStackConstant.laravel,
    techStackConstant.laravelLivewire
  ]

  readonly tools: ISkill[] = [
    toolConstant.idea,
    toolConstant.vscode
  ]

}
