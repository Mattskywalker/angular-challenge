import { Component, OnInit } from '@angular/core';
import { CostumerService, Customer } from 'src/app/core/services/costumer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  costumer: Customer

  constructor(private costumerService: CostumerService) { }

  ngOnInit() {

    this.costumer = this.costumerService.getCostumer('')
  }

}
