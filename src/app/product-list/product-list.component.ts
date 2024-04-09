import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { Iproduct } from '../Iproduct';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

  productItems: Iproduct[] = [];//we need to initialize an empty array (productItems) because we are displaying a list of items
  product! : Iproduct;

  constructor(private route: ActivatedRoute,
              private cartService: CartService
  ){

  }

  onAddToCart(product: Iproduct){
    this.cartService.addToCart(product);
  }


  ngOnInit(): void {
    this.productItems = products;
  }

}
