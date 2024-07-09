import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private baseUrl = '/api/images';

  constructor(private http: HttpClient) { }

  getImages(): Observable<any> {
    return this.http.get(`${this.baseUrl}getImage`);
  }

  uploadImage(image: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('image', image);
    return this.http.post(`${this.baseUrl}uploadImage`, formData);
  }
}
