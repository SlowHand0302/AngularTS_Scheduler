import { MenuItem } from 'primeng/api';

export const navItem: MenuItem[] = [
    {
        label: 'General',
        routerLink: ['/'],
        items: [
            { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
            { label: 'Today To-do', icon: 'pi pi-fw pi-home', routerLink: ['#'] },
            { label: 'Calendar', icon: 'pi pi-fw pi-home', routerLink: ['#'] },
            { label: 'Trash', icon: 'pi pi-fw pi-home', routerLink: ['#'] },
        ],
    },
    {
        label: 'Plans',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: ['/pages'],
        items: [
            {
                label: 'Search',
                icon: 'pi pi-fw pi-exclamation-circle',
                routerLink: ['/pages/notfound'],
            },
            {
                label: 'New Plan',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['/pages/empty'],
            },
            {
                label: 'Plan 1',
                icon: 'pi pi-fw pi-globe',
                routerLink: ['/landing'],
            },
            {
                label: 'Plan 2',
                icon: 'pi pi-fw pi-pencil',
                routerLink: ['/pages/crud'],
            },
        ],
    },
    {
        label: 'Habits',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: ['/pages'],
        items: [
            {
                label: 'Search',
                icon: 'pi pi-fw pi-exclamation-circle',
                routerLink: ['/pages/notfound'],
            },
            {
                label: 'New Habit',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['/pages/empty'],
            },
            {
                label: 'Habit 1',
                icon: 'pi pi-fw pi-globe',
                routerLink: ['/landing'],
            },
            {
                label: 'Habit 2',
                icon: 'pi pi-fw pi-pencil',
                routerLink: ['/pages/crud'],
            },
        ],
    },
];
