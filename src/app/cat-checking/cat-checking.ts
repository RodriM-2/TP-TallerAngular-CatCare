import { Component } from '@angular/core';
import { FreeAllCats } from '../free-all-cats/free-all-cats';

@Component({
  selector: 'app-cat-checking',
  imports: [FreeAllCats],
  templateUrl: './cat-checking.html',
  styleUrl: './cat-checking.scss',
})
export class CatCheckingComponent {}
