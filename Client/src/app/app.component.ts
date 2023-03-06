import {Component} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        public translate: TranslateService
    ) {
      translate.addLangs(['en', 'th']);
      if (localStorage.getItem('language')){
        const language = localStorage.getItem('language');
        translate.setDefaultLang(language);
      }
      else{
        translate.setDefaultLang('th');
      }


    }
}
