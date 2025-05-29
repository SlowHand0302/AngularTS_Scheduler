import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { TaskStatus, TaskType, TaskPriority } from '../../../core/models/Task.model';

interface SelectOption {
    name: string;
    value: string;
}
@Component({
    selector: 'app-filter-popover',
    imports: [SharedModule],
    templateUrl: './filter-popover.component.html',
    styleUrl: './filter-popover.component.scss'
})
export class FilterPopoverComponent {
    minDate: Date | undefined;
    statusValues!: SelectOption[];
    typeValues!: SelectOption[];
    priorityValues!: SelectOption[];

    selectedStatus!: SelectOption[];
    selectedPriority!: SelectOption[];
    selectedType!: SelectOption[];
    selectedDeadline!: Date[];

    ngOnInit() {
        this.minDate = new Date();
        this.statusValues = Object.values(TaskStatus).map((value) => ({
            name: value
                .replace(/_/g, ' ')
                .toLowerCase()
                .replace(/\b\w/g, (c) => c.toUpperCase()), // Optional: Format nicely
            value
        }));
        this.typeValues = Object.values(TaskType).map((value) => ({
            name: value[0] + value.slice(1).toLowerCase(), // e.g. 'Feature'
            value
        }));
        this.priorityValues = Object.values(TaskPriority).map((value) => ({
            name: value[0] + value.slice(1).toLowerCase(), // e.g. 'High'
            value
        }));
    }
}
