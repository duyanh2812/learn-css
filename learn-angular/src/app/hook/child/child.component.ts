import { CommonModule } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  ngOnDestroy(): void {
    console.log('Child onDestroy');
  }
  @Input()
  myCounter!: number;

  @Input()
  second!: number;

  @Input()
  numbers!: number[];

  changeLog: string[] = [];

  ngOnInit(): void {
    // Only call one time at the time component init
    console.log('Child ngOnInit');
    this.changeLog.push(`ngOnInit`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child ngOnChanges');
    // Call every time props are changes.
    console.log(changes);
    const arr: number[] = [1, 2, 3];
    for (const prop in changes) {
      const change: SimpleChange = changes[prop];
      const prevValue: any = change['previousValue'];
      const currentValue: any = change['currentValue'];
      this.changeLog.push(
        `ngOnChanges in ${prop} with previous value is ${prevValue} and current value is ${currentValue}`
      );
    }
  }

  ngDoCheck(): void {
    // Incase of referent variable, Angular cannot detech change, so we need to use ngDoCheck,
    // For example array push value or object change value
    // But if create new array, clone array or create new object or clone object we can use ngOnChange

    console.log('Child ngDoCheck');
    this.changeLog.push(`ngDoCheck ${this.numbers}`);
  }

  ngAfterContentInit(): void {
    console.log('Child ngAfterContentInit');
    this.changeLog.push('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('Child ngAfterContentChecked');
    this.changeLog.push('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('Child ngAfterViewInit');
    this.changeLog.push('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('Child ngAfterViewChecked');
    this.changeLog.push('ngAfterViewChecked');
  }
}
