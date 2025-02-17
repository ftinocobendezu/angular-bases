import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string ='ironman';
  public age:number=45;

  public visibleName:boolean=true;
  public visibleAge:boolean=true;


  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name}-${this.age}`;
  }


  changedHero():void{
    this.name='Batman';
    this.visibleName=false;
  }

  changedAge():void{
    this.age=50;
    this.visibleAge=false;
  }

  resetForm():void{
    this.name ='ironman';
    this.age=45;
    this.visibleName=true;
    this.visibleAge=true;
  }

}
