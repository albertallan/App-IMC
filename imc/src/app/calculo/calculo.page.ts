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
    'peso': null,
    'altura': null,
    'imc': null,
    'classificacao': '',
    'categoria' : ''
  }
  
  constructor(private apiService: ApiService,public alertController: AlertController) { }

  public async calcularIMC(){
    
    if(!this.calculos.peso || !this.calculos.altura){
      const alert = await this.alertController.create({
        header: 'Aviso',
        message: 'Preencha os campos!',
        buttons: ['OK']
      });
      await alert.present();
    }else{
      const peso_aux = this.calculos.peso * 10000
      this.calculos.imc = (peso_aux/Math.pow(this.calculos.altura, 2));

      if(this.calculos.imc <= 18.5){
        this.calculos.classificacao = 'MAGREZA'
        this.calculos.categoria = 'Grau 0'
      }else if(this.calculos.imc > 18.5 || this.calculos.imc < 24.9){
        this.calculos.classificacao = 'Normal'
        this.calculos.categoria = 'Grau 0'
      }else if(this.calculos.imc > 25.0 || this.calculos.imc < 29.9){
        this.calculos.classificacao = 'Sobrepeso'
        this.calculos.categoria = 'Grau 0'
      }else if(this.calculos.imc > 30.0 || this.calculos.imc< 34.9){
        this.calculos.classificacao = 'Obesidade'
        this.calculos.categoria = 'Grau 1'
      }else if(this.calculos.imc > 35.0 || this.calculos.imc<39.9){
        this.calculos.classificacao = "Obesidade"
        this.calculos.categoria = "Grau 2"
      }else if(this.calculos.imc > 40){
          this.calculos.classificacao = 'Obesidade'
          this.calculos.categoria = 'Grau 3'   
      }

      this.apiService.postCalculos(this.calculos).subscribe((result:any) => {
        this.alertController.dismiss(result);
      })
      
    }  
  }
}
