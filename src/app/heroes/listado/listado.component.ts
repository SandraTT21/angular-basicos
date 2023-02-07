import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Cap.America'];

  heroeBorrado: string = '';

  borrarHeroe(){
    console.log('borrando ..');
    //this.heroes.splice(4);
    this.heroeBorrado = this.heroes.shift() || '';     
    console.log(this.heroeBorrado);
  }
}
