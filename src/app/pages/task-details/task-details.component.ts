import { Component, input } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommentComponent } from '../../shared/components/comment/comment.component';
import { TaskPriorityTagComponent } from '../../shared/components/task-priority-tag/task-priority-tag.component';
import { TaskStatusTagComponent } from '../../shared/components/task-status-tag/task-status-tag.component';
import { AttachmentComponent } from '../../shared/components/attachment/attachment.component';
import { MenuItem } from 'primeng/api';
import { mockTasks } from '../../core/constants/todo.constant';

@Component({
    selector: 'app-task-details',
    imports: [SharedModule, TaskPriorityTagComponent, TaskStatusTagComponent, CommentComponent, AttachmentComponent],
    templateUrl: './task-details.component.html',
    styleUrl: './task-details.component.scss'
})
export class TaskDetailsComponent {
    isQuickView = input<boolean>(false);
    task = mockTasks[0];
    tag = ['work', 'document', 'daily'];
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
        },
        {
            label: 'Edit',
            icon: 'pi pi-file-edit',
            command: () => {}
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {}
        }
    ];
}
