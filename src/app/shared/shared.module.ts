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

@NgModule({
    declarations: [],
    imports: [CommonModule, FormsModule, RouterModule, RippleModule, StyleClassModule, MenuModule, ButtonModule, Chip, Tag, PasswordModule, InputTextModule, CheckboxModule],
    exports: [CommonModule, FormsModule, RouterModule, RippleModule, StyleClassModule, MenuModule, ButtonModule, Chip, Tag, PasswordModule, InputTextModule, CheckboxModule]
})
export class SharedModule {}
