//angular imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//copmponents imports
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';
import { FavouriteUserComponent } from './pages/favourite-user/favourite-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserComponent },
  { path: 'favouriteUsers', component: FavouriteUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
