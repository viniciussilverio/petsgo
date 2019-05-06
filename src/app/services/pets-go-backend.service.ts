import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetsGoBackendService {
  url = environment.backend;
  
  constructor(private http: HttpClient) { }

  getPetsList() {
    return this.http.get(`${this.url}/findPets`); 
  }
}
