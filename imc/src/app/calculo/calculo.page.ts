import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular'

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.page.html',
  styleUrls: ['./calculo.page.scss'],
})
export class CalculoPage {

  public peso=null;
  public altura=null;
  public imc = null;
  public classificacao=null;
  public categoria=null;

  constructor(public alertController: AlertController) { }

  public async calcularIMC(){

    if(this.altura === null || this.peso === null){
      const alert = await this.alertController.create({
        header: 'ERRO',
        message: 'Por favor preencha todos os campos necessarios',
        buttons: ['OK']
      });
  
      await alert.present();
      return
    
    }

    this.imc = this.peso/(this.altura*this.altura)
    
    if(this.imc < 18.5){
      this.classificacao = "Magreza"
      this.categoria="Grau 0"
    }
    else if(this.imc >18.5 && this.imc < 24.9){
      this.classificacao ="Normal"
      this.categoria="Grau 0"
    }
    else if(this.imc>25.0 && this.imc<29.9){
      this.classificacao ="Sobrepeso  "
      this.categoria="Grau 0"
    }
    else if(this.imc>30.0 && this.imc<34.9){
      this.classificacao ="Obesidade"
      this.categoria="Grau 1"
    }
    else if(this.imc>35.0 && this.imc<39.9){
      this.classificacao ="Obesidade(Severa)"
      this.categoria="Grau 2"
    }
    else{
      this.classificacao ="Obesidade"
      this.categoria="Grau 3(Morbida)"
    }
  }
  /**
   * NovoIMC
   */
  public novoimc() {
    this.peso= null;
    this.altura= null;
    this.imc = null;
    this.classificacao= null;
    this.categoria= null;
    
  }
}
