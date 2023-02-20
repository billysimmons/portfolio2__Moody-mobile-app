import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';  
import { ModalWelcomePage } from '../modal-welcome/modal-welcome.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  name: string;


  constructor(public modalCtrl: ModalController) { }

  
  // Show modal - using ModalWelcomePage component
  async showModal (){
    const modal = await this.modalCtrl.create({
      component: ModalWelcomePage
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
