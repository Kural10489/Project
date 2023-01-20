import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MensProductsComponent } from './mens-products/mens-products.component';

import { HttpService } from './services/http.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { cartService } from './services/http.cart';
import { FilterPipe } from './pipes/filter.pipe';
import { WomenProductsComponent } from './women-products/women-products.component';
import { authenticateService } from './services/http.Authenticate';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserService } from './services/user.service';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommingsoonComponent } from './commingsoon/commingsoon.component';
import { KidsComponent } from './kids/kids.component';
import { CommonComponent } from './common/common.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    MensProductsComponent,
    CartComponent,
    FilterPipe,
    WomenProductsComponent,
    CheckoutComponent,
    FooterComponent,
    NotFoundComponent,
    CommingsoonComponent,
    KidsComponent,
    CommonComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService,cartService,authenticateService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule {



 }
