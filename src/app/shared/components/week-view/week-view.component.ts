import { Component, computed, input, Input, signal } from '@angular/core';
import { SharedModule } from '../../shared.module';

export interface CalendarEvent {
    id: string;
    title: string;
    startTime: Date;
    endTime: Date;
    color?: string;
    description?: string;
}

@Component({
    selector: 'app-week-view',
    imports: [SharedModule],
    templateUrl: './week-view.component.html',
    styleUrl: './week-view.component.scss'
})
export class WeekViewComponent {
    // Input for events
    events = input<CalendarEvent[]>([]);

    // Signals for state management
    currentDate = signal(new Date());

    // Computed properties using new signal APIs
    weekDays = computed(() => {
        const start = this.getWeekStart(this.currentDate());
        const days = [];

        for (let i = 0; i < 7; i++) {
            const date = new Date(start);
            date.setDate(start.getDate() + i);
            days.push({
                date: new Date(date),
                name: this.getDayName(date),
                number: date.getDate()
            });
        }

        return days;
    });

    weekTitle = computed(() => {
        const start = this.getWeekStart(this.currentDate());
        const end = new Date(start);
        end.setDate(start.getDate() + 6);

        const startMonth = start.toLocaleDateString('en-US', { month: 'long' });
        const endMonth = end.toLocaleDateString('en-US', { month: 'long' });
        const year = start.getFullYear();

        if (start.getMonth() === end.getMonth()) {
            return `${startMonth} ${start.getDate()} - ${end.getDate()}, ${year}`;
        } else {
            return `${startMonth} ${start.getDate()} - ${endMonth} ${end.getDate()}, ${year}`;
        }
    });

    timeSlots = computed(() => {
        const slots = [];
        for (let hour = 0; hour < 24; hour++) {
            slots.push(hour);
        }
        return slots;
    });

    // Navigation methods
    previousWeek(): void {
        const newDate = new Date(this.currentDate());
        newDate.setDate(newDate.getDate() - 7);
        this.currentDate.set(newDate);
    }

    nextWeek(): void {
        const newDate = new Date(this.currentDate());
        newDate.setDate(newDate.getDate() + 7);
        this.currentDate.set(newDate);
    }

    goToToday(): void {
        this.currentDate.set(new Date());
    }

    // Utility methods
    private getWeekStart(date: Date): Date {
        const start = new Date(date);
        const day = start.getDay();
        const diff = start.getDate() - day;
        start.setDate(diff);
        start.setHours(0, 0, 0, 0);
        return start;
    }

    private getDayName(date: Date): string {
        return date.toLocaleDateString('en-US', { weekday: 'short' });
    }

    isToday(date: Date): boolean {
        const today = new Date();
        return date.toDateString() === today.toDateString();
    }

    formatTime(hour: number): string {
        if (hour === 0) return '12 AM';
        if (hour === 12) return '12 PM';
        if (hour < 12) return `${hour} AM`;
        return `${hour - 12} PM`;
    }

    formatEventTime(date: Date): string {
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    }

    getEventsForDay(date: Date): CalendarEvent[] {
        return this.events().filter((event) => {
            const eventDate = new Date(event.startTime);
            return eventDate.toDateString() === date.toDateString();
        });
    }

    getEventTop(event: CalendarEvent): number {
        const hour = event.startTime.getHours();
        const minutes = event.startTime.getMinutes();
        return hour * 60 + minutes;
    }

    getEventHeight(event: CalendarEvent): number {
        const duration = event.endTime.getTime() - event.startTime.getTime();
        const minutes = duration / (1000 * 60);
        return Math.max(minutes, 30); // Minimum height of 30px
    }

    onEventClick(event: CalendarEvent): void {
        console.log('Event clicked:', event);
        // Emit event or handle click logic here
    }
}
