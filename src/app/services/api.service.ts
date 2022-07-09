import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getJSONData(fileName: string){
    return this.httpClient.get(`assets/json/${fileName}.json`);
  }
}
