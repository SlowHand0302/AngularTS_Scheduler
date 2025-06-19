import { Participant } from '../models/Participant.model';

export const mockParticipants: Participant[] = [
    {
        id: 'part1',
        accountId: 'acc1',
        name: 'John Doe',
        avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
        phone: '+1234567890',
        labels: [
            { id: 'lbl1', accountID: 'acc1', name: 'Team Lead', color: '#FF5733' },
            { id: 'lbl2', accountID: 'acc1', name: 'Developer', color: '#33FF57' }
        ],
        email: 'john.doe@example.com',
        notes: 'Team leader, prefers morning meetings'
    },
    {
        id: 'part2',
        accountId: 'acc2',
        name: 'Jane Smith',
        avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png',
        labels: [{ id: 'lbl3', accountID: 'acc2', name: 'Designer', color: '#3357FF' }],
        email: 'jane.smith@example.com',
        notes: 'Expert in UX design'
    },
    {
        id: 'part3',
        accountId: 'acc3',
        name: 'Alex Brown',
        avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png',
        labels: [
            { id: 'lbl4', accountID: 'acc3', name: 'New Hire', color: '#FF33A1' },
            { id: 'lbl5', accountID: 'acc3', name: 'Trainee', color: '#A133FF' }
        ],
        phone: '+1987654321',
        notes: 'New team member, onboarding in progress'
    },
    {
        id: 'part4',
        accountId: 'acc4',
        name: 'Emily Davis',
        avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png',
        labels: [{ id: 'lbl6', accountID: 'acc4', name: 'Client Manager', color: '#57FF33' }],
        phone: '+1122334455',
        email: 'emily.davis@example.com',
        notes: 'Handles client communications'
    },
    {
        id: 'part5',
        accountId: 'acc5',
        name: 'Michael Chen',
        avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png',
        labels: [],
        notes: 'Backend developer, works remotely'
    },
    {
        id: 'part6',
        accountId: 'acc6',
        name: 'Sarah Wilson',
        avatar: '',
        labels: [
            { id: 'lbl7', accountID: 'acc6', name: 'Marketing', color: '#FF8C33' },
            { id: 'lbl8', accountID: 'acc6', name: 'Social Media', color: '#33FF8C' }
        ],
        phone: '+1555666777',
        email: 'sarah.wilson@example.com',
        notes: 'Marketing specialist'
    },
    {
        id: 'part7',
        accountId: 'acc7',
        name: 'David Lee',
        avatar: '',
        labels: [{ id: 'lbl9', accountID: 'acc7', name: 'Analyst', color: '#5733FF' }],
        email: 'david.lee@example.com',
        notes: 'Data analyst, prefers async updates'
    },
    {
        id: 'part8',
        accountId: 'acc8',
        name: 'Laura Martinez',
        avatar: '',
        phone: '+1444333222',
        labels: [{ id: 'lbl10', accountID: 'acc8', name: 'PM', color: '#FF3333' }],
        notes: 'Project manager, strict deadlines'
    },
    {
        id: 'part9',
        accountId: 'acc9',
        name: 'Chris Taylor',
        avatar: '',
        labels: [
            { id: 'lbl11', accountID: 'acc9', name: 'DevOps', color: '#33A1FF' },
            { id: 'lbl12', accountID: 'acc9', name: 'On-Call', color: '#FFA133' }
        ],
        email: 'chris.taylor@example.com',
        notes: 'DevOps engineer, on-call this week'
    },
    {
        id: 'part10',
        accountId: 'acc10',
        name: 'Anna Kim',
        avatar: '',
        labels: [],
        phone: '+1777888999',
        notes: 'UI designer, part-time'
    }
];
