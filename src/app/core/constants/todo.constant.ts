import { Task, TaskStatus, TaskPriority, TaskType } from '../models/Task.model';

export const mockTasks: Task[] = [
    {
        _id: '507f1f77bcf86cd799439011',
        creator: 'alice123',
        assignee: 'bob456',
        title: 'Implement user authentication',
        details: 'Develop and test JWT-based authentication for the application',
        startDate: new Date('2025-05-27T09:00:00Z'),
        endDate: new Date('2025-06-03T17:00:00Z'),
        status: TaskStatus.IN_PROGRESS,
        priority: TaskPriority.HIGH,
        type: TaskType.FEATURE
    },
    {
        _id: '507f1f77bcf86cd799439012',
        creator: 'charlie789',
        assignee: 'dave101',
        title: 'Fix payment gateway bug',
        details: 'Resolve issue with Stripe payment processing failing on edge cases',
        startDate: new Date('2025-05-28T10:00:00Z'),
        endDate: new Date('2025-05-30T18:00:00Z'),
        status: TaskStatus.TODO,
        priority: TaskPriority.MEDIUM,
        type: TaskType.FIX
    },
    {
        _id: '507f1f77bcf86cd799439013',
        creator: 'eve202',
        assignee: 'frank303',
        title: 'Write API documentation',
        details: 'Document all endpoints for the new user management API',
        startDate: new Date('2025-06-01T08:00:00Z'),
        endDate: new Date('2025-06-07T17:00:00Z'),
        status: TaskStatus.BACKLOG,
        priority: TaskPriority.LOW,
        type: TaskType.DOC
    },
    {
        _id: '507f1f77bcf86cd799439014',
        creator: 'grace404',
        assignee: 'hank505',
        title: 'Refactor database schema',
        details: 'Optimize database structure for better query performance',
        startDate: new Date('2025-06-02T09:00:00Z'),
        endDate: new Date('2025-06-10T17:00:00Z'),
        status: TaskStatus.IN_PROGRESS,
        priority: TaskPriority.MEDIUM,
        type: TaskType.REFACTOR
    },
    {
        _id: '507f1f77bcf86cd799439015',
        creator: 'ian606',
        assignee: 'julia707',
        title: 'Add unit tests for API',
        details: 'Write unit tests for all public API endpoints',
        startDate: new Date('2025-05-29T09:00:00Z'),
        endDate: new Date('2025-06-05T17:00:00Z'),
        status: TaskStatus.TODO,
        priority: TaskPriority.HIGH,
        type: TaskType.TEST
    },
    {
        _id: '507f1f77bcf86cd799439016',
        creator: 'karen808',
        assignee: 'leo909',
        title: 'Design new dashboard UI',
        details: 'Create wireframes and mockups for the admin dashboard',
        startDate: new Date('2025-06-03T10:00:00Z'),
        endDate: new Date('2025-06-15T17:00:00Z'),
        status: TaskStatus.BACKLOG,
        priority: TaskPriority.MEDIUM,
        type: TaskType.FEATURE
    },
    {
        _id: '507f1f77bcf86cd799439017',
        creator: 'mike111',
        assignee: 'nina222',
        title: 'Resolve login timeout issue',
        details: 'Fix session timeout causing users to be logged out unexpectedly',
        startDate: new Date('2025-05-26T09:00:00Z'),
        endDate: new Date('2025-05-28T17:00:00Z'),
        status: TaskStatus.DONE,
        priority: TaskPriority.HIGH,
        type: TaskType.FIX
    },
    {
        _id: '507f1f77bcf86cd799439018',
        creator: 'oliver333',
        assignee: 'paula444',
        title: 'Create user onboarding flow',
        details: 'Develop interactive onboarding tutorial for new users',
        startDate: new Date('2025-06-05T09:00:00Z'),
        endDate: new Date('2025-06-20T17:00:00Z'),
        status: TaskStatus.TODO,
        priority: TaskPriority.MEDIUM,
        type: TaskType.FEATURE
    },
    {
        _id: '507f1f77bcf86cd799439019',
        creator: 'quinn555',
        assignee: 'rachel666',
        title: 'Update deprecated libraries',
        details: 'Replace outdated dependencies with latest versions',
        startDate: new Date('2025-06-01T09:00:00Z'),
        endDate: new Date('2025-06-08T17:00:00Z'),
        status: TaskStatus.CANCELED,
        priority: TaskPriority.LOW,
        type: TaskType.REFACTOR
    },
    {
        _id: '507f1f77bcf86cd799439020',
        creator: 'steve777',
        assignee: 'tina888',
        title: 'Test mobile responsiveness',
        details: 'Ensure UI is responsive across all mobile devices',
        startDate: new Date('2025-05-30T09:00:00Z'),
        endDate: new Date('2025-06-02T17:00:00Z'),
        status: TaskStatus.DONE,
        priority: TaskPriority.HIGH,
        type: TaskType.TEST
    }
];
