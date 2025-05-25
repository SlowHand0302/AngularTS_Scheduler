import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';

@Component({
    selector: 'app-login',
    imports: [SharedModule, AppFloatingConfigurator],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    email: string = '';

    password: string = '';

    checked: boolean = false;
}
