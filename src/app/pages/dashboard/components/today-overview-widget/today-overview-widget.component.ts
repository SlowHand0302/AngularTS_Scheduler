import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { mockTasks } from '../../../../core/constants/todo.constant';
import { Task } from '../../../../core/models/Task.model';
@Component({
    selector: 'app-today-overview-widget',
    imports: [SharedModule],
    templateUrl: './today-overview-widget.component.html',
    styleUrl: './today-overview-widget.component.scss'
})
export class TodayOverviewWidgetComponent {
    tasks!: Task[]
    date1: Date | undefined;
    constructor() {}

    ngOnInit() {
        this.tasks = [...mockTasks];
        this.date1 = new Date()
    }
}
