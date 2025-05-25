import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { SharedModule } from '../../../../shared/shared.module';
import { Product, item } from '../../../../core/constants/todo-item.constant';
@Component({
    selector: 'app-today-overview-widget',
    imports: [SharedModule, TableModule],
    templateUrl: './today-overview-widget.component.html',
    styleUrl: './today-overview-widget.component.scss'
})
export class TodayOverviewWidgetComponent {
    products!: Product[];

    constructor() {}

    ngOnInit() {
        this.products = [...item];
    }
}
