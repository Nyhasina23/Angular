import { Component,Input , OnInit } from '@angular/core';
import { AppareilService } from '../services/app.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName : string | any;
  @Input() appareilStatus : string | any;
  @Input() IndexOfAppareil : number | any;
  @Input() id : number |any;
  constructor(private appareilService : AppareilService) { 

  }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus;
  }

  getColor(){
    return  this.appareilStatus === 'allumé' ? 'green' : 'red' ;
  }
  onOne(){
    this.appareilService.switchOnOne(this.IndexOfAppareil);
  }
  offOne(){
    this.appareilService.switchOffOne(this.IndexOfAppareil);
  }

}
