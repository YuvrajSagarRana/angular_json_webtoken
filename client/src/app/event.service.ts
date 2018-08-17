import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events_url = '/api/events';
  private special_url = '/api/special';
  constructor(private http: HttpClient) {}
  getEvents() {
    return this.http.get(this.events_url);
  }
  getSpecialEvents() {
    return this.http.get(this.special_url);
  }
}
