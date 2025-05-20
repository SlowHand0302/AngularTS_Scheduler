import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Menu } from 'primeng/menu';
import { Popover } from 'primeng/popover';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { SelectButtonModule } from 'primeng/selectbutton';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@NgModule({
    declarations: [],
    imports: [
        FormsModule,
        CommonModule,
        RouterOutlet,
        RouterModule,
        ReactiveFormsModule,
        Menu,
        Popover,
        ButtonModule,
        RippleModule,
        StyleClassModule,
        SelectButtonModule,
        OverlayBadgeModule,
    ],
    exports: [
        FormsModule,
        CommonModule,
        RouterOutlet,
        RouterModule,
        ReactiveFormsModule,
        Menu,
        Popover,
        ButtonModule,
        RippleModule,
        StyleClassModule,
        SelectButtonModule,
        OverlayBadgeModule,
    ],
})
export class SharedModule {}
