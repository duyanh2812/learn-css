import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnLifeCycleComponent } from './learn-life-cycle.component';

describe('LearnLifeCycleComponent', () => {
  let component: LearnLifeCycleComponent;
  let fixture: ComponentFixture<LearnLifeCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnLifeCycleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
