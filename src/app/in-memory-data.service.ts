import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Resident } from './resident';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const residents = [
      { room: 11, name: 'Ahmed', phone: '98765432'},
      { room: 12, name: 'Muhammad', phone: '98765432'},
      { room: 13, name: 'Dave', phone: '98765432'},
      { room: 14, name: 'Gene', phone: '98765432'},
      { room: 15, name: 'Jing Yen', phone: '98765432'},
      { room: 16, name: 'Sherman', phone: '98765432'},
      { room: 17, name: 'Salifian', phone: '98765432'},
      { room: 18, name: 'Nicholas', phone: '98765432'},
      { room: 19, name: 'Wai Ching', phone: '98765432'},
      { room: 20, name: 'Ashruff', phone: '98765432'}
    ];
    return {residents};
  }

  // Overrides the genRoom method to ensure that a resident always has a room.
  // If the residents array is empty,
  // the method below returns the initial number (11).
  // if the residents array is not empty, the method below returns the highest
  // resident room + 1.
  genRoom(residents: Resident[]): number {
    return residents.length > 0 ? Math.max(...residents.map(resident => resident.room)) + 1 : 11;
  }
}
