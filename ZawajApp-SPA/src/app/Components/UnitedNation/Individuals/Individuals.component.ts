import { Component, OnInit } from '@angular/core';
import { IndividualsService } from '../../../Services/Individuals.service';
import {Individuals} from '../../../Models/Individuals'

@Component({
  selector: 'app-Individuals',
  templateUrl: './Individuals.component.html',
  styleUrls: ['./Individuals.component.css']
})
export class IndividualsComponent implements OnInit {

  individuals: Individuals;

  constructor(
    private individualService: IndividualsService
  ) { }

  ngOnInit() {
    this.getIndividuals();
  }

  getIndividuals(): void {
    this.individualService.getIndividuals().subscribe(
      (individuals: Individuals) => {
        this.individuals = individuals;
        console.log(this.individuals);
      },
      (error) => {
        console.log(error)
      }
    );
  }

}
