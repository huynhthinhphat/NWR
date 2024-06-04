import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataService } from './service/data.service';
import { LoginComponent } from './trangchu/login/login.component';
import { HomeComponent } from './trangchu/home/home.component';
import { RegisterComponent } from './trangchu/register/register.component';
import { ThongkeComponent } from './trangchu/thongke/thongke.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BangdieukhienComponent } from './bangdieukhien/bangdieukhien/bangdieukhien.component';
import { DoanhmucComponent } from './doanhmuc/doanhmuc/doanhmuc.component';
import { ThucanComponent } from './thucan/thucan/thucan.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ThongkeComponent,
    BangdieukhienComponent,
    DoanhmucComponent,
    ThucanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MenubarModule,
    FontAwesomeModule
  ],
  providers: [
    provideClientHydration(),
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
