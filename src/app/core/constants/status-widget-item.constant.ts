import { StatusWidgetItem } from '../types/status-widget-item.type';

export const statusWidgetItem: StatusWidgetItem[] = [
    {
        title: 'Task Completed',
        value: 125450,
        description: 'Finished last month',
        proportion: 20,
        state: 'asc'
    },
    {
        title: 'Task In Progress',
        value: 1200,
        description: 'Currently working on',
        proportion: 20,
        state: 'asc'
    },
    {
        title: 'Overdue Tasks',
        value: 12,
        description: 'Missed this months',
        proportion: 20,
        state: 'asc'
    },
    {
        title: 'New Tasks Assigned',
        value: 980,
        description: 'Assigned this months',
        proportion: 20,
        state: 'desc'
    }
];
