import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component'
import { UsersComponent } from './components/users/users.component';
import { RepositoryComponent } from './components/repository/repository.component';

//Add page not found

const routes: Routes = [
//{  path: ' ', redirectTo: ProfileComponent, pathMatch: 'full'},
{path: 'profile', component: ProfileComponent},
{ path: 'users/:username' , component: UsersComponent},
{ path: 'repository/:username' , component:RepositoryComponent}
//   { path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
