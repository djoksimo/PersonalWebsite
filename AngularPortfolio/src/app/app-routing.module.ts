import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResumeComponent} from './resume/resume.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ExperienceComponent} from './experience/experience.component';
import {ProjectsComponent} from './projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'resume', component: ResumeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
