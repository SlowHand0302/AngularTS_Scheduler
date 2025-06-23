import { Component, computed, signal } from '@angular/core';
import { SharedModule } from '../../shared.module';
interface CalendarEvent {
    id: string;
    title: string;
    startTime: string; // HH:MM format
    endTime: string; // HH:MM format
    color: string;
    description?: string;
}
@Component({
    selector: 'app-day-view',
    imports: [SharedModule],
    templateUrl: './day-view.component.html',
    styleUrl: './day-view.component.scss'
})
export class DayViewComponent {
    selectedDate = signal(new Date());
    selectedEvent = signal<CalendarEvent | null>(null);

    hours = Array.from({ length: 24 }, (_, i) => i);

    // Sample events
    events = signal<CalendarEvent[]>([
        {
            id: '1',
            title: 'Team Meeting',
            startTime: '09:00',
            endTime: '10:30',
            color: 'bg-blue-100 border-blue-500',
            description: 'Weekly team standup and project updates'
        },
        {
            id: '2',
            title: 'Lunch Break',
            startTime: '12:00',
            endTime: '13:00',
            color: 'bg-green-100 border-green-500'
        },
        {
            id: '3',
            title: 'Client Call',
            startTime: '15:30',
            endTime: '16:30',
            color: 'bg-purple-100 border-purple-500',
            description: 'Quarterly review with main client'
        }
    ]);

    dayEvents = computed(() => {
        const today = this.formatDateForComparison(this.selectedDate());
        return this.events().filter((event) => {
            // For demo purposes, showing events on current selected date
            // In real app, you'd filter by event date
            return true;
        });
    });

    ngOnInit() {
        // Update current time indicator every minute
        setInterval(() => {
            // Force change detection for time indicator
            if (this.isToday(this.selectedDate())) {
                // Trigger change detection
            }
        }, 60000);
    }

    formatDate(date: Date): string {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    formatDateForComparison(date: Date): string {
        return date.toISOString().split('T')[0];
    }

    getDayName(date: Date): string {
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    }

    formatHour(hour: number): string {
        if (hour === 0) return '12 AM';
        if (hour === 12) return '12 PM';
        if (hour < 12) return `${hour} AM`;
        return `${hour - 12} PM`;
    }

    previousDay(): void {
        const prev = new Date(this.selectedDate());
        prev.setDate(prev.getDate() - 1);
        this.selectedDate.set(prev);
    }

    nextDay(): void {
        const next = new Date(this.selectedDate());
        next.setDate(next.getDate() + 1);
        this.selectedDate.set(next);
    }

    goToToday(): void {
        this.selectedDate.set(new Date());
    }

    isToday(date: Date): boolean {
        const today = new Date();
        return this.formatDateForComparison(date) === this.formatDateForComparison(today);
    }

    getEventTop(event: CalendarEvent): number {
        const [hours, minutes] = event.startTime.split(':').map(Number);
        return hours * 64 + (minutes * 64) / 60 + 48; // 64px per hour + header height
    }

    getEventHeight(event: CalendarEvent): number {
        const [startHours, startMinutes] = event.startTime.split(':').map(Number);
        const [endHours, endMinutes] = event.endTime.split(':').map(Number);

        const startTotalMinutes = startHours * 60 + startMinutes;
        const endTotalMinutes = endHours * 60 + endMinutes;
        const durationMinutes = endTotalMinutes - startTotalMinutes;

        return Math.max(32, (durationMinutes * 64) / 60); // Minimum 32px height
    }

    getCurrentTimePosition(): number {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        return hours * 64 + (minutes * 64) / 60 + 48; // 64px per hour + header height
    }

    createEvent(hour: number): void {
        const newEvent: CalendarEvent = {
            id: Date.now().toString(),
            title: 'New Event',
            startTime: `${hour.toString().padStart(2, '0')}:00`,
            endTime: `${(hour + 1).toString().padStart(2, '0')}:00`,
            color: 'bg-yellow-100 border-yellow-500',
            description: 'Click to edit this event'
        };

        this.events.update((events) => [...events, newEvent]);
        this.selectedEvent.set(newEvent);
    }

    selectEvent(event: CalendarEvent): void {
        this.selectedEvent.set(event);
    }

    closeEventDetails(): void {
        this.selectedEvent.set(null);
    }

    deleteEvent(eventId: string): void {
        this.events.update((events) => events.filter((e) => e.id !== eventId));
        this.selectedEvent.set(null);
    }
}
