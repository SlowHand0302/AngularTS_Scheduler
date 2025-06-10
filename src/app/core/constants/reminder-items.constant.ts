import { Reminder, RemindMethod } from "../models/Reminder.model";

export const mockReminders: Reminder[] = [
    {
        id: 'reminder-001',
        taskID: 'task-101',
        time: '2025-06-12T08:00:00Z',
        method: RemindMethod.EMAIL,
        isActive: true
    },
    {
        id: 'reminder-002',
        taskID: 'task-102',
        time: '2025-06-13T09:30:00Z',
        method: RemindMethod.SMS,
        isActive: false
    },
    {
        id: 'reminder-003',
        taskID: 'task-103',
        time: '2025-06-14T18:00:00Z',
        method: RemindMethod.NOTIFICATION,
        isActive: true
    },
    {
        id: 'reminder-004',
        taskID: 'task-104',
        time: '2025-06-15T13:45:00Z',
        method: RemindMethod.ZALO,
        isActive: true
    },
    {
        id: 'reminder-005',
        taskID: 'task-105',
        time: '2025-06-16T07:15:00Z',
        method: RemindMethod.MESSENGER,
        isActive: false
    },
    {
        id: 'reminder-006',
        taskID: 'task-106',
        time: '2025-06-17T14:00:00Z',
        method: RemindMethod.EMAIL,
        isActive: true
    },
    {
        id: 'reminder-007',
        taskID: 'task-107',
        time: '2025-06-18T11:20:00Z',
        method: RemindMethod.NOTIFICATION,
        isActive: false
    },
    {
        id: 'reminder-008',
        taskID: 'task-108',
        time: '2025-06-19T17:00:00Z',
        method: RemindMethod.ZALO,
        isActive: true
    },
    {
        id: 'reminder-009',
        taskID: 'task-109',
        time: '2025-06-20T10:00:00Z',
        method: RemindMethod.SMS,
        isActive: true
    },
    {
        id: 'reminder-010',
        taskID: 'task-110',
        time: '2025-06-21T16:30:00Z',
        method: RemindMethod.MESSENGER,
        isActive: false
    }
];
