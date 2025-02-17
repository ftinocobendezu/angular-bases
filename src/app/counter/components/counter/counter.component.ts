import { Component } from "@angular/core";
import { count } from "rxjs";

@Component({
  selector: 'app-counter',
  template: `
            <p>  Counter: {{counter}} </p>
              <p>Mensaje:{{mensaje}}</p>
              <button (click)="increaseBy(1)">+1</button>
              <button (click)="reset()">Reset</button>
              <button (click)="decreasseBy(1)">-1</button>
    `,
})

export class CounterComponent {

  public counter:number=100;
  public mensaje:string='Componente Contador';
  public counterReset:number=this.counter;

  increaseBy(value:number):void{
    this.counter+=value;
  }

  reset():void{
    this.counter=this.counterReset;
  }

  decreasseBy(value:number):void{
    this.counter-=value;
  }


}
