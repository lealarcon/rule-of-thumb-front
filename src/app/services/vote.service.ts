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


  // Funciones Propias
  getVotes(): Observable<Vote[]> {
    let url: string = `/votes`;
    return this._httpService.httpGet(url);
  }
  

}
