import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { ICarProduct } from './interfaces';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    items: ICarProduct[] = [];

    constructor(
        private http: HttpClient
    ) { }

    addToCart(product: ICarProduct): void {
        this.items.push(product);
    }

    getItems(): ICarProduct[] {
        return this.items;
    }

    clearCart(): ICarProduct[] {
        this.items = [];
        return this.items;
    }

    getShippingPrices(): Observable<any> {
        return this.http.get('/assets/shipping.json');
    }

}
