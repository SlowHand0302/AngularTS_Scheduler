import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPriorityTagComponent } from './task-priority-tag.component';

describe('TaskPriorityTagComponent', () => {
  let component: TaskPriorityTagComponent;
  let fixture: ComponentFixture<TaskPriorityTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskPriorityTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskPriorityTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
