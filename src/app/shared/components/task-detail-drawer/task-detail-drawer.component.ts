import { Component, output } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { mockTasks } from '../../../core/constants/todo.constant';
import { MenuItem } from 'primeng/api';
import { TaskDetailsComponent } from '../../../pages/task-details/task-details.component';
@Component({
    selector: 'app-task-detail-drawer',
    imports: [SharedModule, TaskDetailsComponent],
    templateUrl: './task-detail-drawer.component.html',
    styleUrl: './task-detail-drawer.component.scss'
})
export class TaskDetailDrawerComponent {
    visible: boolean = false;
    fullScreen: boolean = false;
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
