import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
@Component({
    selector: 'app-task-detail-drawer',
    imports: [SharedModule],
    templateUrl: './task-detail-drawer.component.html',
    styleUrl: './task-detail-drawer.component.scss'
})
export class TaskDetailDrawerComponent {
    visible2: boolean = false;
}
