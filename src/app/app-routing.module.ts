import { RouterModule, Routes } from '@angular/router';
import { NgModule }             from '@angular/core';


import { RecordComponent }   from './record/record.component';
import { LoginComponent }  from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'record', component: RecordComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
