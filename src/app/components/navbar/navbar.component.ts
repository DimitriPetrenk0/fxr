import { Component } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


      items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'placeholder',
                items: [{
                        label: 'placeholder',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {label: 'placeholder'},
                            {label: 'placeholder'},
                        ]
                    },
                    {label: 'placeholder'},
                    {label: 'placeholder'}
                ]
            },
            {
                label: 'placeholder',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'placeholder', icon: 'pi pi-fw pi-trash'},
                    {label: 'placeholder', icon: 'pi pi-fw pi-refresh'}
                ]
            }
        ];
    }
}
