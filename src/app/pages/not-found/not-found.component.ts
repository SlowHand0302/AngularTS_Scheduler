import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';

@Component({
    selector: 'app-not-found',
    imports: [SharedModule, AppFloatingConfigurator],
    templateUrl: './not-found.component.html',
    styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {}
