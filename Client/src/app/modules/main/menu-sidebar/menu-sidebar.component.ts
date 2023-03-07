import {AppState} from '@/store/state';
import {UiState} from '@/store/ui/state';
import {Component, HostBinding, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppService} from '@services/app.service';
import {Observable} from 'rxjs';

const BASE_CLASSES = 'main-sidebar elevation-4';
@Component({
    selector: 'app-menu-sidebar',
    templateUrl: './menu-sidebar.component.html',
    styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {
    @HostBinding('class') classes: string = BASE_CLASSES;
    public ui: Observable<UiState>;
    public user;
    public menu = MENU;

    constructor(
        public appService: AppService,
        private store: Store<AppState>
    ) {}

    ngOnInit() {
        this.user = this.appService.user;
    }
}

export const MENU = [
    {
        name: 'Home',
        iconClasses: 'fa fa-home',
        path: ['/']
    },
    {
        name: 'Driver',
        iconClasses: 'fas fa-id-card',
        children: [
            {
                name: 'Qualification And Training Record',
                iconClasses: '',
                path: ['/qualification-and-training-record']
            },
            {
                name: 'Qualification And Training Record List',
                iconClasses: '',
                path: ['/qualification-and-training-record-list']
            },
            {
                name: 'Mapping Driver',
                iconClasses: '',
                path: ['/mapping-driver']
            },
            {
                name: 'Qualification And Training Request ',
                iconClasses: '',
                path: ['/qualification-and-training-request']
            }
        ]
    },
    {
        name: 'Truck/Vehicle',
        iconClasses: 'fas fa-truck',
        path: ['/blank']
    },
    {
        name: 'LCC/Mileage',
        iconClasses: 'fa fa-file',
        path: ['/blank']
    },
    {
        name: 'Dashboard',
        iconClasses: 'fa fa-rss',
        path: ['/blank']
    },
    {
        name: 'Master',
        iconClasses: 'fa fa-cog',
        path: ['/blank']
    },
    {
        name: 'User',
        iconClasses: 'fa fa-user',
        path: ['/blank']
    }
  ];

