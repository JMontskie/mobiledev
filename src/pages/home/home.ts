import { Component } from '@angular/core';
import { NavController, IonicApp,  IonicModule } from 'ionic-angular';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dataArray:any;
  username;
  password;
  constructor(public navCtrl: NavController, private http : HttpService) {
    this.doGet();
  }

  doGet(){
    this.http.getData().subscribe(
      (response) => { 
        this.dataArray = response; 
      },
      (error) => { console.log(error); }
    )
  }

  doInsert(){

    let params = {
      "username" : this.username,
      "password" : this.password
    }

    this.http.postData(params).subscribe(
      (response) => {
        console.log(response);
        this.doGet();
      },
      (error) => {
        console.log(error);
      }
    )
  }
  

}
