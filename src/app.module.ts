import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app/app.component';
import { ProjectListComponent } from './app/project/list/project-list.component';
import { ProjectDetailComponent } from './app/project/detail/project-detail.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { appRouters } from './app/app.router';
import { ProjectService } from './app/project/project.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
