import { Component } from '@angular/core';

interface MenuToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';

  isMenuCollapsed= false;
  screnWidth = 0;

  onToggleMenu(data:MenuToggle):void{
    this.screnWidth = data.screenWidth;
    this.isMenuCollapsed = data.collapsed;
  }
}
