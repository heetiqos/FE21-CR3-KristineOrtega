import { Injectable } from '@angular/core';
import { Iproduct } from './Iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Iproduct[]= [];
  length! : number;

  constructor() { }

  addToCart(product: Iproduct){
    if (this.cartItems.includes(product)) {
      product.qtty++;
    }
    else{
      this.cartItems.push(product);
    }
  }

  onQttyIncrease(product:Iproduct){
    product.qtty++;
  }

  onQttyDecrease(product:Iproduct){
    if(product.qtty ==1) {
      let index = this.cartItems.indexOf(product);
      this.cartItems.splice(index, 1);
    }else{
      product.qtty--;
    }
  }

  onDelete(index:number){
    this.cartItems[index].qtty = 1;
    this.cartItems.splice(index, 1);
  }


  getCartLength(){ 
    let length = 0;
    this.cartItems.forEach(function(val){
      length+= val.qtty;
    })  
    return length;
  }


  getCart(){
    return this.cartItems
  }

  getSubtotal(){
    let subtotal: number = 0;
    this.cartItems.forEach((product: Iproduct)=>{
      subtotal +=product.price * product.qtty;
    })
    return subtotal;
  }

  getSubtotalPlusServiceFee(){
    let SubtotalPlusServiceFee: number = 0;
    SubtotalPlusServiceFee = this.getSubtotal() * 1.1;
    return SubtotalPlusServiceFee;
  }


  getDiscount(){
    let discount: number = 0;
    let SubtotalPlusServiceFee = this.getSubtotalPlusServiceFee();
    if(SubtotalPlusServiceFee >=400){
      discount = SubtotalPlusServiceFee * (-0.15);
    }
    return discount;
  }

  getTotal(){
    let total: number = 0;
    let SubtotalPlusServiceFee = this.getSubtotalPlusServiceFee();
    let discount = this.getDiscount();
    total = SubtotalPlusServiceFee + discount;
    return total;
  }
}
