import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true, // Esta línea es fundamental
  imports: [
    RouterOutlet,
    RouterModule,
    
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}