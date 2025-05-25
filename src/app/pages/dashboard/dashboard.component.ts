import { Component } from '@angular/core';
import { StatsWidgetComponent } from './components/stats-widget/stats-widget.component';
import { ProductivityChartWidgetComponent } from './components/productivity-chart-widget/productivity-chart-widget.component';
import { TodayOverviewWidgetComponent } from './components/today-overview-widget/today-overview-widget.component';

@Component({
    selector: 'app-dashboard',
    imports: [StatsWidgetComponent, ProductivityChartWidgetComponent, TodayOverviewWidgetComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {}
