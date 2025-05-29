import { Component } from '@angular/core';

import { Task } from '../../core/models/Task.model';
import { SharedModule } from '../../shared/shared.module';
import { mockTasks } from '../../core/constants/todo.constant';
import { FilterPopoverComponent } from '../../shared/components/filter-popover/filter-popover.component';
@Component({
    selector: 'app-today-tasks',
    imports: [SharedModule, FilterPopoverComponent],
    templateUrl: './today-tasks.component.html',
    styleUrl: './today-tasks.component.scss'
})
export class TodayTasksComponent {
    tasks!: Task[];
    date1: Date | undefined;
    constructor() {}

    ngOnInit() {
        this.tasks = [...mockTasks];
        this.date1 = new Date();
    }
}
