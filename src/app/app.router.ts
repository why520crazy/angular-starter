import { ProjectListComponent } from './project/list/project-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectDetailComponent } from './project/detail/project-detail.component';

export const appRouters = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'projects',
        component: ProjectListComponent
    },
    {
        path: 'projects/:id',
        component: ProjectDetailComponent
      },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

