import { Component, SimpleChanges } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { LabelMultiselectComponent } from '../../shared/components/label-multiselect/label-multiselect.component';
import { TaskPriority, TaskStatus } from '../../core/models/TaskV2.model';
import { LocationSelectComponent } from '../../shared/components/location-select/location-select.component';
import { ParticipantMultiselectComponent } from '../../shared/components/participant-multiselect/participant-multiselect.component';
interface Country {
    name: string;
    code: string;
}

@Component({
    selector: 'app-task-form',
    imports: [SharedModule, FileUploadModule, LabelMultiselectComponent, LocationSelectComponent, ParticipantMultiselectComponent],
    templateUrl: './task-form.component.html',
    styleUrl: './task-form.component.scss',
    standalone: true,
    providers: [MessageService]
})
export class TaskFormComponent {
    countries!: Country[];
    uploadedFiles: any[] = [];
    priorities: any[] = [];
    states: any[] = [];

    selectedCountries!: Country[];
    selectedStatus!: string;
    selectedPriority!: string;

    constructor(private messageService: MessageService) {
        this.countries = [
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' }
        ];

        this.states = Object.values(TaskStatus).map((state) => {
            return {
                name: state
            };
        });
        this.priorities = Object.values(TaskPriority).map((priority) => {
            return {
                name: priority
            };
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }

    onUpload(event: any) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }
}
