import { Component } from '@angular/core';
import { NavController,ActionSheetController,ModalController } from 'ionic-angular';
import { InstallPage } from '../install/install';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {

  constructor(public navCtrl: NavController,public actionsheetCtrl:ActionSheetController,public modalCtrl: ModalController) {

  }
  openMenu(){
    let self=this;
    let actionSheet=this.actionsheetCtrl.create({
      title:"菜单",
      buttons: [
        {
          text:'查看',
          handler:()=>{
            self.showInstall();
          }
        },
        {
          text:'编辑',
          handler:()=>{
            console.log("点击编辑");
          }
        },
        {
          text:'删除',
          role: 'destructive',
          handler:()=>{
          console.log("点击删除");
          }
        },

        {
          text:'取消',
          role:'cancel',
          handler:()=>{
            console.log("点击取消");
          }
        }
      ]
    });
    actionSheet.present();
  }
  showInstall(){
    let install=this.modalCtrl.create(InstallPage);
    install.present();
  }
}
