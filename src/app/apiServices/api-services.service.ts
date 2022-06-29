import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  url = 'https://us-east-1.aws.data.mongodb-api.com/app/application-0-wouft/endpoint/zaga/information';

  constructor(private http: HttpClient) { }

  getMenuList(category:any,collection:any) {
    var payload = {
      "category": category,
      "collection": collection
    }
    return this.http.post(this.url,payload);
  }
}
