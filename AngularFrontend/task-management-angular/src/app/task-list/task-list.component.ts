import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, 
            FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService,
              private router: Router) {}

  ngOnInit(): void {
    this.getTasks();
  }

  private getTasks() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  public editTask(id: number | null) {
    this.router.navigate(['/edit-task', id]);
  } 

  public deleteTask(id: number | null) {
    this.taskService.deleteTask(id).subscribe({
      next: () => this.getTasks(),
      error: (err) => console.error('Error deleting task:', err)
    });
  }

  public toggleTaskCompletion(id: number | null) {
    console.log('Toggling task completion:', id);
    this.taskService.updateTask(id).subscribe({
      next: () => this.getTasks(),
      error: (err) => console.error('Error toggling task completion:', err)
    });
  }
}
