import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelMultiselectComponent } from './label-multiselect.component';

describe('LabelMultiselectComponent', () => {
  let component: LabelMultiselectComponent;
  let fixture: ComponentFixture<LabelMultiselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelMultiselectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
