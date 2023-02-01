import {Component, Input} from '@angular/core';
import {IExperience} from "../../../../interface/i-experience";

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.less']
})
export class ExperienceComponent {
  @Input() experience!: IExperience;
}
