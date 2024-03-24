import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  title:String = 'Mi nueva página!';

  hazmeClic(): void {
    alert("Hiciste clic!!!!!!!!!!");
  }

  imgUrl: String = 'https://media1.tenor.com/m/Ipyx6B_We9cAAAAd/cat-fight-flex-cats.gif'

  nombreAlumno: String = '';

}
