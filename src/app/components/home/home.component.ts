import { TabsService } from './../../services/tabs.service';
import { App } from './../../models/app';
import { AppService } from './../../services/app.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public appsFiltered: App[];
  public appsOrginales: App[];


  constructor(
    private appsService:AppService,
    public tabsService:TabsService

  ) {
    this.appsOrginales = [];
    this.appsFiltered = [];

   }

  ngOnInit() {
  this.appsService.getApp().subscribe(apps =>{
    this.appsOrginales =apps;
    this.appsFiltered = apps;
    console.log(this.appsOrginales);
    
  })
  }

  goToApp(app:App){

this.tabsService.addTab(app)
  }

  filterApps($event){
    console.log($event);
    if(!$event.currentTarget.value){
      this.appsFiltered = this.appsOrginales
    }else{
      this.appsFiltered=this.appsOrginales.filter(a=> a.name.toLowerCase().includes($event.currentTarget.value.toLowerCase()))
    }
    

  }

}
