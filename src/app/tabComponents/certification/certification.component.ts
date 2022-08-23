import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Modal } from 'bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServicesService } from 'src/app/apiServices/api-services.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {
  contactForm: FormGroup;
  paramsData: any;
  certificationDetails:any;
  keyPoints:any;
  offered: any;
  category:any;
  styleContainer:any;
  styleTextContent:any;
  // modalRef:any;
  constructor(private fb: FormBuilder,
    private apiCall: ApiServicesService,
    private snackBar: MatSnackBar
  ) {
      this.contactForm = this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', Validators.required],
        message: ['', Validators.required]
      });
   }
   durationInSeconds = 5;
 

  ngOnInit(): void {
    this.paramsData = localStorage.getItem('service');
    this.certificationDetails = JSON.parse(this.paramsData);
    this.keyPoints = this.certificationDetails.keyPoints;
    this.offered = this.certificationDetails.offeredBy;
    this.category = this.certificationDetails.category;

    if(this.category == 'services'){
      this.styleContainer = {
        'padding-bottom': '4%',
      }
      this.styleTextContent = {
        'width': '100%',
        'margin-top': '8%',
      }
    }
    else {
      this.styleContainer = '';
      this.styleTextContent = '';
    }
  }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
    // this.modalRef.modal('hide');
  }
  
  onSubmit() {
    console.log(this.contactForm.value);
    // this.apiCall.sendMail(this.contactForm.value).subscribe((data:any) => {
    //   console.log(data);
    //   this.snackBar.open("Thank you for contacting us. We will get back to you soon!", "", {
    //     duration: this.durationInSeconds * 1000});
    //   this.contactForm.reset();
    // }, (error) => {
    //   console.log(error);
    // });
  }

}
