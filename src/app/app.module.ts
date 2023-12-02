import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProjectsComponent} from "./components/projects/projects.component";
import {SkillsComponent} from "./components/skills/skills.component";
import {HeroComponent} from "./components/hero/hero.component";
import {ContactComponent} from "./components/contact/contact.component";
import {ProjectComponent} from "./components/projects/parts/project/project.component";
import { SkillComponent } from './components/skills/parts/skill/skill.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ExperienceComponent } from './components/experiences/parts/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    SkillsComponent,
    HeroComponent,
    ContactComponent,
    ProjectComponent,
    SkillComponent,
    ExperiencesComponent,
    ExperienceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
