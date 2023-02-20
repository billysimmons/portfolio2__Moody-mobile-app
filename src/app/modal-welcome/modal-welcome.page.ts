import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController} from '@ionic/angular';  

@Component({
  selector: 'app-modal-welcome',
  templateUrl: './modal-welcome.page.html',
  styleUrls: ['./modal-welcome.page.scss'],
})
export class ModalWelcomePage implements OnInit {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController) { }

  ngOnInit() {
  }
  
  // Dismiss modal
  dismiss() {  
    this.modalCtrl.dismiss();  
  }  
}
