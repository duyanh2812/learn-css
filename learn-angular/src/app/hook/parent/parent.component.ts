import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent implements AfterViewInit, AfterViewChecked {
  ngAfterViewChecked(): void {
    console.log('Parent ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('Parent ngAfterViewInit');
  }
  private number: number = 0;
  second: number = 0;
  numbers: number[] = [];
  get counter(): number {
    return this.number;
  }

  set counter(value: number) {
    this.number = value;
  }

  increment(): void {
    this.counter++;
  }

  add(): void {
    this.numbers = [...this.numbers, 1];
  }

  decrement(): void {
    this.counter--;
  }
}
