import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-title',
  standalone: true,
  imports: [],
  templateUrl: './menu-title.component.html',
  styleUrl: './menu-title.component.css'
})
export class MenuTitleComponent {

  constructor(private router: Router){}

  menu(){

    this.router.navigate(['']);
    
  }


}
