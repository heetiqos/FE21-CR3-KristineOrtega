import { Component, DoCheck } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements DoCheck{
length: number= 0;
constructor(private cs: CartService){}
  ngDoCheck(): void { 
    this.length = this.cs.getCartLength();
  }
}


