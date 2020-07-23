import { Component, OnInit } from '@angular/core';
import { EntitiesService } from 'src/app/Services/Entities.service';
import { Entities } from '../../../../Models/Individuals'

@Component({
  selector: 'app-Entites',
  templateUrl: './Entites.component.html',
  styleUrls: ['./Entites.component.css']
})
export class EntitesComponent implements OnInit {
  entities: Entities

  constructor(
    private EntityService: EntitiesService
  ) { }

  ngOnInit() {
    this.getEntities();
  }

  getEntities(): void {
    this.EntityService.getEntities().subscribe(
      (entities: Entities) => {
        this.entities = entities;
        console.log(this.entities);
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
