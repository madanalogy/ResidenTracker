import { Component, OnInit, Input } from '@angular/core';
import { Resident} from '../resident';

@Component({
  selector: 'app-resident-detail',
  templateUrl: './resident-detail.component.html',
  styleUrls: ['./resident-detail.component.css']
})

export class ResidentDetailComponent implements OnInit {
  @Input() resident: Resident;

  constructor() { }

  ngOnInit() {
  }

}
