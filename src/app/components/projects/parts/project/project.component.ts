import {Component, Input} from '@angular/core';
import {IProject} from "../../../../interface/i-project";

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less']
})
export class ProjectComponent {
  @Input() project!: IProject;
}
