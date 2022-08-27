import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServicesService } from 'src/app/apiServices/api-services.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ContactModalComponent } from './contact-modal/contact-modal.component';

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
  mobileViewCerts:any;
  constructor(private fb: FormBuilder,
    private apiCall: ApiServicesService,
    private snackBar: MatSnackBar,
    private modalService: MdbModalService
  ) {
      this.contactForm = this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', Validators.required],
        message: ['', Validators.required]
      });
   }
   durationInSeconds = 5;
   modalRef: MdbModalRef<ContactModalComponent> | null = null;

  ngOnInit(): void {
    this.paramsData = localStorage.getItem('service');
    this.certificationDetails = JSON.parse(this.paramsData);
    this.keyPoints = this.certificationDetails.keyPoints;
    this.offered = this.certificationDetails.offeredBy;
    this.category = this.certificationDetails.category;

    console.log(this.category, "redhat service");
    if(this.category == 'services'){
      this.styleContainer = {
        'padding-bottom': '4%',
      }
      this.styleTextContent = {
        'width': '100%',
        'margin-top': '8%',
      }
    }
    else if(this.category == 'redhat-certs') {
      this.mobileViewCerts = "redhat-certs";
    }
    else {
      this.styleContainer = '';
      this.styleTextContent = '';
    }
  }
  displayStyle = "none";
  
  open() {
    this.modalRef = this.modalService.open(ContactModalComponent,{
      modalClass: 'modal-lg',
      
    });
    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);
    });
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
