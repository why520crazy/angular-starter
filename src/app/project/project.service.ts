import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

    private projects: any[];

    constructor() {
        this.projects = [
            {
                id: 1,
                name: '项目1'
            },
            {
                id: 2,
                name: '项目2'
            }
        ];
    }

    getProjects(): any[] {
        return this.projects;
    }

    getProjectById(id: number): any {
        return Promise.resolve(this.projects.find((project) => {
            return project.id === id;
        }));
    }
}
