import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {

  @Input()
  photoCard:string = ""

  @Input()
  cardTitle:string = ""

  @Input()
  cardDescriptions = ""

  constructor(){}
  
  acessar(){
    window.open('https://www.google.com', '_blank')
  }

}
