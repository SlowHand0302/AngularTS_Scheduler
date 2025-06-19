import { Attachment } from './Attachment.model';
import { Label } from './Label.model';
import { Recurrence } from './Recurrence.model';
import { Reminder } from './Reminder.model';
import { Participant } from './Participant.model';

export interface Task {
    id: string;
    accountId: string;
    title: string;
    labels: Label[];
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    startTime: Date;
    endTime: Date;
    location: string;
    isArchived: boolean;
    participants?: Participant[];
    recurrences?: Recurrence[];
    reminder?: Reminder[];
    attachments?: Attachment[];
    updatedAt: Date;
    createdAt: Date;
}

export enum TaskPriority {
    HIGH = 'HIGH',
    MEDIUM = 'MEDIUM',
    LOW = 'LOW'
}

export enum TaskStatus {
    TODO = 'TODO',
    PROGRESSING = 'PROGRESSING',
    DONE = 'DONE',
    BACKLOG = 'BACKLOG',
    CANCELED = 'CANCELED'
}
