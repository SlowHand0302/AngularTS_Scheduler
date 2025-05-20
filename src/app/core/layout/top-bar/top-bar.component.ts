import { MenuItem } from 'primeng/api';
import { Component } from '@angular/core';

import { LayoutService } from '../layout.service';
import { SharedModule } from '../../../shared/shared.module';
import { AppConfigurator } from '../configurator/configurator.component';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [SharedModule, AppConfigurator],
    templateUrl: './top-bar.component.html',
})
export class AppTopbar {
    items!: MenuItem[];

    constructor(public layoutService: LayoutService) {}
    ngOnInit() {
        this.items = [
            {
                label: 'Profile',
                icon: 'pi pi-refresh',
            },
            {
                label: 'Settings',
                icon: 'pi pi-refresh',
            },
            {
                label: 'Logout',
                icon: 'pi pi-refresh',
            },
        ];
    }
    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
}
