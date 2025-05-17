import { NgModule } from '@angular/core';
import { PaymentFormComponent230 } from './payment-form230.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


// **************************************************** PAYMENT FORM 230 MODULE CLASS ***************************************************
@NgModule({
    declarations: [
        PaymentFormComponent230
    ],
    imports: [
        MatSnackBarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule
    ],
    exports     : [
        PaymentFormComponent230
    ]
})
export class PaymentFormModule230
{
}
