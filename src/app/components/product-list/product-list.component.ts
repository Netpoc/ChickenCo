import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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