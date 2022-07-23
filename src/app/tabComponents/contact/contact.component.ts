import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServicesService } from 'src/app/apiServices/api-services.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  address:any = [
    {
      address: "Zaga Information Technology Pvt. Ltd.",
    },
    {
      address: "Zaga Information Technology Pvt. Ltd.",
    }
  ];
  phoneNumbers:any = [
    {
      phone: "+91-9888888888",
    },
    {
      phone: "+91-9888888888",
    }
  ];
  emails:any = [
    {
      email: "contact@zagaopensource.com",
    },
    {
      email: "contact@zagaopensource.com",
    }
  ];
  shortMessage: any = "Our cordial welcome goes to you! Thank you for trusting us and appreciating our venture!";
  
  // shortMessage:any = "";
  // address:any = [];
  // phoneNumbers:any = [];
  // emails:any = [];
  
  constructor(
    private fb: FormBuilder,
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
    // this.apiCall.getMenuList("contact","ZagaInformation").subscribe((data:any) => {
    //   this.shortMessage = data.Contact.shortMessage;
    //   this.address = data.Contact.Address;
    //   this.phoneNumbers = data.Contact.phoneNumber;
    //   this.emails = data.Contact.email;
    // });
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
