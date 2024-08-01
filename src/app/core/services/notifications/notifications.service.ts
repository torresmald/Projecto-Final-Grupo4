import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notifications } from '../../models/Notifications/notifications.model';
const API_URLS = 'https://api-projecto-final-grupo4.vercel.app/notifications';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private request: HttpClient) {}

  public getNotification(): Observable<Notifications[]> {
    return this.request.get<Notifications[]>(`${API_URLS}`);
  }
  public postNotification(body: FormData): Observable<Notification> {
    return this.request.post<Notification>(`${API_URLS}`, body);
  }
  public editNotification(
    id: string,
    body: Notifications
  ): Observable<Notification> {
    return this.request.put<Notification>(`${API_URLS}/${id}`, body);
  }
  public deleteNotification(id: string): Observable<Notification> {
    return this.request.delete<Notification>(`${API_URLS}/${id}`);
  }
}
/* Este es un servicio  con una dependencia de HttpClient en su constructor y cuatro métodos públicos para realizar operaciones CRUD con la API de notificaciones utilizando los métodos HTTP GET, POST, PUT y DELETE. */