import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { dataFake } from '../../data/datafake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MenuTitleComponent, MenuBarComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {

  photoCover:string = "https://image.api.playstation.com/vulcan/img/rnd/202010/2716/8pc2fi23ksuIvi0gEHO5EqV2.png"
  contentTitle:string = "Titulo"
  contentDescription:string = "Descrição"
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void{
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")

    )

    this.setValuesToComponents(this.id)
  }

  setValuesToComponents(id:string | null){
    const result = dataFake.filter( article => article.id == id )[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photo
    
  }
}
