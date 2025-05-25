import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivityChartWidgetComponent } from './productivity-chart-widget.component';

describe('ProductivityChartWidgetComponent', () => {
  let component: ProductivityChartWidgetComponent;
  let fixture: ComponentFixture<ProductivityChartWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductivityChartWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductivityChartWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
