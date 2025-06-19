import { Component, EventEmitter, Output, output } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { mockParticipants } from '../../../core/constants/participant-items.constant';

@Component({
    selector: 'app-participant-card',
    imports: [SharedModule],
    templateUrl: './participant-card.component.html',
    styleUrl: './participant-card.component.scss'
})
export class ParticipantCardComponent {
    participant = mockParticipants[0];
    @Output() triggerCloseCard = new EventEmitter<boolean>();
    
}
