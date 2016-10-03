import { Component } from '@angular/core';
import { ModalController,ActionSheetController,ViewController ,NavParams} from 'ionic-angular';


@Component({
  templateUrl: 'install.html'
})
export class InstallPage {

  constructor(public modalCtrl: ModalController,public viewCtrl:ViewController,public params:NavParams) {

  }
  dismiss(){
    this.viewCtrl.dismiss();
  }

}
