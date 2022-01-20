import { Component , OnInit , OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs-compat';
import 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy {
 
secondes : number | any;
counterSubscription : Subscription | any ;

constructor(){}

ngOnInit(){
  const counter = Observable.interval(1000);
  this.counterSubscription = counter.subscribe(
    (value:number) => {
      this.secondes = value;
    }
  );
}

ngOnDestroy() {
    this.counterSubscription.unsubscribe();  
}

}
