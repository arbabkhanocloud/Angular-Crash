import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();
  constructor() {}

  toggleAddTask(): void {
    console.log(123456);
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  toggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
