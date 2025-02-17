import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[]=['Goku','Vegeta','Gohan','Trunks'];
  public deletedHero?: string;


  removeLastHero():void{
  this.deletedHero= this.heroNames.pop(); //Eliminando el úiltimo elemento de la lista
  }

}
