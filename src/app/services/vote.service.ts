import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vote } from '../models/class/votes';


// Services
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(
    private _httpService: HttpService,
  ) { }


  getVotes(): Observable<Vote[]> {
    let url: string = `/votes`;
    return this._httpService.httpGet(url);
  }

  postVote(data:{voteId:string,typeVote:string}): Observable<any> {
    let url: string = `/votes/${data.voteId}`;
    return this._httpService.httpPost(url,JSON.stringify(data));
  }
  
  

}
