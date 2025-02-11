import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent implements OnInit {
  
  task: Task = new Task(null, '', '', '', 0, false);
  
  constructor(private taskService: TaskService,
              private router: Router
  ) {}

  ngOnInit(): void {
  }

  saveTask() {
    this.taskService.createTask(this.task).subscribe(task => {
    },
    error => { console.log('Error creating task:', error); });
  }

  goToTaskList() {
    this.router.navigate(['/tasks']);
  }

  onSubmit() {
    this.saveTask();
  }

}
