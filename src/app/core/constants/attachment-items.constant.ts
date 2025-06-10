import { Attachment } from '../models/Attachment.model';

// Sample data - 10 attachment items
const attachmentSamples: Attachment[] = [
    {
        id: 'att_001',
        accountID: 'acc_12345',
        fileName: 'project_proposal.pdf',
        fileUrl: 'https://storage.example.com/files/project_proposal.pdf',
        mimeType: 'application/pdf',
        size: '2048576',
        createdAt: new Date('2024-06-01T10:30:00Z'),
        updatedAt: new Date('2024-06-01T10:30:00Z')
    },
    {
        id: 'att_002',
        accountID: 'acc_67890',
        fileName: 'avatar.jpg',
        fileUrl: 'https://storage.example.com/images/avatar.jpg',
        mimeType: 'image/jpeg',
        size: '524288',
        createdAt: new Date('2024-05-28T14:22:15Z'),
        updatedAt: new Date('2024-05-28T14:22:15Z')
    },
    {
        id: 'att_003',
        accountID: 'acc_11111',
        fileName: 'meeting_recording.mp4',
        fileUrl: 'https://storage.example.com/videos/meeting_recording.mp4',
        mimeType: 'video/mp4',
        size: '52428800',
        createdAt: new Date('2024-06-05T09:15:30Z'),
        updatedAt: new Date('2024-06-05T09:15:30Z')
    },
    {
        id: 'att_004',
        accountID: 'acc_22222',
        fileName: 'budget_spreadsheet.xlsx',
        fileUrl: 'https://storage.example.com/documents/budget_spreadsheet.xlsx',
        mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        size: '1048576',
        createdAt: new Date('2024-06-03T16:45:00Z'),
        updatedAt: new Date('2024-06-08T11:20:10Z')
    },
    {
        id: 'att_005',
        accountID: 'acc_33333',
        fileName: 'logo.png',
        fileUrl: 'https://storage.example.com/images/logo.png',
        mimeType: 'image/png',
        size: '131072',
        createdAt: new Date('2024-05-30T08:00:00Z'),
        updatedAt: new Date('2024-05-30T08:00:00Z')
    },
    {
        id: 'att_006',
        accountID: 'acc_44444',
        fileName: 'presentation.pptx',
        fileUrl: 'https://storage.example.com/presentations/presentation.pptx',
        mimeType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        size: '4194304',
        createdAt: new Date('2024-06-07T13:30:45Z'),
        updatedAt: new Date('2024-06-07T13:30:45Z')
    },
    {
        id: 'att_007',
        accountID: 'acc_55555',
        fileName: 'audio_interview.mp3',
        fileUrl: 'https://storage.example.com/audio/audio_interview.mp3',
        mimeType: 'audio/mpeg',
        size: '8388608',
        createdAt: new Date('2024-06-02T11:45:20Z'),
        updatedAt: new Date('2024-06-02T11:45:20Z')
    },
    {
        id: 'att_008',
        accountID: 'acc_66666',
        fileName: 'contract_template.docx',
        fileUrl: 'https://storage.example.com/templates/contract_template.docx',
        mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        size: '786432',
        createdAt: new Date('2024-05-29T15:10:30Z'),
        updatedAt: new Date('2024-06-04T09:25:15Z')
    },
    {
        id: 'att_009',
        accountID: 'acc_77777',
        fileName: 'data_export.csv',
        fileUrl: 'https://storage.example.com/exports/data_export.csv',
        mimeType: 'text/csv',
        size: '262144',
        createdAt: new Date('2024-06-06T17:20:00Z'),
        updatedAt: new Date('2024-06-06T17:20:00Z')
    },
    {
        id: 'att_010',
        accountID: 'acc_88888',
        fileName: 'website_mockup.fig',
        fileUrl: 'https://storage.example.com/designs/website_mockup.fig',
        mimeType: 'application/octet-stream',
        size: '16777216',
        createdAt: new Date('2024-06-09T10:00:00Z'),
        updatedAt: new Date('2024-06-09T12:15:30Z')
    }
];

export default attachmentSamples;
