import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {GetOneItemDetailsService} from './get-one-item-details.service';
import {LoginRegisterService} from './login-register.service';
import {HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { OptionsComponent } from './options/options.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { YourOrdersComponent } from './your-orders/your-orders.component';
import { LoginComponent } from './login/login.component';
import { FindProductsComponent } from './find-products/find-products.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './/app-routing.module';
import { OneItemComponent } from './one-item/one-item.component';

@NgModule({
  declarations: [
    AppComponent,    
    OptionsComponent,
    PaymentGatewayComponent,
    YourOrdersComponent,
    LoginComponent,
    FindProductsComponent,
    RegisterComponent,
    OneItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
    
    
  ],


  providers: [LoginRegisterService,GetOneItemDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }