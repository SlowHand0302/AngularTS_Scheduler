import { Recurrence, Frequency } from '../models/Recurrence.model';

export const recurrenceSamples: Recurrence[] = [
    {
        id: 'rec_001',
        taskId: 'task_101',
        until: new Date('2024-12-31T23:59:59Z'),
        interval: 1,
        frequency: Frequency.DAILY,
        isActive: true
    },
    {
        id: 'rec_002',
        taskId: 'task_102',
        until: new Date('2025-06-30T23:59:59Z'),
        interval: 2,
        frequency: Frequency.WEEKLY,
        isActive: true
    },
    {
        id: 'rec_003',
        taskId: 'task_103',
        until: new Date('2026-01-01T00:00:00Z'),
        interval: 1,
        frequency: Frequency.MONTHLY,
        isActive: false
    },
    {
        id: 'rec_004',
        taskId: 'task_104',
        until: new Date('2029-12-31T23:59:59Z'),
        interval: 1,
        frequency: Frequency.YEARLY,
        isActive: true
    },
    {
        id: 'rec_005',
        taskId: 'task_105',
        until: new Date('2024-09-15T23:59:59Z'),
        interval: 3,
        frequency: Frequency.DAILY,
        isActive: true
    },
    {
        id: 'rec_006',
        taskId: 'task_106',
        until: new Date('2024-11-30T23:59:59Z'),
        interval: 1,
        frequency: Frequency.WEEKLY,
        isActive: false
    },
    {
        id: 'rec_007',
        taskId: 'task_107',
        until: new Date('2025-03-31T23:59:59Z'),
        interval: 2,
        frequency: Frequency.MONTHLY,
        isActive: true
    },
    {
        id: 'rec_008',
        taskId: 'task_108',
        until: new Date('2024-08-01T23:59:59Z'),
        interval: 5,
        frequency: Frequency.DAILY,
        isActive: true
    },
    {
        id: 'rec_009',
        taskId: 'task_109',
        until: new Date('2025-12-25T23:59:59Z'),
        interval: 4,
        frequency: Frequency.WEEKLY,
        isActive: false
    },
    {
        id: 'rec_010',
        taskId: 'task_110',
        until: new Date('2027-06-01T23:59:59Z'),
        interval: 6,
        frequency: Frequency.MONTHLY,
        isActive: true
    }
];
