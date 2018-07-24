import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule} from '@angular/router';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { CustomNavComponent } from './custom-nav/custom-nav.component';
import {FormsModule} from '@angular/forms';
import { ResumeComponent } from './resume/resume.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomNavComponent,
    PdfViewerComponent,
    ResumeComponent,
    HomeComponent,
    ExperienceComponent,
    ProjectsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
