import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  @Input()
  Id:string = "0"

  
  constructor(private router: Router){}

  acessar(Id: string){

    this.router.navigate(['/content', Id]);
    
  }

}
