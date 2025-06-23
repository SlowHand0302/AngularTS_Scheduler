import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { DayItemComponent } from './day-item/day-item.component';

export interface CalendarDay {
    date: number;
    fullDate: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
    isWeekend: boolean;
}

@Component({
    selector: 'app-month-view',
    imports: [SharedModule, DayItemComponent],
    templateUrl: './month-view.component.html',
    styleUrl: './month-view.component.scss'
})
export class MonthViewComponent {
    currentDate = new Date();
    currentMonth = this.currentDate.getMonth();
    currentYear = this.currentDate.getFullYear();
    today = new Date();

    calendarDays: CalendarDay[] = [];
    daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    private updateInterval: any;
    ngOnInit() {
        this.generateCalendar();
        // this.startRealTimeUpdate();
    }

    get currentMonthName(): string {
        return this.monthNames[this.currentMonth];
    }

    get todayString(): string {
        return this.today.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    private isSameDay(date1: Date, date2: Date): boolean {
        return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
    }

    generateCalendar(): void {
        this.calendarDays = [];

        // First day of the current month
        const firstDay = new Date(this.currentYear, this.currentMonth, 1);
        const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);

        // Start from the first Sunday of the calendar view
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - startDate.getDay());

        // Generate 42 days (6 weeks)
        for (let i = 0; i < 42; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);

            const calendarDay: CalendarDay = {
                date: date.getDate(),
                fullDate: new Date(date),
                isCurrentMonth: date.getMonth() === this.currentMonth,
                isToday: this.isSameDay(date, this.today),
                isWeekend: date.getDay() === 0 || date.getDay() === 6
            };

            this.calendarDays.push(calendarDay);
        }
    }

    previousMonth(): void {
        if (this.currentMonth === 0) {
            this.currentMonth = 11;
            this.currentYear--;
        } else {
            this.currentMonth--;
        }
        this.generateCalendar();
    }

    nextMonth(): void {
        if (this.currentMonth === 11) {
            this.currentMonth = 0;
            this.currentYear++;
        } else {
            this.currentMonth++;
        }
        this.generateCalendar();
    }

    goToToday(): void {
        this.today = new Date(); // Update today in case it changed
        this.currentMonth = this.today.getMonth();
        this.currentYear = this.today.getFullYear();
        this.generateCalendar();
    }

    private startRealTimeUpdate(): void {
        // Update every minute to keep "today" current
        this.updateInterval = setInterval(() => {
            const newToday = new Date();
            if (!this.isSameDay(this.today, newToday)) {
                this.today = newToday;
                this.generateCalendar(); // Regenerate if day changed
            }
        }, 60000); // Check every minute
    }

    private getWeekNumber(date: Date): number {
        const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        const dayNum = d.getUTCDay() || 7;
        d.setUTCDate(d.getUTCDate() + 4 - dayNum);
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
    }

    trackByDate(index: number, day: CalendarDay): string {
        return day.fullDate.toISOString();
    }
}
