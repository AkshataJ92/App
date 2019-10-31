import {  RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';

const arr :Routes = [
 {path:'', component:LoginComponent},
 {path:'user', component:UserComponent},
 {path:'register', component:RegisterComponent}
];

export const routing = RouterModule.forRoot(arr);
