import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsApiService } from 'src/app/services/product-service.service';
import { CartServicesService } from 'src/app/services/cart-services.service';
import { Product, products } from 'src/app/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | any;
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
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));

    this.product = products.find(product => product.id === productIdFromRoute);

  }

  //private getProductDetails(id: Number) {
    //this.productService.getProductsDetails(id).subscribe((res: any) => {
      //this.productDetails = res;
    //})
  //}
  

}
