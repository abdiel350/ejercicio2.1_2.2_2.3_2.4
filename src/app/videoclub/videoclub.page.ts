import { Component } from '@angular/core';
import * as datospeli from './peliculas.json';

@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})
export class VideoclubPage{

  datapeli: any = (datospeli as any).default.datapeli;

  constructor() {
    console.log(this.datapeli); // Agrega un console.log() aquí para ver los datos
  }
 
}
