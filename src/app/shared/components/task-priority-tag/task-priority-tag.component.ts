import { Component, input } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { TaskPriority } from '../../../core/models/Task.model';

@Component({
    selector: 'app-task-priority-tag',
    imports: [SharedModule],
    templateUrl: './task-priority-tag.component.html',
    styleUrl: './task-priority-tag.component.scss'
})
export class TaskPriorityTagComponent {
    priority = input.required<TaskPriority>();
    enum = TaskPriority;
}
