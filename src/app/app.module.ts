import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent},
      { path: 'products/:id', component: ProductDetailsComponent},
      { path: 'cart', component: CartComponent},
      { path: 'checkout', component: CheckoutComponent}

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
