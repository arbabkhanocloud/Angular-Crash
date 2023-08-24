import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string;
  day: string;
  reminder: boolean;
  showAddTask: boolean;
  subsctiption: Subscription;

  constructor(private uiService: UiService) {
    this.subsctiption = this.uiService.toggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  handleSubmit($event: any) {
    if (!this.text) {
      alert('please add a task');
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
