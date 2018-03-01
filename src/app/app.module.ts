import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ProjectListComponent } from './project/list/project-list.component';
import { ProjectDetailComponent } from './project/detail/project-detail.component';
import { DashboardComponent, ModalContentComponent } from './dashboard/dashboard.component';
import { appRouters } from './app.router';
import { ProjectService } from './project/project.service';
import { NgxBootstrapModule } from './ngx-bootstrap.module';
@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    DashboardComponent,
    ModalContentComponent
  ],
  entryComponents: [
    ModalContentComponent
  ],
  imports: [
    BrowserModule,
    NgxBootstrapModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
