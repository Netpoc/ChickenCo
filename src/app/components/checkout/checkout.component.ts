import { Component, OnInit } from '@angular/core';
import { CartServicesService } from 'src/app/services/cart-services.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
 items= this.cartService.getItems();

  constructor(
    protected cartService: CartServicesService
  ) { }

  ngOnInit(): void {
  }
  //Remove Item From Cart
  removeItem(item: any) {
    this.items = this.items.filter(({ id }) => id !== item.id)
    
  }

}
