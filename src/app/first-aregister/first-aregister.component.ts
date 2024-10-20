import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgModel, NgModelGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-first-aregister',
  templateUrl: './first-aregister.component.html',
  styleUrl: './first-aregister.component.css'
})
export class FirstARegisterComponent {
  firstAidForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.firstAidForm = this.fb.group({
      fullName: ['', Validators.required],
      idNumber: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      vehicleType: ['', Validators.required],
      injuredToday: ['', Validators.required],
      additionalInfo: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.firstAidForm.valid) {
      console.log('Form Data:', this.firstAidForm.value);
      alert('تم إرسال النموذج بنجاح!');
      this.firstAidForm.reset();
    } else {
      alert('يرجى ملء جميع الحقول المطلوبة.');
    }
  }
}