import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ApiService } from '../../../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    private senderEmail = 'app.askme2@gmail.com';
    private receiverEmail = 'kon90@mail.ru';
    public isSending: boolean = false;

    constructor(
        private viewportScroller: ViewportScroller,
        private apiService: ApiService,
        private snackBar: MatSnackBar
    ) { }

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit() {
    }

    submit(form) {

        this.isSending = true;

        var formValues = form.value;
        var name = formValues.name;
        var email = formValues.email;
        var number = formValues.number;
        var subject = formValues.subject;
        var message = formValues.message;

        var id = Math.floor(Math.random() * (1000000000));

        this.apiService.sendContactEmail(id, name, subject, email, number, message).subscribe(data => {
            // check status and if it is ok then ...
            if (data['status'] == 1) {
                console.log("TRUE ON SEND EMAIL FROM CONTACT" + JSON.stringify(data));
                this.snackBar.open('Сообщение отправлено!', 'Закрыть', {
                    duration: 3000,
                    horizontalPosition: 'center',
                    verticalPosition: 'bottom'
                });
                form.reset({
                    id: '',
                    name: '',
                    email: '',
                    number: '',
                    subject: '',
                    message: ''
                });
                this.isSending = false; 
            }
            else {
                console.log("FALSE ON SEND EMAIL FROM CONTACT" + JSON.stringify(data));
                this.snackBar.open('Произошла ошибка! Пожалуйста попробуйте позже.', 'Закрыть', {
                    duration: 3000,
                    horizontalPosition: 'center',
                    verticalPosition: 'bottom'
                });
                this.isSending = false; 
            }
        });
    }

}
