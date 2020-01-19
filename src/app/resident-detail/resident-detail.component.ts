import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Resident} from '../resident';
import {ResidentService} from '../resident.service';

@Component({
  selector: 'app-resident-detail',
  templateUrl: './resident-detail.component.html',
  styleUrls: ['./resident-detail.component.css']
})

export class ResidentDetailComponent implements OnInit {
  @Input() resident: Resident;

  constructor(
    private route: ActivatedRoute,
    private residentService: ResidentService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getResident();
  }
  getResident(): void {
    const room = +this.route.snapshot.paramMap.get('room');
    this.residentService.getResident(room)
      .subscribe(resident => this.resident = resident);
  }
  goBack(): void {
    this.location.back();
  }

}
