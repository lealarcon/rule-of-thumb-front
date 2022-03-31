import { Component, Input, OnInit } from '@angular/core';
import { Vote } from 'src/app/models/class/votes';
var moment = require('moment');
moment().format();
@Component({
  selector: 'app-card-vote',
  templateUrl: './card-vote.component.html',
  styleUrls: ['./card-vote.component.sass']
})
export class CardVoteComponent implements OnInit {
  @Input() data: Vote;

  public thumbs = {
    up: 0,
    down: 0,
    selectedUp: false,
    selectedDown: false
  }

  public totalVotes = 0;
  public timeAgo = moment();
  constructor() { }
  
  ngOnInit(): void {

    this.totalVotes = this.data.votes.positive + this.data.votes.negative
    this.thumbs.up = Number((this.data.votes.positive * 100 / this.totalVotes).toFixed(0))
    this.thumbs.down = Number((this.data.votes.negative * 100 / this.totalVotes).toFixed(0))

    var a = moment();
    var b = moment(this.data.lastUpdated);
    this.timeAgo = a.from(b, true)

  }

  thumbSelected(type: string): void {
    if (type == 'up') {
      if (this.thumbs.selectedUp == true) { this.thumbs.selectedUp = false; this.thumbs.selectedDown = false }
      else { this.thumbs.selectedUp = true; this.thumbs.selectedDown = false }
    }
    if (type == 'down') {
      if (this.thumbs.selectedDown == true) { this.thumbs.selectedUp = false; this.thumbs.selectedDown = false }
      else { this.thumbs.selectedDown = true; this.thumbs.selectedUp = false }
    }

  }
}
