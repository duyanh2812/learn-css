import { Component } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-learn-life-cycle',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './learn-life-cycle.component.html',
  styleUrl: './learn-life-cycle.component.scss',
})
export class LearnLifeCycleComponent {}
