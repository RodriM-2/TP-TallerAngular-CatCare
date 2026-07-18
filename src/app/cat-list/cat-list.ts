import { Component } from '@angular/core';
import { Cat } from "../../interfaces/Cat";
import { InputStringArray } from "../input-string-array/input-string-array";
import { CatCartService } from '../cat-cart-service';
import { CatDataService } from '../cat-data';

@Component({
  selector: 'app-cat-list',
  imports: [InputStringArray],
  templateUrl: './cat-list.html',
  styleUrl: './cat-list.scss',
})

export class CatListComponent {

  constructor(
    private cart: CatCartService,
    private catsDataService: CatDataService) {
  }

  Cats: Cat[] = [];

  ngOnInit(): void {
    const saved = localStorage.getItem('cats');
    if (saved) {
      try {
        this.Cats = JSON.parse(saved);
      } catch {
        localStorage.removeItem('cats');
      }
    }

    this.catsDataService.getCats().subscribe({
      next: (cats) => {
        this.Cats = Array.isArray(cats) ? cats : [];
        localStorage.setItem('cats', JSON.stringify(this.Cats));
      },
      error: (err) => {
        console.error('Error loading cats:', err);
      }
    });
  }

  addtoCart(cat: Cat, day: string): void {
    cat.chosenDay = day;
    this.cart.addtoCart(  cat);
  }
}
