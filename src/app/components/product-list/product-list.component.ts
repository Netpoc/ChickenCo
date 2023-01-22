import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  allProducts: any;

  constructor(
    public productService: ProductsApiService
  ) { }
  
  ngOnInit(): void {
    this.getAllProducts();
  }

  public getAllProducts(){
    this.productService.getProducts().subscribe((res: any) => {
      this.allProducts = res.products;
    })
  }

}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  qty: number;
  thumbnail: string;
}