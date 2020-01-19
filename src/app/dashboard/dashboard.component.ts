import { Component, OnInit } from '@angular/core';
import { Resident } from '../resident';
import { ResidentService } from '../resident.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  residents: Resident[] = [];

  constructor(private residentService: ResidentService) { }

  ngOnInit() {
    this.getResidents();
  }

  getResidents(): void {
    this.residentService.getResidents()
      .subscribe(residents => this.residents = residents.slice(1, 5));
  }
}
