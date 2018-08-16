import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events_url = 'http://localhost:3000/api/events';
  private special_url = 'http://localhost:3000/api/special';
  constructor(private http: HttpClient) {}
  getEvents() {
    return this.http.get(this.events_url);
  }
  getSpecialEvents() {
    return this.http.get(this.special_url);
  }
}
