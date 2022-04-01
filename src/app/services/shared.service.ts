import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public myVotes: any


  constructor(

    private _router: Router
  ) { }



  getMyVotes() {
    let myVotes: string | null = localStorage.getItem('myVotes');
    if (myVotes) {
      return JSON.parse(String(myVotes));
    }
    localStorage.setItem('myVotes', JSON.stringify([]));
    return []

  }

  setVote(data: { voteId: string }) {
    let myVotes = this.getMyVotes()
    let pos = myVotes.findIndex((x: { voteId: any; }) => x.voteId == data.voteId)
    if (pos < 0) {
      myVotes.push({ voteId: data.voteId })
      localStorage.setItem('myVotes', JSON.stringify(myVotes));
    }


  }


  removeVote(data: { voteId: string }) {
    let myVotes = this.getMyVotes()
      let pos = myVotes.findIndex((x: { voteId: any; }) => x.voteId == data.voteId)
      if (pos >= 0) {
        myVotes.splice(pos, 1)
        localStorage.setItem('myVotes', JSON.stringify(myVotes));
      }
 
  }




}
