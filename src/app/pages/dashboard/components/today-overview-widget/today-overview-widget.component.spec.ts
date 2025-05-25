import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayOverviewWidgetComponent } from './today-overview-widget.component';

describe('TodayOverviewWidgetComponent', () => {
  let component: TodayOverviewWidgetComponent;
  let fixture: ComponentFixture<TodayOverviewWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayOverviewWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayOverviewWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
