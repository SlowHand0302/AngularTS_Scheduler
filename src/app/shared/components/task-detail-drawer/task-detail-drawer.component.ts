import { Component, output } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { TaskPriorityTagComponent } from '../task-priority-tag/task-priority-tag.component';
import { TaskStatusTagComponent } from '../task-status-tag/task-status-tag.component';
import { mockTasks } from '../../../core/constants/todo.constant';
import { MenuItem } from 'primeng/api';
@Component({
    selector: 'app-task-detail-drawer',
    imports: [SharedModule, TaskPriorityTagComponent, TaskStatusTagComponent],
    templateUrl: './task-detail-drawer.component.html',
    styleUrl: './task-detail-drawer.component.scss'
})
export class TaskDetailDrawerComponent {
    visible: boolean = false;
    fullScreen: boolean = false
    task = mockTasks[0];
    tag = ['work', 'document', 'daily'];
    archived: boolean = false;
    items: MenuItem[] = [
        {
            label: 'Mark as Backlog',
            icon: 'pi pi-refresh',
            command: () => {}
        },
        {
            label: 'Mark as Cancel',
            icon: 'pi pi-times',
            command: () => {}
        },
        {
            separator: true
        },
        {
            label: 'Archive',
            icon: 'pi pi-save',
            command: () => {}
        }
    ];
}
