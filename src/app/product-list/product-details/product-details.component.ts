import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../Iproduct';
import { products } from '../../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  products! : Iproduct[];
  product! : Iproduct;


  constructor(private route: ActivatedRoute,
              private cartService: CartService){
  }
  
  
  onAddToCart(product: Iproduct){
    this.cartService.addToCart(this.product);
  }



  ngOnInit(): void {
    this.products = products;
    const id:number = +this.route.snapshot.params['index'];
    this.product = this.products[id];
  }

}
