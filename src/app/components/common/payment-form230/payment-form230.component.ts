import { ViewEncapsulation, Component, Inject, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


// ****************************************************** PAYMENT FORM 230 COMPONENT CLASS *****************************************************
@Component({
    selector: 'payment-form230',
    templateUrl: './payment-form230.component.html',
    styleUrls: ['./payment-form230.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentFormComponent230 {

    // variables
    public courseId: string;
    public courseName: string;

    // -- FUNC Constructor
    constructor(
        public dialogRef: MatDialogRef<PaymentFormComponent230>,
        @Inject(MAT_DIALOG_DATA) private data: any,
    ) {
        this.courseId = this.data.courseId;
        this.courseName = this.data.courseName;
    }


    // -- FUNC Close
    public close(): void {
        this.dialogRef.close();
    }
}
