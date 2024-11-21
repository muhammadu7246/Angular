import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';  // Import CommonModule for directives like ngIf, ngFor

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule, CommonModule],  // Added CommonModule
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  message: string = '';
  name: string = '';
  email: string = '';
  password: string = '';

  onchange(value: string) {
    this.message = value;
  }

  updateMessage() {
    this.message = 'Updated message on button click!';
  }
}
