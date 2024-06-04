import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './trangchu/login/login.component';
import { RegisterComponent } from './trangchu/register/register.component';
import { HomeComponent } from './trangchu/home/home.component';
import { ThongkeComponent } from './trangchu/thongke/thongke.component';

const routes: Routes = [
  { path: '', redirectTo: '/trangchu/login', pathMatch: "full" },
  { path: 'trangchu/home', component: HomeComponent },
  { path: 'trangchu/login', component: LoginComponent },
  { path: 'trangchu/register', component: RegisterComponent },
  { path: 'trangchu/thongke', component: ThongkeComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
