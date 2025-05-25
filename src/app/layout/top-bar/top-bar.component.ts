import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AppConfigurator } from '../component/app.configurator';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../service/layout.service';

@Component({
    selector: 'app-top-bar',
    imports: [SharedModule, AppConfigurator],
    templateUrl: './top-bar.component.html',
    styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
    items!: MenuItem[];

    constructor(public layoutService: LayoutService) {}

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
}
