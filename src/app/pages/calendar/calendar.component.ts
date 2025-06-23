import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MonthViewComponent } from '../../shared/components/month-view/month-view.component';
import { WeekViewComponent } from '../../shared/components/week-view/week-view.component';
import { DayViewComponent } from '../../shared/components/day-view/day-view.component';
import { CalendarEvent } from '../../shared/components/week-view/week-view.component';
interface CalendarViewType {
    name: string;
    code: string;
}
@Component({
    selector: 'app-calendar',
    imports: [SharedModule, MonthViewComponent, WeekViewComponent, DayViewComponent],
    templateUrl: './calendar.component.html',
    styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
    date1: Date | undefined;
    calendarViewType: CalendarViewType[] | undefined;
    selectedCalendarViewType: CalendarViewType = { name: 'Month View', code: 'month' };
    currentWeek = new Date();
    calendarEvents: CalendarEvent[] = [];

    ngOnInit() {
        this.date1 = new Date();
        this.calendarViewType = [
            { name: 'Day View', code: 'day' },
            { name: 'Week View', code: 'week' },
            { name: 'Month View', code: 'month' },
        ];
    }
}
