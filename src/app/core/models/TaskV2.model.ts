import { Attachment } from './Attachment.model';
import { Label } from './Label.model';
import { Recurrence } from './Recurrence.model';
import { Reminder } from './Reminder.model';
import { StakeHolder } from './Stakeholder.model';

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
    stakeholders?: StakeHolder[];
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
