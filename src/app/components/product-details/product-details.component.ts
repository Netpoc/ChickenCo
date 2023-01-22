import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsApiService } from 'src/app/services/product-service.service';
import { CartServicesService } from 'src/app/services/cart-services.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() productDetails: any;
  items = this.cartService.getItems();

  //Add Item to Cart
  addToCart(product: any) {
    const itemExist = this.items.find(({id}) => id === product.id);
    if (!itemExist) {
      this.items.push({...product, qty: 1});
      return

    }
    itemExist.qty += 1;
  }

  constructor(
    public productService: ProductsApiService,
    private cartService: CartServicesService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: any) => {
      this.getProductDetails(param.id)
    })
  }

  private getProductDetails(id: Number) {
    this.productService.getProductsDetails(id).subscribe((res: any) => {
      this.productDetails = res;
    })
  }
  

}
