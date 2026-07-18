import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CatCartService } from '../cat-cart-service';

@Component({
  selector: 'app-input-string-array',
  imports: [],
  templateUrl: './input-string-array.html',
  styleUrl: './input-string-array.scss',
})
export class InputStringArray {
  constructor(private cart: CatCartService) {}

  @Input()
  StringArray: string[] = [];
  selectedDay: number = 0;
  hasSelectedDay: boolean = false;

  @Output()
  StringArrayChange: EventEmitter<string> = new EventEmitter<string>();

  //Cambio de dia por desplazamiento del slider
  onSliderChange($event: Event): void {
    this.selectedDay = +($event.target as HTMLInputElement).value;
    this.hasSelectedDay = true;
  }

  //Emite el dia seleccionado al componente padre
  reserveDay(): void {
    if (!this.hasSelectedDay || !this.StringArray.length) {
      return;
    }

    this.StringArrayChange.emit(
      this.StringArray[this.selectedDay]
    );
  }
}
