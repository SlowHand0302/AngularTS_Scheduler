import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStatusTagComponent } from './task-status-tag.component';

describe('TaskStatusTagComponent', () => {
  let component: TaskStatusTagComponent;
  let fixture: ComponentFixture<TaskStatusTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskStatusTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskStatusTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
