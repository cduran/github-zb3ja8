import { Component, HostBinding, OnInit } from '@angular/core';
import { NavigationItem, HeaderItem } from 'carbon-components-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // adds padding to the top of the document, so the content is below the header
  @HostBinding('class.bx--header') headerClass = true;

	hasHamburger = false;
  sideMenuExpandend = false;
  headerItems: NavigationItem[];

  ngOnInit() {
    this.headerItems = [
      {
        type: "item",
        content: "Catalog",
        route: ["catalog"],
      },
      {
        type: "item",
        content: "Docs",
        isCurrentPage: true,
        route: ["docs"]
      },
      {
        type: "item",
        content: "Support",
        route: ["support"]
      },
      {
        type: "menu",
        title: "Manage",
        menuItems: [
          {            
            content: "Link 1",
            
            route: ["link1"]
          },
          {            
            content: "Link 2"
          },
          {            
            content: "Link 3"
          }
        ]
      }
    ]
  }

  onMenuItemClick(event) {
    console.log(event)
  }

}
