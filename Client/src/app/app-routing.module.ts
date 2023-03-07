import { QualificationAndTrainingRequestComponent } from './pages/driver/qualification-and-training-request/qualification-and-training-request.component';
import { MappingDriverComponent } from './pages/driver/mapping-driver/mapping-driver.component';
import { QualificationAndTrainingRecordComponent } from './pages/driver/qualification-and-training-record/qualification-and-training-record.component';
import { HomeComponent } from './pages/home/home.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from '@modules/main/main.component';
import {BlankComponent} from '@pages/blank/blank.component';
import {LoginComponent} from '@modules/login/login.component';
import {ProfileComponent} from '@pages/profile/profile.component';
import {RegisterComponent} from '@modules/register/register.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {AuthGuard} from '@guards/auth.guard';
import {NonAuthGuard} from '@guards/non-auth.guard';
import {ForgotPasswordComponent} from '@modules/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from '@modules/recover-password/recover-password.component';
import {MainMenuComponent} from '@pages/main-menu/main-menu.component';
import {SubMenuComponent} from '@pages/main-menu/sub-menu/sub-menu.component';
import { QualificationAndTrainingRecordListComponent } from '@pages/driver/qualification-and-training-record-list/qualification-and-training-record-list.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
              path: 'main',
              component: MainMenuComponent
            },
            {
              path: 'blank',
              component: BlankComponent
            },
            {
              path: 'sub-menu-1',
              component: SubMenuComponent
            },
            {
              path: 'qualification-and-training-record',
              component: QualificationAndTrainingRecordComponent
            },
            {
              path: 'qualification-and-training-record-list',
              component: QualificationAndTrainingRecordListComponent
            },
            {
              path: 'mapping-driver',
              component: MappingDriverComponent
            },
            {
              path: 'qualification-and-training-request',
              component: QualificationAndTrainingRequestComponent
            },
            {
              path: '',
              component: HomeComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: []
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'recover-password',
        component: RecoverPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
