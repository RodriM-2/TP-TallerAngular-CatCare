import { Injectable } from '@angular/core';
import { Cat } from '../interfaces/Cat';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatCartService {
  private _list: Cat[] = [];
  list: BehaviorSubject<Cat[]> = new BehaviorSubject(this._list);

  addtoCart(cat: Cat) {
    this._list = [...this._list, { ...cat }];
    this.list.next(this._list);
  }
}