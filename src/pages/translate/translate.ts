import { Component } from '@angular/core';
import { ModalController,ActionSheetController,ViewController ,NavParams} from 'ionic-angular';


@Component({
  templateUrl: 'translate.html'
})
export class TranslatePage {
  constructor(public modalCtrl: ModalController,public viewCtrl:ViewController,public params:NavParams) {

  }
}
