import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Menu } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { MegaMenu } from 'primeng/megamenu';
import { ChipModule } from 'primeng/chip';
@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ButtonModule, Menu, ToastModule, MegaMenu, ChipModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'todos';
    sidebarItems: MenuItem[] | undefined;
    items: MegaMenuItem[] | undefined;

    ngOnInit() {
        this.sidebarItems = [
            {
                label: 'Documents',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus',
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-search',
                    },
                ],
            },
            {
                label: 'Profile',
                items: [
                    {
                        label: 'Settings',
                        icon: 'pi pi-cog',
                    },
                    {
                        label: 'Logout',
                        icon: 'pi pi-sign-out',
                    },
                ],
            },
        ];
        this.items = [
            {
                label: 'Furniture',
                icon: 'pi pi-box',
                items: [
                    [
                        {
                            label: 'Living Room',
                            items: [
                                { label: 'Accessories' },
                                { label: 'Armchair' },
                                { label: 'Coffee Table' },
                                { label: 'Couch' },
                                { label: 'TV Stand' },
                            ],
                        },
                    ],
                    [
                        {
                            label: 'Kitchen',
                            items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }],
                        },
                        {
                            label: 'Bathroom',
                            items: [{ label: 'Accessories' }],
                        },
                    ],
                    [
                        {
                            label: 'Bedroom',
                            items: [
                                { label: 'Bed' },
                                { label: 'Chaise lounge' },
                                { label: 'Cupboard' },
                                { label: 'Dresser' },
                                { label: 'Wardrobe' },
                            ],
                        },
                    ],
                    [
                        {
                            label: 'Office',
                            items: [
                                { label: 'Bookcase' },
                                { label: 'Cabinet' },
                                { label: 'Chair' },
                                { label: 'Desk' },
                                { label: 'Executive Chair' },
                            ],
                        },
                    ],
                ],
            },
            {
                label: 'Electronics',
                icon: 'pi pi-mobile',
                items: [
                    [
                        {
                            label: 'Computer',
                            items: [
                                { label: 'Monitor' },
                                { label: 'Mouse' },
                                { label: 'Notebook' },
                                { label: 'Keyboard' },
                                { label: 'Printer' },
                                { label: 'Storage' },
                            ],
                        },
                    ],
                    [
                        {
                            label: 'Home Theater',
                            items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }],
                        },
                    ],
                    [
                        {
                            label: 'Gaming',
                            items: [
                                { label: 'Accessories' },
                                { label: 'Console' },
                                { label: 'PC' },
                                { label: 'Video Games' },
                            ],
                        },
                    ],
                    [
                        {
                            label: 'Appliances',
                            items: [
                                { label: 'Coffee Machine' },
                                { label: 'Fridge' },
                                { label: 'Oven' },
                                { label: 'Vaccum Cleaner' },
                                { label: 'Washing Machine' },
                            ],
                        },
                    ],
                ],
            },
            {
                label: 'Sports',
                icon: 'pi pi-clock',
                items: [
                    [
                        {
                            label: 'Football',
                            items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }],
                        },
                    ],
                    [
                        {
                            label: 'Running',
                            items: [
                                { label: 'Accessories' },
                                { label: 'Shoes' },
                                { label: 'T-Shirts' },
                                { label: 'Shorts' },
                            ],
                        },
                    ],
                    [
                        {
                            label: 'Swimming',
                            items: [
                                { label: 'Kickboard' },
                                { label: 'Nose Clip' },
                                { label: 'Swimsuits' },
                                { label: 'Paddles' },
                            ],
                        },
                    ],
                    [
                        {
                            label: 'Tennis',
                            items: [
                                { label: 'Balls' },
                                { label: 'Rackets' },
                                { label: 'Shoes' },
                                { label: 'Training' },
                            ],
                        },
                    ],
                ],
            },
        ];
    }
}
