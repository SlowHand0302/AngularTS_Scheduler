import { Component } from '@angular/core';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';
import { SharedModule } from '../../shared/shared.module';

@Component({
    selector: 'app-access-deny',
    imports: [AppFloatingConfigurator, SharedModule],
    templateUrl: './access-deny.component.html',
    styleUrl: './access-deny.component.scss'
})
export class AccessDenyComponent {}
