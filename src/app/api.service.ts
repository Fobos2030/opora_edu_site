import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    //public apiUrl = 'http://172.20.10.4:8081/app';
    public apiUrl = 'https://www.oporaedu.ru/app';

    private emailApiUrl = 'https://api.notisend.ru/v1/email/messages';
    private emailApiKey = '762c68332fc753a5fbc1b0a7dd9a12be';

    constructor(private http: HttpClient) { }

    sendEmailMessage(data: any): Observable<any> {
        return this.http.post(this.emailApiUrl, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.emailApiKey
            }
        });
    }


    // ************************************************* CONTACTS PAGE ****************************************************
    // -- FUNC Send Contact Email
    public sendContactEmail(id: number, name: string, subject: string, email: string, phone: string, message: string) {

        // Create headers for request
        let headers = this.getHeader();

        // Create Options 
        let options = { headers: headers };

        // pack send email request
        var sendEmailRequest = new HttpParams()
            .set('id', id)
            .set('name', name)
            .set('subject', subject)
            .set('email', email)
            .set('phone', phone)
            .set('message', message);

        return this.http.post(
            this.apiUrl + '/busmaniapublicmodule/send_email_from_contact/format/json',
            sendEmailRequest,
            options)

    }


    // -- FUNC Get Header 
    private getHeader(): HttpHeaders {

        //headers = new HttpHeaders({
        //  'X-API-KEY': 'a885bbf4a400c6ab689ac9289d5a7fb29b04d75d',
        //  'iUserId': '2121',
        //  'accesstoken': '4bcf8adec24de464c6ccd9095029a3f7'
        // });

        // Create headers for request
        let headers;

        headers = new HttpHeaders({
            'X-API-KEY': '123a717b6ee898cdf0a195c0c3bd0c4d5af6f8e9',
            'managerID': '1',
            'accesstoken': '784f52899c24a10a4285d075af933223'
        });

        return headers;
    }
}
