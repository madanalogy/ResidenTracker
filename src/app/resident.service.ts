import { Injectable } from '@angular/core';
import { Resident} from './resident';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResidentService {
  private residentsUrl = 'api/residents';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getResidents(): Observable<Resident[]> {
    // TODO: send the message __after__ fetching the residents
    this.messageService.add('ResidentService: fetched residents');
    return this.http.get<Resident[]>(this.residentsUrl)
      .pipe(
        tap(_ => this.log('fetched residents')),
        catchError(this.handleError<Resident[]>('getResidents', []))
    );
  }
  /** GET resident by room. Will 404 if id not found */
  getResident(room: number): Observable<Resident> {
    const url = `${this.residentsUrl}/${room}`;
    return this.http.get<Resident>(url).pipe(
      tap(_ => this.log(`fetched resident id=${room}`)),
      catchError(this.handleError<Resident>(`getResident id=${room}`))
    );
  }
  private log(message: string) {
    this.messageService.add(`ResidentService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** PUT: update the resident on the server */
  updateResident(resident: Resident): Observable<any> {
    return this.http.put(this.residentsUrl, resident, this.httpOptions).pipe(
      tap(_ => this.log(`updated resident room=${resident.room}`)),
      catchError(this.handleError<any>('updateResident'))
    );
  }
  // TODO: Remainder of REST api calls (POST/DELETE) + Search (GET)
}
