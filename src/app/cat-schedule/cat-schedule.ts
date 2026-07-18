import { Component } from '@angular/core';
import { CatListComponent } from "../cat-list/cat-list";
import { CatCartComponent } from "../cat-cart/cat-cart";

@Component({
  selector: 'app-cat-schedule',
  imports: [CatListComponent, CatCartComponent],
  templateUrl: './cat-schedule.html',
  styleUrl: './cat-schedule.scss',
})
export class CatScheduleComponent {}
