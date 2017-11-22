import { AuthGuard } from './guards/auth.guard';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AddNewComponent } from './add-new/add-new.component';


const APP_ROUTES: Route[] = [
    { path: '', component: MainPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
    {path: 'admin', component: AdminComponent },
    {path: 'add-new', component: AddNewComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ], exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
