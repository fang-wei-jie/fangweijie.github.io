import { Component } from '@angular/core';
import {IProject} from "../../interface/i-project";
import {techStackConstant} from "../../constants/tech-stack-constant";
import {toolConstant} from "../../constants/tool-constant";

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent {
  readonly projects: IProject[] = [
    {
      name: "Sport Center Booking Managing System",
      description: "Booking Management System",
      techStacks: [techStackConstant.laravel, techStackConstant.laravelLivewire, techStackConstant.bootstrap5],
      link: "https://neweracollege365-my.sharepoint.com/:v:/g/personal/fangweijie1327_e_newera_edu_my/EYiHka8btGpPupwtSNqwHfMBcrc0sMl30CHDKVEHqpnjnQ?e=1mfXAo",
      linkName: "Demo Video"
    },
    {
      name: "LivesUnderTheSea Promotional Website",
      description: "Website Prototype",
      techStacks: [toolConstant.figma],
      link: "https://www.figma.com/proto/22hkRIM7Fq6vq4PFxTgRjU/HCI-Website-Project?page-id=0%3A1&node-id=75%3A2&viewport=241%2C48%2C0.08&scaling=min-zoom&starting-point-node-id=75%3A2",
      linkName: undefined
    },
    {
      name: "Pre- and Post-Pregnancy Tracking and Advisory App",
      description: "App Flow and UI Mockup",
      techStacks: [toolConstant.figma],
      link: "https://www.figma.com/file/7mNJfNS7oh4OydTaEfll3e/Pre--and-Post-Pregnancy-Tracking-and-Advisory-App?node-id=76%3A12930",
      linkName: undefined
    }
  ]
}
