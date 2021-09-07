import { TabsService } from './../../services/tabs.service';
import { App } from './../../models/app';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

@Input() app: App;

  constructor(
    public tabsService:TabsService
  ) { }

  ngOnInit() {
  }

  selectApp(){
    this.tabsService.appSelected = this.app;
  }

  closeTab($event){
    $event.stopPropagation();
    this.tabsService.removeTab(this.app)
  }

}
