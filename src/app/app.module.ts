import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginFormComponent } from '@components/login-form/login-form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { StarRatingPipe } from '@pipes/star-rating.pipe'
import { AlcoolSearchComponent } from '@components/alcool-search/alcool-search.component'
import { NotFoundComponent } from '@components/not-found/not-found.component'
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { HomeComponent } from './components/home/home.component'
import { AlcoolCardComponent } from './components/alcool-card/alcool-card.component'
import { ListAlcoolComponent } from './components/list-alcool/list-alcool.component'
import { DetailsComponent } from './components/details/details.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    StarRatingPipe,
    AlcoolSearchComponent,
    NotFoundComponent,
    NavBarComponent,
    HomeComponent,
    AlcoolCardComponent,
    ListAlcoolComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
