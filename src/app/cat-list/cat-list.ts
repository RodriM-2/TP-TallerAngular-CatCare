import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
export class CatListComponent implements OnInit {
  Cats: Cat[] = [];

  constructor(
    private cart: CatCartService,
    private catsDataService: CatDataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.catsDataService.getCats().subscribe({
      next: (cats) => {
        console.log('Payload recibido:', cats); 
        this.Cats = Array.isArray(cats) ? cats : (cats as any).data || [];
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error('Error loading cats:', err);
      }
    });
  }

  addtoCart(cat: Cat, day: string): void {
    cat.chosenDay = day;
    this.cart.addtoCart(cat);
  }

  trackById(index: number, item: Cat): number {
    return item.id; 
  }
}