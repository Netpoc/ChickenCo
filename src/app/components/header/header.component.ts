import { Component, OnInit } from '@angular/core';
import { CartServicesService } from 'src/app/services/cart-services.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 items = this.cartService.getItems();

  constructor(
    protected cartService: CartServicesService,
  ) { }

  //Calculate Total
  public calculateTotal() {
    return this.items.reduce((acc, prod) => acc += prod.price * prod.qty, 0)
  }

  ngOnInit(): void {
    
  }

}

