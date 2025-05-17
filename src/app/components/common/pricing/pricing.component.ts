import { Component, OnInit, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { PaymentFormComponent90 } from '../payment-form90/payment-form90.component';
import { PaymentFormComponent130 } from '../payment-form130/payment-form130.component';
import { PaymentFormComponent230 } from '../payment-form230/payment-form230.component';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent implements OnInit {

    readonly dialog = inject(MatDialog);

    constructor(private viewportScroller: ViewportScroller,
            ) { }

  public onClick(elementId: string): void { 
      this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit() {
  }


    // -- FUNC Show Payment Form 90
    public showPaymentForm90() {
        
        let dialogRef = this.dialog.open(PaymentFormComponent90, {
            data: {
                courseId: "1",
                courseName: "ZZZ"
            },
            height: '350px',
            width: '500px',
        });
       
    }


    // -- FUNC Show Payment Form 130
    public showPaymentForm130() {

        let dialogRef = this.dialog.open(PaymentFormComponent130, {
            data: {
                courseId: "1",
                courseName: "ZZZ"
            },
            height: '350px',
            width: '500px',
        });

    }


    // -- FUNC Show Payment Form 230
    public showPaymentForm230() {

        let dialogRef = this.dialog.open(PaymentFormComponent230, {
            data: {
                courseId: "1",
                courseName: "ZZZ"
            },
            height: '350px',
            width: '500px',
        });

    }

}
