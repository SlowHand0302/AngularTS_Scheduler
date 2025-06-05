import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
    selector: 'app-comment',
    imports: [SharedModule],
    templateUrl: './comment.component.html',
    styleUrl: './comment.component.scss'
})
export class CommentComponent {
    // TODO: Research to implement nested comments
}
