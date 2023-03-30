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

/* Este código define un componente de alerta llamado 'app-alert'. El componente tiene dos tipos de alertas: éxito y error, cada una con un mensaje y un título. Los mensajes y títulos son pasados como propiedades del componente (@Input). Implementa la interfaz OnChanges para actualizar las propiedades cuando cambien. */