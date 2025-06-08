import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';

interface Country {
    name: string;
    code: string;
}
interface City {
    name: string;
    code: string;
}
@Component({
    selector: 'app-task-form',
    imports: [SharedModule, FileUploadModule],
    templateUrl: './task-form.component.html',
    styleUrl: './task-form.component.scss',
    standalone: true,
    providers: [MessageService]
})
export class TaskFormComponent {
    countries!: Country[];
    cities: City[] | undefined;
    uploadedFiles: any[] = [];

    selectedCity: City | undefined;
    selectedCountries!: Country[];

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
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
    onUpload(event: any) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }
}
