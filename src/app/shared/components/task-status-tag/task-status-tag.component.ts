import { Component, input } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { TaskStatus } from '../../../core/models/Task.model';
@Component({
    selector: 'app-task-status-tag',
    imports: [SharedModule],
    templateUrl: './task-status-tag.component.html',
    styleUrl: './task-status-tag.component.scss'
})
export class TaskStatusTagComponent {
    status = input.required<TaskStatus>();
    enum = TaskStatus;
}
