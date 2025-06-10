import { TaskPriority } from '../models/TaskV2.model';

export interface PersonReference {
  id: string; // UUID or local ID
  name: string;
  role?: string;       // e.g., "Doctor", "Friend", "Client"
  contact?: string;    // e.g., email or phone (optional)
  note?: string;       // free-form field
}

// Core Person entity - lightweight contact management
export interface Person {
    id: string;
    accountId: string;
    name: string;
    email?: string;
    phone?: string;
    avatar?: string;
    notes?: string;
    tags?: string[]; // e.g., ["work", "family", "friend", "trainer"]
    createdAt: Date;
    updatedAt: Date;
}

// Relationship between tasks/events and people
export interface TaskPerson {
    id: string;
    taskId: string; // references your existing task
    personId?: string; // references Person.id (optional for quick entries)
    personName: string; // always store name for display (even if no Person record)
    role: PersonRole;
    relationshipType: RelationshipType;
    createdAt: Date;
}

// Define roles people play in tasks/events
export enum PersonRole {
    ASSIGNEE = 'ASSIGNEE', // Person who assigned this task to user
    COLLABORATOR = 'COLLABORATOR', // Working together on this
    MEETING_WITH = 'MEETING_WITH', // Meeting/event attendee
    ACCOUNTABILITY = 'ACCOUNTABILITY', // Accountability partner for habits
    RECIPIENT = 'RECIPIENT', // Task is for this person
    ORGANIZER = 'ORGANIZER' // Person who organized/invited
}

// How this person relates to the user
export enum RelationshipType {
    PERSONAL = 'PERSONAL', // Friends, family
    PROFESSIONAL = 'PROFESSIONAL', // Colleagues, clients
    SERVICE = 'SERVICE', // Trainer, doctor, service provider
    OTHER = 'OTHER'
}

// Enhanced Task interface (extends your existing task model)
export interface Task {
    id: string;
    accountId: string;
    title: string;
    description?: string;
    completed: boolean;
    dueDate?: Date;
    priority?: TaskPriority;
    category?: string;
    // ... your existing task fields

    // New people-related fields
    people?: TaskPerson[]; // Related people
    isAssignedByOthers: boolean; // Quick flag for filtering
    createdAt: Date;
    updatedAt: Date;
}

// Extended interface for habits that involve people
export interface HabitPerson {
    id: string;
    habitId: string; // references your habit tracking
    personId?: string;
    personName: string;
    role: PersonRole; // Usually ACCOUNTABILITY or COLLABORATOR
    createdAt: Date;
}

// Sample data structures
const personSamples: Person[] = [
    {
        id: 'person_001',
        accountId: 'acc_12345',
        name: 'Sarah Chen',
        email: 'sarah.chen@company.com',
        phone: '+1234567890',
        tags: ['work', 'manager'],
        notes: 'Project manager for Q3 initiatives',
        createdAt: new Date('2024-06-01T10:00:00Z'),
        updatedAt: new Date('2024-06-01T10:00:00Z')
    },
    {
        id: 'person_002',
        accountId: 'acc_12345',
        name: 'Mom',
        email: 'mom@family.com',
        tags: ['family'],
        notes: 'Weekly dinner calls',
        createdAt: new Date('2024-05-15T10:00:00Z'),
        updatedAt: new Date('2024-05-15T10:00:00Z')
    },
    {
        id: 'person_003',
        accountId: 'acc_12345',
        name: 'John Trainer',
        phone: '+1987654321',
        tags: ['fitness', 'service'],
        notes: 'Personal trainer at FitGym',
        createdAt: new Date('2024-05-20T10:00:00Z'),
        updatedAt: new Date('2024-05-20T10:00:00Z')
    }
];

const taskPersonSamples: TaskPerson[] = [
    {
        id: 'tp_001',
        taskId: 'task_101',
        personId: 'person_001',
        personName: 'Sarah Chen',
        role: PersonRole.ASSIGNEE,
        relationshipType: RelationshipType.PROFESSIONAL,
        createdAt: new Date('2024-06-01T11:00:00Z')
    },
    {
        id: 'tp_002',
        taskId: 'task_102',
        personName: 'Dr. Smith', // No personId - quick entry
        role: PersonRole.MEETING_WITH,
        relationshipType: RelationshipType.SERVICE,
        createdAt: new Date('2024-06-02T09:00:00Z')
    },
    {
        id: 'tp_003',
        taskId: 'task_103',
        personId: 'person_002',
        personName: 'Mom',
        role: PersonRole.RECIPIENT,
        relationshipType: RelationshipType.PERSONAL,
        createdAt: new Date('2024-06-03T14:00:00Z')
    }
];

// Helper functions for common queries
export class PeopleService {
    // Get all people involved with a task
    static getTaskPeople(taskId: string): TaskPerson[] {
        return taskPersonSamples.filter((tp) => tp.taskId === taskId);
    }

    // Get tasks assigned by others
    static getAssignedTasks(): TaskPerson[] {
        return taskPersonSamples.filter((tp) => tp.role === PersonRole.ASSIGNEE);
    }

    // Get frequent contacts for suggestions
    static getFrequentContacts(accountId: string, limit: number = 5): Person[] {
        // Logic to return most frequently used people
        return personSamples.slice(0, limit);
    }

    // Quick person creation for tasks
    static createQuickPerson(name: string, accountId: string): Partial<Person> {
        return {
            name,
            accountId,
            createdAt: new Date(),
            updatedAt: new Date()
        };
    }
}

export { personSamples, taskPersonSamples };
