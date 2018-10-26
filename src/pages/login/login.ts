import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ModalOptions } from 'ionic-angular';
import { IonicApp,  IonicModule } from 'ionic-angular';
import { HttpService } from '../../services/http.service';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username;
  password;
  email;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signupModal() {
    let signupData = {
      username : this.username,
      password : this.password,
      emal : this.email
    };

    let signupModal = this.modalCtrl.create( 'SignupModal', { data : signupData} );
    signupModal.present();
  }
}
