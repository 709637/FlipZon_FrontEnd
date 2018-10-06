import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { OptionsComponent } from './options/options.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { YourOrdersComponent } from './your-orders/your-orders.component';
import { LoginComponent } from './login/login.component';
import { FindProductsComponent } from './find-products/find-products.component';
import { RegisterComponent } from './register/register.component';
import {OneItemComponent} from './one-item/one-item.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'register', component: RegisterComponent },  
  { path: 'login', component: LoginComponent },
  { path: 'PaymentGateway', component: PaymentGatewayComponent },
  { path: 'OneItem', component: OneItemComponent },
  { path: 'tempOptions', component: OptionsComponent }
];

@NgModule({
  imports: [
     RouterModule.forRoot(routes)],

  exports: [ RouterModule ]
})
export class AppRoutingModule { }
