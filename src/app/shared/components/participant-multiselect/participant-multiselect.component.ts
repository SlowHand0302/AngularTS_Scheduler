import { Component, signal } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { Participant } from '../../../core/models/Participant.model';
import { mockParticipants } from '../../../core/constants/participant-items.constant';
import { MultiSelectChangeEvent, MultiSelectFilterEvent } from 'primeng/multiselect';
import { ParticipantCardComponent } from '../participant-card/participant-card.component';

@Component({
    selector: 'app-participant-multiselect',
    imports: [SharedModule, ParticipantCardComponent],
    templateUrl: './participant-multiselect.component.html',
    styleUrl: './participant-multiselect.component.scss'
})
export class ParticipantMultiselectComponent {
    showAddLabelModal = signal<boolean>(false);
    showParticipantModalDetail = signal<boolean>(false);

    participants!: Participant[];
    selectedParticipants!: Participant[];

    constructor() {
        this.participants = [...mockParticipants];
    }

    onSelectChange(event: MultiSelectChangeEvent) {
        console.log(event);
        console.log(this.selectedParticipants);
    }

    onRemoveSingleChip(labelId: string) {
        this.selectedParticipants = [...this.selectedParticipants.filter((item) => item.id !== labelId)];
    }

    onFilterInputChange(event: MultiSelectFilterEvent) {
        this.participants = [...mockParticipants.filter((item) => item.name.includes(event.filter))];
    }

    onClearAllSelectedItems() {
        this.selectedParticipants = [];
    }

    triggerShowModal(state: boolean) {
        console.log(state);
        this.showAddLabelModal.set(state);
    }

    triggerShowParticipantDetails(event: MouseEvent, participantId: string) {
        event.stopPropagation();
        this.showParticipantModalDetail.set(true);
        console.log(participantId);
    }

    handleCloseParticipantDetails(event: boolean) {
        this.showParticipantModalDetail.set(event);
    }
}
