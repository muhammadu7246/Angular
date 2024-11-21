import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';  // Import NgForm
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-contectus',
  standalone: true,
  imports: [FormsModule],  // Import FormsModule here for template-driven forms
  templateUrl: './contectus.component.html',
  styleUrls: ['./contectus.component.css']  // Corrected the typo to styleUrls
})
export class ContectusComponent {
  // Array to store form data
  formData: any[] = [];

  // Method to handle form submission
  onSubmit(form: NgForm) {
    if (form.valid) {
      // Push the form data into the formData array
      this.formData.push(form.value);
      // Reset the form after submitting
      form.reset();
    }
  }
}
