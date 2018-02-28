import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from '../project.service';

@Component({
    selector: 'app-project-detail',
    templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {

    project: any;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private projectService: ProjectService
    ) {
    }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => {
                return this.projectService.getProjectById(+params.get('id'));
            })
            .subscribe(project => {
                this.project = project;
            });
    }
}
