import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../Iproduct';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{

  subtotal!: number;
  total!: number;
  discount!: number;
  cartItems!: Iproduct[];
  length!: number;

  constructor(private cartService: CartService){
  }

  incQtty(product: Iproduct){
    this.cartService.onQttyIncrease(product);
    this.length = this.cartService.getCartLength();
    this.subtotal = this.cartService.getSubtotal();
    this.discount = this.cartService.getDiscount();
    this.total = this.cartService.getTotal();
  }

  decQtty(product: Iproduct){
    this.cartService.onQttyDecrease(product);
    this.length = this.cartService.getCartLength();
    this.subtotal = this.cartService.getSubtotal();
    this.discount = this.cartService.getDiscount();
    this.total = this.cartService.getTotal();
  }

  onDelete(index:number){
    this.cartService.onDelete(index);
    this.length = this.cartService.getCartLength();
    this.subtotal = this.cartService.getSubtotal();
    this.discount = this.cartService.getDiscount();
    this.total = this.cartService.getTotal();
  }



ngOnInit(): void {
  this.cartItems = this.cartService.getCart();
  this.length = this.cartService.getCartLength();
  this.subtotal = this.cartService.getSubtotal();
  this.discount = this.cartService.getDiscount();
  this.total = this.cartService.getTotal();
}


}
