import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskcomponentComponent } from './taskcomponent.component';

describe('TaskcomponentComponent', () => {
  let component: TaskcomponentComponent;
  let fixture: ComponentFixture<TaskcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
