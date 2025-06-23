import { Component, input } from '@angular/core';
import { CalendarDay } from '../month-view.component';
import { SharedModule } from '../../../shared.module';
@Component({
    selector: 'app-day-item',
    imports: [SharedModule],
    templateUrl: './day-item.component.html',
    styleUrl: './day-item.component.scss'
})
export class DayItemComponent {
    day = input.required<CalendarDay>();
}
