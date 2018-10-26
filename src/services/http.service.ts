import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()

export class HttpService{
    constructor(private http: HttpClient){}

    getData(){
        return this.http.get("http://localhost/arkangelmanager/api/users/users");
    }

    postData(params){
        return this.http.post("http://localhost/arkangelmanager/api/users/users", params);
    }
}