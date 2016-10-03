import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UserPage } from '../pages/user/user';
import { InstallPage } from '../pages/install/install';

import { TranslatePage } from '../pages/translate/translate';
@NgModule({
  declarations: [
    MyApp,
    TranslatePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TranslatePage
  ],
  providers: []
})
export class AppModule {}
