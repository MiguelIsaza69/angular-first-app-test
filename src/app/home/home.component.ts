import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html', // Corregimos la ruta
  styleUrls: ['./home.component.css']
})
export class HomeComponent { // Aseguramos que el nombre de la clase sea este

}