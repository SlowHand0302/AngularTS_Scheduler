import { Component, computed, input } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
    selector: 'app-file-card',
    imports: [SharedModule],
    templateUrl: './file-card.component.html',
    styleUrl: './file-card.component.scss'
})
export class FileCardComponent {
    filename = input.required<string>();
    size = input.required<string>();
    icon = computed(() => {
        if (this.filename().includes('pdf')) return 'pdf';
        if (['xlsx', 'xlsm'].some((item) => this.filename().includes(item))) return 'excel';
        if (['docx', 'doc', 'docm', 'dotx', 'rtf'].some((item) => this.filename().includes(item))) return 'word';
        if (['json'].some((item) => this.filename().includes(item))) return 'code';
        return 'file';
    });
}
