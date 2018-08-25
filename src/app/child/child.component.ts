import { Component, OnInit, Input } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Component({
  selector: 'childHere',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  counter: number=0;

  @Input()
  nameObservable: Observable<Event>;

  constructor() { }

  ngOnInit() {
    
    // subscribe to observable
    this.nameObservable.subscribe ( (e:Event) => { this.counter++; });

  }

}
