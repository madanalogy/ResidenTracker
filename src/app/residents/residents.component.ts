import { Component, OnInit } from '@angular/core';
import {Resident} from '../resident';
import { ResidentService} from '../resident.service';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css'],
})
export class ResidentsComponent implements OnInit {

  constructor(private residentService: ResidentService) { }
  residents: Resident[];

  ngOnInit() {
    this.getResidents();
  }
  getResidents(): void {
    this.residentService.getResidents()
      .subscribe(residents => this.residents = residents);
  }

}
