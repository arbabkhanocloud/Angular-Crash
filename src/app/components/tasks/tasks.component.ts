import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { FirebaseService } from 'src/app/services/firebase.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(
    private taskService: TaskService
  ) // private firebaseService: FirebaseService
  {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.toggleTask(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}

//

// import { Component, OnInit } from '@angular/core';
// import { FirebaseService } from 'src/app/services/firebase.service'; // Update the import

// @Component({
//   selector: 'app-tasks',
//   templateUrl: './tasks.component.html',
//   styleUrls: ['./tasks.component.css'],
// })
// export class TasksComponent implements OnInit {
//   tasks: any[] = []; // Update the type to any[] or create an interface for Task

//   constructor(private firebaseService: FirebaseService) {}

//   ngOnInit(): void {
//     this.firebaseService.obsr_UpdatedSnapshot.subscribe((querySnapshot) => {
//       // Convert the QuerySnapshot to an array of tasks
//       this.tasks = querySnapshot.docs.map((doc) => {
//         return { id: doc.id, ...doc.data() };
//       });
//     });

//     this.firebaseService.getTasks(); // Start listening for updates
//   }

//   deleteTask(taskId: string) {
//     this.firebaseService.deleteTask(taskId);
//   }

//   toggleReminder(task: any) {
//     // Update the type to any or based on your task structure
//     const updatedTask = { ...task, reminder: !task.reminder };
//     this.firebaseService.toggleTask(updatedTask);
//   }

//   addTask(task: any) {
//     // Update the type to any or based on your task structure
//     this.firebaseService.addTask(task);
//   }
// }
