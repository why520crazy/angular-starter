import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {

    projects: any[];

    constructor(private projectService: ProjectService) {
    }

    ngOnInit(): void {
        this.projects = this.projectService.getProjects();
    }
}
