import { ChangeDetectorRef, Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CatDataService } from '../cat-data';
import { Cat } from '../../interfaces/Cat';

@Component({
  selector: 'app-free-all-cats',
  imports: [],
  templateUrl: './free-all-cats.html',
  styleUrl: './free-all-cats.scss',
})
export class FreeAllCats {
  done = false;

  constructor(
    private catsDataService: CatDataService,
    private cdr: ChangeDetectorRef
  ) {}

  freeAllCats() {
    this.done = false;

    this.catsDataService.getCats().pipe(
      map((catsData) => Array.isArray(catsData) ? catsData : []),
      switchMap((cats: Cat[]) =>
        forkJoin(cats.map((cat) => this.catsDataService.freeAllCats(cat.id)))
      )
    ).subscribe({
      next: () => {
        this.done = true;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}