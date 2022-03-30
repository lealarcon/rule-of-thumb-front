import { Component, OnInit, NgZone, TestabilityRegistry } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
const dataVotes = require('./../../../../assets/data.json');


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {
  public people: any[] = []

  

  constructor(
    private _router: Router,
  ) {
    this.people=[...dataVotes.data]
  }





  ngOnInit() {


    
  }



}