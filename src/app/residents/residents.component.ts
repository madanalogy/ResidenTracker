import { Component, OnInit } from '@angular/core';
import {Resident} from '../resident';
import {RESIDENTS} from '../demo-residents';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css'],
})
export class ResidentsComponent implements OnInit {

  constructor() { }
  residents = RESIDENTS;
  resident: Resident = {
    room: 1,
    name: 'Ahmed',
    phone: '92279419'
  };
  selectedResident: Resident;

  ngOnInit() {
  }
  onSelect(resident: Resident): void {
    this.selectedResident = resident;
  }

}
