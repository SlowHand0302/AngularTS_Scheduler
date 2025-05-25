import { Routes } from '@angular/router';
import { LayoutComponent } from './app/layout/layout.component';
import { DashboardComponent } from './app/pages/dashboard/dashboard.component';
import { LoginComponent } from './app/pages/login/login.component';
import { ErrorComponent } from './app/pages/error/error.component';
import { AccessDenyComponent } from './app/pages/access-deny/access-deny.component';
import { NotFoundComponent } from './app/pages/not-found/not-found.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [{ path: '', component: DashboardComponent }]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    { path: 'error', component: ErrorComponent },
    { path: 'access-deny', component: AccessDenyComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
];
