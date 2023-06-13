import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { StudentsComponent } from './components/students/students.component';
import { RegisterComponent} from './components/register/register.component';

const appRoutes: Routes = [
	{path: '', component: AboutComponent},
	{path: 'about',component:AboutComponent},
	{path: 'login',component:LoginComponent},
	{path: 'students',component:StudentsComponent},
	{path: 'register', component:RegisterComponent},
	{path:'**',component:ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);