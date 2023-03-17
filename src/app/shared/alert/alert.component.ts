import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnChanges {

  successMesage: string;
  errorMenssage: string;
  
  @Input() public successAlert: string = ''; 
  @Input() public errorAlert: string = ''; 

  constructor(){
    
    this.successMesage = this.successAlert;
    this.errorMenssage = this.errorAlert

  }

  ngOnChanges() {
    
    this.successMesage = this.successAlert;   
    this.errorMenssage = this.errorAlert;  
  }


}

