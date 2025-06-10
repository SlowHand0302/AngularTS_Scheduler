export interface Reminder {
    id: string;
    taskID: string;
    time: string;
    method: RemindMethod;
    isActive: boolean;
}

export enum RemindMethod {
    EMAIL = 'EMAIL',
    ZALO = 'ZALO',
    MESSENGER = 'MESSENGER',
    SMS = 'SMS',
    NOTIFICATION = 'NOTIFICATION'
}
