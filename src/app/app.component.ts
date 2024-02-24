import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppModule } from './app.module';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule, MenuTitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-Blog';
}
