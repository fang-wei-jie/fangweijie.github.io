import {Component} from '@angular/core';
import {IExperience} from "../../interface/i-experience";
import {techStackConstant} from "../../constants/tech-stack-constant";
import {skillSetConstant} from "../../constants/skill-set-constant";

@Component({
  selector: 'experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.less']
})
export class ExperiencesComponent {
  readonly experiences: IExperience[] = [
    {
      title: "Software Engineer, IT Specialist",
      company: "iFAST",
      color: "#014656",
      duration: "Sep 2022 - Feb 2023",
      description: [
        "Worked with business user to plan out system requirements on system enhancements and new developments.",
        "Provided system and application support on company's compliance learning assessment system and bond management system.",
        "Helped business user to amend data in database, for correcting user input error or system error.",
        "Developed feature enhancements for company’s bond management system and compliance learning assessment system.",
        "Developed enhancements and add-ons for external company's CRM (customer relationship management) system for creating and managing financial advisors’ website."
      ],
      skills: [
        skillSetConstant.appSupport,
        techStackConstant.angular,
        techStackConstant.angularJs,
        techStackConstant.springBoot,
        techStackConstant.ngZorro,
        techStackConstant.tailwind
      ]
    },
    {
      title: "Intern, IT Partnership",
      company: "iFAST",
      color: "#014656",
      duration: "May 2022 - Aug 2022",
      description: [
        "Developed enhancement for company’s compliance learning and assessment system.",
        "Planned and developed new module for external company's CRM (customer relationship management) system for creating and managing financial advisors’ website."
      ],
      skills: [
        techStackConstant.angular,
        techStackConstant.angularJs,
        techStackConstant.springBoot,
        techStackConstant.ngZorro,
        techStackConstant.tailwind,
        techStackConstant.bootstrap3
      ]
    },
    {
      title: "IT Security Trainee",
      company: "Condition Zebra",
      color: "#b02024",
      duration: "Jan 2020 - Mar 2020",
      description: [
        "Assisted in organizing reports, verifying vulnerability assessment results.",
        "Participated in social engineering with seniors and other interns.",
        "Carried out a network security automated assessment and reporting with other interns.",
      ],
      skills: []
    }
  ];

}
