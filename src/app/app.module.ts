import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import {EmploymentPage} from '../pages/employment/employment'
import { TabsPage } from '../pages/tabs/tabs';
import { LearningEnglish } from '../pages/learning-english/learning-english';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EmploymentPage,
    LearningEnglish
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EmploymentPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LearningEnglish
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
