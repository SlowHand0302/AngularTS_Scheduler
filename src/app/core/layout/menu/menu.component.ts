import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { navItem } from '../../constants/nav-item.constant';
import { SharedModule } from '../../../shared/shared.module';
import { AppMenuitem } from '../menu-item/menu-item.component';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [AppMenuitem, SharedModule],
    templateUrl: './menu.component.html',
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = navItem;
    }
}
