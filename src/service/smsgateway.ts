import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class SmsGateway
{
    constructor(private http: HttpClient){}
    
    baseUrl = "http://10.32.200.172:5050"

    httpHeaders = {
        headers: new HttpHeaders(
            {'Content-Type': 'application/json'}
        )
    };

    sendMessage(name: String, message: String)
    {
        const jsonObj = {
            name: name,
            message: message
        }
        const url = `${this.baseUrl}/message/send`
        return this.http.post(url, jsonObj, this.httpHeaders);
    }

    retrieveMessage()
    {
        const url = `${this.baseUrl}/message/retrieve`
        return this.http.get(url, this.httpHeaders);
    }
}