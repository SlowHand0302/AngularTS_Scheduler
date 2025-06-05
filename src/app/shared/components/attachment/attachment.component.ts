import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { FileCardComponent } from '../file-card/file-card.component';

@Component({
    selector: 'app-attachment',
    imports: [SharedModule, FileCardComponent],
    templateUrl: './attachment.component.html',
    styleUrl: './attachment.component.scss'
})
export class AttachmentComponent {}
