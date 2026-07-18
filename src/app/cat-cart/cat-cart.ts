import { Component } from '@angular/core';
import { CatCartService } from '../cat-cart-service';
import { Cat } from '../../interfaces/Cat';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { InputConfirmPut } from "../input-confirm-put/input-confirm-put";

@Component({
  selector: 'app-cat-cart',
  imports: [AsyncPipe, InputConfirmPut],
  templateUrl: './cat-cart.html',
  styleUrl: './cat-cart.scss',
})
export class CatCartComponent {
  
  list$: Observable<Cat[]>;
  constructor(private cart: CatCartService) {
    this.list$= cart.list.asObservable();
  }

}
