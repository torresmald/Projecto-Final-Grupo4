import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnChanges {

  successMesage: string;
  errorMenssage: string;
  errorTitle: string;
  successTitle: string;
  
  @Input() public successAlertMsg: string = ''; 
  @Input() public errorAlertMsg: string = ''; 
  @Input() public successAlertTitle: string = '';
  @Input() public errorAlertTitle: string = '';


  constructor(){
    
    this.successMesage = this.successAlertMsg;
    this.errorMenssage = this.errorAlertMsg
    this.errorTitle = this.errorAlertTitle;
    this.successTitle = this.successAlertTitle

  }

  ngOnChanges() {
    
    this.successMesage = this.successAlertMsg;
    this.errorMenssage = this.errorAlertMsg
    this.errorTitle = this.errorAlertTitle;
    this.successTitle = this.successAlertTitle  
  }


}

