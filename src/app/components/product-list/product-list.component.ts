import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServicesService } from 'src/app/services/cart-services.service';
//import { ProductsApiService } from 'src/app/services/product-service.service';
import { products } from 'src/app/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
  allProducts = products;
  items = this.cartService.getItems();

  

  constructor(
    private cartService: CartServicesService,
    private route: ActivatedRoute,
    //public productService: ProductsApiService,
    
    
  ) { }
  
  ngOnInit(): void {
    //this.getAllProducts();

    
    

  }

  //public getAllProducts(){
    //this.productService.getProducts().subscribe((res: any) => {
      //this.allProducts = res.products;
    //})
  //}

  //public productDetail(id: Number) {
    //this.productService.getProductsDetails(id).subscribe((res: any) => {
      //this.productDetails = res;
    //})
 // }

}

