import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs-compat';
import { AppareilService } from '../services/app.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;

  lastUptade = new Date();

  appareils : [] | any ;
  
  constructor(private appareilService : AppareilService){

    setTimeout(
      () =>{
        this.isAuth = true;
      } , 4000
    );
    
  }

  appareilSubscription : Subscription | any;

  ngOnInit(){
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer(){
    this.appareilService.switchOnAll();
  }
  onEteindre(){
    this.appareilService.switchOffAll();
  }

  

}
