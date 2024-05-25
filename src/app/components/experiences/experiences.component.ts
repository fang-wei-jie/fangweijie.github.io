import {Component} from '@angular/core';
import {IExperience} from "../../interface/i-experience";

@Component({
  selector: 'experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.less']
})
export class ExperiencesComponent {
  readonly experiences: IExperience[] = [
    {
      title: "Software Engineer",
      company: "Bukku",
      companyLogo: "assets/company_logo/Bukku.png",
      color: "#57b3c3",
      duration: "Since Apr 2023",
      content: [
        {
          "type": "Current and Upcoming Projects",
          "description": null,
          "projects": [
            {
              "name": "MyInvois Integration",
              "description": "integrating Malaysia's e-invoicing platform with accounting software",
              "info": null
            }
          ]
        },
        {
          "type": "Significant Projects",
          "description": null,
          "projects": [
            {
              "name": "Bank Feed",
              "description": "with Smart Reconciliation, a seamless bank reconciliation experience",
              "info": [
                "Maybank integration, for both Sole Prop and non Sole Prop users"
              ]
            },
            {
              "name": "Aging Report",
              "description": "financial document that lists unpaid customer invoices and their due dates to identify overdue payments",
              "info": [
                "added ability to generate report by the month(s), in addition to day(s)",
                "fully reworked internals, to be more efficient and maintainable"
              ]
            }
          ]
        },
        {
          "type": "Participated Projects",
          "projects": [
            {
              "name": "Financing Portal",
              "description": "with Funding Societies, applying for financing directly from Bukku",
              "info": null
            },
            {
              "name": "Flow",
              "description": "flowing \"Sales\" from POS and e-Commerce Platform into Bukku auto-magically 🪄",
              "info": null
            },
            {
              "name": "Feature & Quota Limit Revamp",
              "description": "feature and quota limiting for different plans",
              "info": null
            }
          ],
          "description": null
        },
      ]
    },
    {
      title: "Software Engineer, IT Specialist",
      company: "iFAST",
      companyLogo: "assets/company_logo/iFAST.jpeg",
      color: "#014656",
      duration: "Sep 2022 - Feb 2023",
      content: [
        {
          "type": null,
          "description": [
            "Worked with business user to plan out system requirements on system enhancements and new developments.",
            "Provided system and application support on company's compliance learning assessment system and bond management system.",
            "Helped business user to amend data in database, for correcting user input error or system error.",
            "Developed feature enhancements for company’s bond management system and compliance learning assessment system.",
            "Developed enhancements and add-ons for external company's CRM (customer relationship management) system for creating and managing financial advisors’ website."
          ],
          "projects": null
        }
      ]
    },
    {
      title: "Intern, IT Partnership",
      company: "iFAST",
      companyLogo: "assets/company_logo/iFAST.jpeg",
      color: "#014656",
      duration: "May 2022 - Aug 2022",
      content: [
        {
          "type": null,
          "description": [
            "Developed enhancement for company’s compliance learning and assessment system.",
            "Planned and developed new module for external company's CRM (customer relationship management) system for creating and managing financial advisors’ website."
          ],
          "projects": null
        }
      ]
    },
    {
      title: "IT Security Trainee",
      company: "Condition Zebra",
      companyLogo: "assets/company_logo/ConditionZebra.png",
      color: "#b02024",
      duration: "Jan 2020 - Mar 2020",
      content: [
        {
          "type": null,
          "description": [
            "Assisted in organizing reports, verifying vulnerability assessment results.",
            "Participated in social engineering with seniors and other interns.",
            "Carried out a network security automated assessment and reporting with other interns.",
          ],
          "projects": null
        }
      ]
    }
  ];

}
