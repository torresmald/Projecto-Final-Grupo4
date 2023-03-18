import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notifications } from '../../models/Notifications/notifications.model';
const API_URLS = 'https://api-projecto-final-grupo4.vercel.app/notifications'


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private request:HttpClient) { }

  public getNotification(): Observable<Notifications[]>{
    return this.request.get<Notifications[]>(`${API_URLS}`);
  }
  public postNotification(body: Notification): Observable<Notification>{
    return this.request.post<Notification>(`${API_URLS}`, body);
  }

}