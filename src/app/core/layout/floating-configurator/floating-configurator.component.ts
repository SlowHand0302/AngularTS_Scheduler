import { Component, computed, inject } from '@angular/core';

import { LayoutService } from '../layout.service';
import { SharedModule } from '../../../shared/shared.module';
import { AppConfigurator } from '../configurator/configurator.component';

@Component({
    selector: 'app-floating-configurator',
    imports: [SharedModule, AppConfigurator],
    templateUrl: './floating-configurator.component.html',
})
export class AppFloatingConfigurator {
    LayoutService = inject(LayoutService);

    isDarkTheme = computed(() => this.LayoutService.layoutConfig().darkTheme);

    toggleDarkMode() {
        this.LayoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
}
