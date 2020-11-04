import { Component } from '@angular/core';
import {ApiService} from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public itenscalculos = []

  constructor(private apiservice : ApiService,private route: ActivatedRoute, private router: Router) {
    
    /*this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
         this.itenscalculos.push(this.router.getCurrentNavigation().extras.state.calculos);
      }
    });*/

    this.apiservice.getCalculos().subscribe((result:any)=>{
        this.itenscalculos = result
    })
  }
}
