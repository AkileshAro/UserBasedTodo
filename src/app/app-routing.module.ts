import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import { CurrentUserComponent } from './current-user/current-user.component';


const routes: Routes = [
  {path : 'register', component:RegisterUserComponent},
  {path : 'login', component:LoginUserComponent},
  {path : 'list-of-users', component:ListOfUsersComponent},
  {path : 'login/:id', component:CurrentUserComponent},
  {path : '', redirectTo : '/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
