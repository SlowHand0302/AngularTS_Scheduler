import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { SharedModule } from '../../shared/shared.module';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
    selector: 'app-menu',
    imports: [SharedModule, MenuItemComponent],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss'
})
export class MenuComponent {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    { label: 'Today Tasks', icon: 'pi pi-list', routerLink: ['today'] },
                    { label: 'Participants', icon: 'pi pi-users', routerLink: ['participants'] },
                    { label: 'Calendar', icon: 'pi pi-calendar', routerLink: ['calendar'] }
                ]
            }
        ];
    }
}
