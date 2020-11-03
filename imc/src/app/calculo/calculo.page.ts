import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular'
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.page.html',
  styleUrls: ['./calculo.page.scss'],
})
export class CalculoPage {

  public calculos = {
    'peso': '',
    'altura': '',
    'imc': '',
    'classificação': '',
    'categoria' : ''
  }

  constructor(private apiService: ApiService,public alertController: AlertController) { }

  public async calcularIMC(){

    if(this.calculos.peso == ''){
      const alert = await this.alertController.create({
        header: 'Aviso',
        message: 'Preencha os campos!',
        buttons: ['OK']
      });
      await alert.present();
    }
    else{
      this.apiService.postCalculos(this.calculos).subscribe((result:any) => {
        this.alertController.dismiss(result);
      })
    }
  }
}
