import { NgModule } from '@angular/core';
import { PaymentFormComponent130 } from './payment-form130.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


// **************************************************** PAYMENT FORM 130 MODULE CLASS ***************************************************
@NgModule({
    declarations: [
        PaymentFormComponent130
    ],
    imports: [
        MatSnackBarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule
    ],
    exports     : [
        PaymentFormComponent130
    ]
})
export class PaymentFormModule130 {
}
