import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ParticipantCardComponent } from '../../shared/components/participant-card/participant-card.component';
import { mockParticipants } from '../../core/constants/participant-items.constant';
import { LabelMultiselectComponent } from '../../shared/components/label-multiselect/label-multiselect.component';
import { ParticipantFormComponent } from '../participant-form/participant-form.component';

interface City {
    name: string;
    code: string;
}
@Component({
    selector: 'app-participant-list',
    imports: [SharedModule, ParticipantCardComponent, LabelMultiselectComponent, ParticipantFormComponent],
    templateUrl: './participant-list.component.html',
    styleUrl: './participant-list.component.scss'
})
export class ParticipantListComponent {
    visibleParticipantFormModal: boolean = false;
    participants = [...mockParticipants];
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'A-Z', code: 'NY' },
            { name: 'Z-A', code: 'RM' }
        ];
    }
}
