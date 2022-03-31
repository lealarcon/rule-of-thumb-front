import { Component, OnInit, NgZone, TestabilityRegistry, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Vote } from 'src/app/models/class/votes';
import { VoteService } from 'src/app/services/vote.service';
const dataVotes = require('./../../../../assets/data.json');


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {
  public people: Vote[] = []

  constructor(
    private _voteService: VoteService,
  ) {
    this._voteService.getVotes().pipe(take(1)).subscribe(data => {
      this.people = data
    })
  }

  ngOnInit() {
  }



}