import { Injectable } from '@angular/core';
import { Resident} from './resident';
import { RESIDENTS } from './demo-residents';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  constructor(private messageService: MessageService) { }

  getResidents(): Observable<Resident[]> {
    // TODO: send the message __after__ fetching the residents
    this.messageService.add('ResidentService: fetched residents');
    return of(RESIDENTS);
  }
  getResident(room: number): Observable<Resident> {
    // TODO: send the message __after__ fetching the resident
    this.messageService.add('ResidentService: fetched resident room=${room}');
    return of(RESIDENTS.find(resident => resident.room === room));
  }
}
