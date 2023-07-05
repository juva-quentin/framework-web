import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from '../app.component'
import { LoginFormComponent } from '@components/login-form/login-form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { NotFoundComponent } from '@components/not-found/not-found.component'
import { NavBarComponent } from '@components/nav-bar/nav-bar.component'
import { RegisterFormComponent } from '@components/register-form/register-form.component'
import { HomeModule } from './home.module'
import { AuthenticationService } from '@services/authentication.service'
import {AuthenticationInterceptor} from "../interceptors/authentication.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    NotFoundComponent,
    NavBarComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HomeModule
  ],

  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi : true
  }, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
