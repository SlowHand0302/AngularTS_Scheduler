export type Task = {
    _id: string;
    creator: string;
    assignee: string;
    title: string;
    details: string;
    startDate: Date;
    endDate: Date;
    status: TaskStatus;
    priority: TaskPriority;
    type: TaskType;
};

export enum TaskStatus {
    TODO = 'TODO',
    PROGRESSING = 'PROGRESSING',
    DONE = 'DONE',
    BACKLOG = 'BACKLOG',
    CANCELED = 'CANCELED'
}

export enum TaskType {
    DOC = 'DOC',
    FIX = 'FIX',
    FEATURE = 'FEATURE',
    TEST = 'TEST',
    REFACTOR = 'REFACTOR'
}

export enum TaskPriority {
    HIGH = 'HIGH',
    MEDIUM = 'MEDIUM',
    LOW = 'LOW'
}
