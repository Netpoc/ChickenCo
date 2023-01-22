import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/product-service.service';
import { CartServicesService } from 'src/app/services/cart-services.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() productDetails: any;

  constructor(
    private productService: ProductServiceService,
    private cartService: CartServicesService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
  }
  

}
