import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shopping-cart/services/cart/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;

  constructor(
  	private cartService: CartService
  ) { }

  ngOnInit() {
  	this.shippingCosts = this.cartService.getShippingPrices();
  }

}
