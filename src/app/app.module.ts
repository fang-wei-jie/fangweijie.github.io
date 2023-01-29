import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProjectsComponent} from "./components/projects/projects.component";
import {SkillsComponent} from "./components/skills/skills.component";
import {HeroComponent} from "./components/hero/hero.component";
import {AboutMeComponent} from "./components/about-me/about-me.component";
import {ContactComponent} from "./components/contact/contact.component";
import {ResumeComponent} from "./components/resume/resume.component";
import {NavHeaderComponent} from "./components/nav-header/nav-header.component";
import {ProjectComponent} from "./components/projects/parts/project/project.component";
import { WorksComponent } from './components/works/works.component';
import { SkillComponent } from './components/skills/parts/skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    SkillsComponent,
    HeroComponent,
    AboutMeComponent,
    ContactComponent,
    ResumeComponent,
    NavHeaderComponent,
    ProjectComponent,
    WorksComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
