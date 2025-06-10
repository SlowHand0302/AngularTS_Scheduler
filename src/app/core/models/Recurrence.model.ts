export interface Recurrence {
    id: string;
    taskId: string;
    until: Date;
    interval: number;
    frequency: Frequency;
    isActive: boolean;
}

export enum Frequency {
    NONE = 'NONE',
    DAILY = 'DAILY',
    WEEKLY = 'WEEKLY',
    MONTHLY = 'MONTHLY',
    YEARLY = 'YEARLY'
}
