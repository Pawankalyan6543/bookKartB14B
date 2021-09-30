import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Option } from "../option.model";
import { ThemeService } from '../services/themeservice.service';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() options: Array<Option> = [];
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private themeService: ThemeService) {
    
   }

  changeTheme(themeToSet: any) {
    this.themeChange.emit(themeToSet);
  }

  

}