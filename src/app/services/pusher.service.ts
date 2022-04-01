import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PusherService {

  private _pusher;
  private pusherKey = environment.PUSHER_KEY;
  constructor() {

    this._pusher = new Pusher(this.pusherKey, {
      cluster: 'us2'
    });
    
  }

  initializeChannel(chName:string): any {
    this._pusher.unsubscribe(chName);
    let channel = this._pusher.subscribe(chName);
    return channel;
  }
}
