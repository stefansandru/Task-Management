import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importă FormsModule aici
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-edit-task',
  imports: [FormsModule],
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  taskId!: number;
  task: Task = {
    id: 0,
    title: '',
    description: '',
    deadline: '',
    daysUntilDeadline: 0,
    completed: false
  };

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskId = Number(this.route.snapshot.paramMap.get('taskId'));  
    if (this.taskId <= 0) {
      console.error('Invalid task ID: ' + this.taskId);
      return;
    }  
  }

  onSubmit(): void {
    const { title, description, deadline } = this.task;
    this.taskService.updateTask(this.taskId, title, description, deadline).subscribe({
      next: () => this.router.navigate(['/tasks']),
      error: (err) => console.error('Error updating task:', err)
    });
  }
}