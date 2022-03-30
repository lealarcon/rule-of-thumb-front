import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-vote',
  templateUrl: './card-vote.component.html',
  styleUrls: ['./card-vote.component.sass']
})
export class CardVoteComponent implements OnInit {
  @Input() data: any;

  public thumbs={
    up:0,
    down:0
  }
  constructor() { }
  /*
   {
            "name": "Kanye West",
            "description": "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
            "category": "entertainment",
            "picture": "kanye.png",
            "lastUpdated": "2020-03-10T23:08:57.892Z",
            "votes": {
                "positive": 23,
                "negative": 36
            }
        },
         */
  ngOnInit(): void {

    let totalVotes= this.data.votes.positive + this.data.votes.negative
    this.thumbs.up = Number((this.data.votes.positive * 100 / totalVotes).toFixed(0))
    this.thumbs.down = Number((this.data.votes.negative * 100 / totalVotes).toFixed(0))
  }

}
