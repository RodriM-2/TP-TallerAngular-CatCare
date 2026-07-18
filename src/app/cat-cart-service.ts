import { Service } from '@angular/core';
import { Cat } from '../interfaces/Cat';
import { BehaviorSubject } from 'rxjs';

@Service()
export class CatCartService {

    private _list: Cat[] = [];
    list: BehaviorSubject<Cat[]> = new BehaviorSubject(this._list);

  addtoCart(cat: Cat) {
    this._list.push({... cat});
    this.list.next(this._list);
  }
}
