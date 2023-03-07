import {Component} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-language',
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.scss']
})
export class LanguageComponent {
    language = 'th';
    constructor(public translate: TranslateService){
      if (localStorage.getItem('language')){
        this.language = localStorage.getItem('language');
      }
    }

    switchLang(lang: string) {
        localStorage.setItem('language', lang);
        this.language = lang;
        this.translate.use(lang);
    }

}
