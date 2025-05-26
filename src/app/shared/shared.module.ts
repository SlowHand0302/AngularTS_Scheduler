import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { Chip } from 'primeng/chip';
import { Tag } from 'primeng/tag';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
    declarations: [],
    imports: [CommonModule, FormsModule, RouterModule, RippleModule, StyleClassModule, MenuModule, ButtonModule, Chip, Tag, PasswordModule, InputTextModule, CheckboxModule, TableModule, CalendarModule],
    exports: [CommonModule, FormsModule, RouterModule, RippleModule, StyleClassModule, MenuModule, ButtonModule, Chip, Tag, PasswordModule, InputTextModule, CheckboxModule, TableModule, CalendarModule]
})
export class SharedModule {}
