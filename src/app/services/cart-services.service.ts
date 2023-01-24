import { Injectable } from '@angular/core';

import { Product } from '../products';

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {
  items: Product[] = [];

  
  public get numberOfItems() : number {
    return this.items.length;
  }


  constructor(
    
  ) { }

  addToCart(product: any){
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeFromCart(product: any){
    this.items.pop();
  }
}
