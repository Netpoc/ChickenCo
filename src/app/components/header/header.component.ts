import { Component, OnInit } from '@angular/core';
import { CartServicesService } from 'src/app/services/cart-services.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: any;

  constructor(
    protected cartService: CartServicesService
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

}
