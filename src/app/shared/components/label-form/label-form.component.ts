import { Component, input, output } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { ColorPickerChangeEvent } from 'primeng/colorpicker';

@Component({
    selector: 'app-label-form',
    imports: [SharedModule],
    templateUrl: './label-form.component.html',
    styleUrl: './label-form.component.scss'
})
export class LabelFormComponent {
    colorValue: string = '#1976D2';
    visible = input.required<boolean>();
    triggerCloseModal = output<boolean>();


    handleOnChanges(event: ColorPickerChangeEvent) {
        console.log(event);
    }
}
