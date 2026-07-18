import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { CatCartService } from '../cat-cart-service';
import { CatDataService } from '../cat-data';

@Component({
  selector: 'app-input-confirm-put',
  imports: [],
  templateUrl: './input-confirm-put.html',
  styleUrl: './input-confirm-put.scss',
})
export class InputConfirmPut {
    constructor(
      private cart: CatCartService,
      private catsDataService: CatDataService,
      private cdr: ChangeDetectorRef){}

  @Input()
  ID: number = 0;
  @Input()
  chosenDay: string = '';

  confirmed = false;

  updateCat(): void {
    this.confirmed = false;

    this.catsDataService.editCat(this.ID, this.chosenDay).subscribe({
      next: () => {
        this.confirmed = true;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('An error occurred:', err);
      },
    });
  }
}