import { NgModule } from '@angular/core';
import { PaymentFormComponent90 } from './payment-form90.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


// **************************************************** PAYMENT FORM 90 MODULE CLASS ***************************************************
@NgModule({
    declarations: [
        PaymentFormComponent90
    ],
    imports: [
        MatSnackBarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule
    ],
    exports     : [
        PaymentFormComponent90
    ]
})
export class PaymentFormModule90 {
}
