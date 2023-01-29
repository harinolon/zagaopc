import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ApiServicesService } from 'src/app/apiServices/api-services.service';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent implements OnInit {
  contactForm: FormGroup;
  durationInSeconds = 5;
  constructor(
    private apiCall: ApiServicesService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    public modalRef: MdbModalRef<ContactModalComponent>) {
    this.contactForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  close(){
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  }

 

  onSubmit() {
    console.log(this.contactForm.value);
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
    this.apiCall.sendMail(this.contactForm.value).subscribe((data:any) => {
      console.log(data);
      this.snackBar.open("Thank you for contacting us. We will get back to you soon!", "", {
        duration: this.durationInSeconds * 1000});
      this.contactForm.reset();
    }, (error) => {
      console.log(error);
    });
    // this.snackBar.open("Thank you for contacting us. We will get back to you soon!", "", {
    //   duration: this.durationInSeconds * 1000});
    // this.contactForm.reset();
  }
}
