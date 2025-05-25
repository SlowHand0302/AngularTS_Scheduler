import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';

@Component({
    selector: 'app-error',
    imports: [SharedModule, AppFloatingConfigurator],
    templateUrl: './error.component.html',
    styleUrl: './error.component.scss'
})
export class ErrorComponent {}
