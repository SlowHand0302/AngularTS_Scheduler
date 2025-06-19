import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantMultiselectComponent } from './participant-multiselect.component';

describe('ParticipantMultiselectComponent', () => {
  let component: ParticipantMultiselectComponent;
  let fixture: ComponentFixture<ParticipantMultiselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipantMultiselectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipantMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
