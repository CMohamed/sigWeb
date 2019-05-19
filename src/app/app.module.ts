import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './app-material/app-material.module';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import { MapComponent } from './map/map.component';
import {AngularOpenlayersModule} from 'ngx-openlayers';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashbord', component: DashbordComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'map', component: MapComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashbordComponent,
    HomeComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AppMaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularOpenlayersModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
