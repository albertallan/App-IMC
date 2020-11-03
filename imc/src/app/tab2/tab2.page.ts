import { Component } from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public itenscalculos = []

  constructor(private apiservice : ApiService) {

    this.apiservice.getCalculos().subscribe((result:any)=>{
        this.itenscalculos = result
    })
  }
}
