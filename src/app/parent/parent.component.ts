import { Component, OnInit } from '@angular/core';
//import { Subject } from '@angular/';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentSubject: Subject<Event> = new Subject();

  parentObservable: Observable<Event> = this.parentSubject.asObservable();

  constructor() { }

  ngOnInit() {
  }

  // wasClicked ()  {
  //   this.parentSubject.next($event);
  // }

}
