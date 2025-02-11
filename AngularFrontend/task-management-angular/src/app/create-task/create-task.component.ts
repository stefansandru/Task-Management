import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  imports: [FormsModule, CommonModule],
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

  errorMessage: string = '';
  successMessage: string = '';

  saveTask() {
    this.taskService.createTask(this.task).subscribe({
      next: response => {
        this.successMessage = 'Task added successfully!'; // Backend trimite mesajul "Task added successfully!"
        this.errorMessage = '';
        this.task = new Task(null, '', '', '', 0, false);
  
        // Șterge mesajul de succes după 4 secunde
        setTimeout(() => {
          this.successMessage = '';
        }, 4000);
      },
      error: error => {
        if (error.status === 409) {
          this.errorMessage = error.error; // Mesajul exact din backend
        } else {
          this.errorMessage = 'An error occurred while creating the task.';
        }
        this.successMessage = '';
      }
    });
  }
  
  goToTaskList() {
    this.router.navigate(['/tasks']);
  }

  onSubmit() {
    this.saveTask();
  }

}
