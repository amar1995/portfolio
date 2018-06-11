import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable() 
export class AppService {
    constructor(private http: HttpClient) {

    }
    postFormContact(value) {
        // console.log(value);
        return this.http.post('contact',value);
    }
}