import { Component, input, output } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FileSelectEvent, UploadEvent } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-participant-form',
    imports: [SharedModule],
    templateUrl: './participant-form.component.html',
    styleUrl: './participant-form.component.scss',
    providers: [MessageService]
})
export class ParticipantFormComponent {
    visible = input.required<boolean>();
    triggerCloseModal = output<boolean>();
    selectedFile: File | null = null;
    previewSelectedFile: string | null = null;

    constructor() {}

    onBasicUploadAuto(event: FileSelectEvent) {
        console.log(event);
        this.selectedFile = event.currentFiles[0];
        this.previewSelectedFile = URL.createObjectURL(event.currentFiles[0]);
    }
}
