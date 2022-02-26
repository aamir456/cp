import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://api.punkapi.com/v2/beers";
  constructor(private http: HttpClient) {}
  public getlist() {return this.http.get(this.APIUrl);}
}
