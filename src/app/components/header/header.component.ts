import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui-service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask: boolean;
  subscription: Subscription;
  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .toggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  currentPath(route: string): boolean {
    return this.router.url === route;
  }
}
