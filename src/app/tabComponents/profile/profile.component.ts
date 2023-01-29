import { Component, OnInit } from "@angular/core";
import { ApiServicesService } from "src/app/apiServices/api-services.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {

  // Profiles:any = [
  //   {
  //     "projectName": "Red Hat Consulting",
  //     "description": "Our open source experts work with your organization to implement a cloud strategy to evolve at a pace that works for you. We believe that sharing ideas and building a strategy together is a better approach to your long-term success than following a prescribed plan.",
  //     "imageUrl": "../../../assets/redhatlogo1.png",
  //     "status": "left"
  //   },
  //   {
  //     "projectName": "Adobe Target",
  //     "description": "Whether you want to do A/B Testing or Experience Targeting for your brand, our expertise with Target can help put the right strategy, execute them measuring the results. We can also help integrating with AEM 6.4 for experience fragment targeting or Adobe Audience manager or Salesforce DMP to personalize.",
  //     "imageUrl": "../../../assets/ourmission.png",
  //     "status": "right"
  //   },
  //   {
  //     "projectName": "Adobe Analytics",
  //     "description": "Understand customer journey with an industry-leading analytics platform. Adobe Launch or DTM, Digitalect is a reliable partner for implementing Adobe Analytics or fine-tuning.",
  //     "imageUrl": "../../../assets/ourmission.png",
  //     "status": "left"
  //   },
  //   {
  //     "projectName": "Adobe Audience Manager",
  //     "description": "Catered to the business needs aptly providing marketers with a customizable  solution, which  suits business factors, gathering valuable customer insights, splitting them into logical segments lowering advertisement efforts in reaching the targeted audience. In addition, it protects customer privacy and doesn’t ingest Personally Identifiable Information (PII) or sell customer data.",
  //     "imageUrl": "../../../assets/appmod.png",
  //     "status": "right"
  //   },
  //   {
  //     "projectName": "Adobe Campaign",
  //     "description": "It is the only conversational marketing technology that truly empowers organisations to start and sustain one-to-one customer dialogues. With first class email and inbound-outbound channel fusion capabilities, Adobe Campaign can automate the execution of mobile, social, email and offline campaigns. Driven by an intelligent, decision based engine, the visionary technology enables marketers to achieve measurable results in record time.",
  //     "imageUrl": "../../../assets/ourmission.png",
  //     "status": "left"
  //   },
  //   {
  //     "projectName": "Adobe Campaign",
  //     "description": "It is the only conversational marketing technology that truly empowers organisations to start and sustain one-to-one customer dialogues. With first class email and inbound-outbound channel fusion capabilities, Adobe Campaign can automate the execution of mobile, social, email and offline campaigns. Driven by an intelligent, decision based engine, the visionary technology enables marketers to achieve measurable results in record time.",
  //     "imageUrl": "../../../assets/appmod.png",
  //     "status": "right"
  //   },
  // ];
  Profiles:any = [];
  spinnerStatus:boolean = false;

  constructor(private apiCall:ApiServicesService) { }

  ngOnInit(): void {
    this.apiCall.getMenuList("profile", "ZagaInformation").subscribe(
      (data:any) => {
         this.spinnerStatus = true;
         this.Profiles = data.servicesList;
      });
  }


}
