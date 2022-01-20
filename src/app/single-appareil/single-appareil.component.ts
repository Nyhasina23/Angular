import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../services/app.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent implements OnInit {
  
  name : string | any = 'Appareil';
  status : string | any = 'statut'

  constructor(private appareilService : AppareilService , 
    private route : ActivatedRoute) { }

  ngOnInit(): void {

  const id = this.route.snapshot.params['id'];
  this.name = this.appareilService.getAppareilById(+id)?.name;
  this.status = this.appareilService.getAppareilById(+id)?.status
  }

}
