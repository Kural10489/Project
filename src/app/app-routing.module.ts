import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CommingsoonComponent } from './commingsoon/commingsoon.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MensProductsComponent } from './mens-products/mens-products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { authenticateService } from './services/http.Authenticate';
import { WomenProductsComponent } from './women-products/women-products.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:RegisterComponent},
  {path:'mens',component:MensProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'kids',component:CommingsoonComponent},
  {path:'gift',component:CommingsoonComponent},
  {path:'greatdeals',component:CommingsoonComponent},
  {path:'woman',component:WomenProductsComponent},
  {
    path:'checkout',
    component:CheckoutComponent,
    canActivate:[authenticateService]
  },
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
