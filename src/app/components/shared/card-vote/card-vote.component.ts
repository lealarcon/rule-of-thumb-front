import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Vote } from 'src/app/models/class/votes';
import { PusherService } from 'src/app/services/pusher.service';
import { SharedService } from 'src/app/services/shared.service';
import { VoteService } from 'src/app/services/vote.service';
var moment = require('moment');
moment().format();
@Component({
  selector: 'app-card-vote',
  templateUrl: './card-vote.component.html',
  styleUrls: ['./card-vote.component.sass']
})
export class CardVoteComponent implements OnInit {
  @Input() data: Vote = new Vote();

  public thumbs = {
    up: 0,
    down: 0,
    selectedUp: false,
    selectedDown: false
  }
  public alreadyVoted = false;
  public totalVotes = 0;
  public timeAgo = moment();
  constructor(
    private _voteService: VoteService,
    private _pusherService: PusherService,
    private _sharedSevice: SharedService
  ) { }

  ngOnInit(): void {


    this.calculateData()
    this.checkVote()
    this.subscribePusherChanel()

  }

  calculateData() {
    this.totalVotes = this.data.votes.positive + this.data.votes.negative
    this.thumbs.up = Number((this.data.votes.positive * 100 / this.totalVotes).toFixed(1))
    this.thumbs.down = Number((this.data.votes.negative * 100 / this.totalVotes).toFixed(1))
    var a = moment();
    var b = moment(this.data.lastUpdated);
    this.timeAgo = a.from(b, true)
  }
  subscribePusherChanel(): void {
    let chanelName = `vote-${this.data._id}`;
    let channelSubscribed = this._pusherService.initializeChannel(chanelName);
    channelSubscribed.unbind('new-vote');
    channelSubscribed.bind('new-vote', (msg: any) => {
      if (msg.data == "positive")
        this.data.votes.positive += 1
      if (msg.data == "negative")
        this.data.votes.negative += 1
      this.calculateData()
    });
  }

  checkVote() {
    let myVotes = this._sharedSevice.getMyVotes()
    if (myVotes.length > 0) {
      let pos = myVotes.findIndex((x: { voteId: string; }) => x.voteId == this.data._id)
      if (pos >= 0)
        this.alreadyVoted = true
    }
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
  sendVote(voteId: string): void {
    if (this.thumbs.selectedUp == true || this.thumbs.selectedDown == true) {
      let data = {
        voteId: voteId,
        typeVote: ""
      }
      if (this.thumbs.selectedUp == true) data.typeVote = "positive"
      if (this.thumbs.selectedDown == true) data.typeVote = "negative"
      this._voteService.postVote(data).pipe(take(1)).subscribe(data => {
        this.alreadyVoted = true
        this._sharedSevice.setVote({ voteId: this.data._id })

      })
    }
  }

  voteAgain() {
    this.alreadyVoted = false
    this.thumbs.selectedUp = false
    this.thumbs.selectedDown = false
    this._sharedSevice.removeVote({ voteId: this.data._id })

  }
}
