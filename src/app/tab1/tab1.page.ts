import { Component } from '@angular/core';
import { PetsGoBackendService } from '../services/pets-go-backend.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

//https://medium.freecodecamp.org/how-to-build-your-first-ionic-4-app-with-api-calls-f6ea747dc17a

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  results: Observable<any>;
 
  constructor(private PetsGoBackendService: PetsGoBackendService) {
    this.getPetsList();
  }

  getPetsList() {
    this.results = this.PetsGoBackendService.getPetsList();
  }

  getImgUrl(item) {
    return(`${environment.backend}/getImage/${item._id}/${Object.keys(item._attachments)[0]}`)
  }
}
