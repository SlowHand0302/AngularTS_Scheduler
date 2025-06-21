import { Component, computed, EventEmitter, input, Output } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { mockParticipants } from '../../../core/constants/participant-items.constant';
import { Participant } from '../../../core/models/Participant.model';

@Component({
    selector: 'app-participant-card',
    imports: [SharedModule],
    templateUrl: './participant-card.component.html',
    styleUrl: './participant-card.component.scss'
})
export class ParticipantCardComponent {
    participant = input.required<Participant>();
    hasLabels = computed(() => {
        return (this.participant().labels ?? []).length > 0;
    });
    @Output() triggerCloseCard = new EventEmitter<boolean>();
}
