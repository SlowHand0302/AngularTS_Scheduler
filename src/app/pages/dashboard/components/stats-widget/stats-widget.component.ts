import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { StatusWidgetItem } from '../../../../core/types/status-widget-item.type';
import { statusWidgetItem } from '../../../../core/constants/status-widget-item.constant';

@Component({
    selector: 'app-stats-widget',
    imports: [SharedModule],
    templateUrl: './stats-widget.component.html',
    styleUrl: './stats-widget.component.scss'
})
export class StatsWidgetComponent {
    model: StatusWidgetItem[] = [];
    ngOnInit() {
        this.model = [...statusWidgetItem];
    }
}
