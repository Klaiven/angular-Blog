import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {

  @Input()
  photoCover:string = ""

  @Input()
  cardTitle:string = ""

  @Input()
  cardDescription = ""

  @Input()
  Id:string = "0"

  constructor(private router: Router){}

  acessar(Id: string){

    this.router.navigate(['/content', Id]);
    
  }


}
