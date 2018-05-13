import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatFormFieldModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PasswordStrengthComponent } from './password-strength.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FlexLayoutModule,

        MatBadgeModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule
    ],
    entryComponents: [PasswordStrengthComponent],
    exports: [PasswordStrengthComponent],
    declarations: [PasswordStrengthComponent],
    providers: [],
    bootstrap: []
})
export class PasswordStrengthModule {
    constructor(public injector: Injector) {
        const el = createCustomElement(PasswordStrengthComponent, { injector: this.injector });
        window.customElements.define('str-pass', el);
    }

    ngDoBootstrap() { }
}
