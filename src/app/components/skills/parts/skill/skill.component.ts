import {Component, Input} from '@angular/core';
import {ISkill} from "../../../../interface/i-skill";

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.less']
})
export class SkillComponent {
  @Input() skill!: ISkill;
}
