import { Component, input, signal } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { Label } from '../../../core/models/Label.model';
import { mockLabels } from '../../../core/constants/label-items.constant';
import { MultiSelectChangeEvent, MultiSelectFilterEvent } from 'primeng/multiselect';
import { LabelFormComponent } from '../label-form/label-form.component';

interface Country {
    name: string;
    code: string;
}
@Component({
    selector: 'app-label-multiselect',
    imports: [SharedModule, LabelFormComponent],
    templateUrl: './label-multiselect.component.html',
    styleUrl: './label-multiselect.component.scss'
})
export class LabelMultiselectComponent {
    chipListVisible = input<boolean>(true);
    showAddLabelModal = signal<boolean>(false);
    labels!: Label[];
    selectedLabels!: Label[];

    constructor() {
        this.labels = [...mockLabels];
    }

    onSelectChange(event: MultiSelectChangeEvent) {
        console.log(event);
        console.log(this.selectedLabels);
    }

    onRemoveSingleChip(labelId: string) {
        this.selectedLabels = [...this.selectedLabels.filter((item) => item.id !== labelId)];
    }

    onFilterInputChange(event: MultiSelectFilterEvent) {
        this.labels = [...mockLabels.filter((item) => item.name.includes(event.filter))];
    }

    onClearAllSelectedItems() {
        this.selectedLabels = [];
    }

    triggerShowModal(state: boolean) {
        console.log(state);
        this.showAddLabelModal.set(state);
    }
}
