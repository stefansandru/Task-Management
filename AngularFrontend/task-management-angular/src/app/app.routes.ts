import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

export const routes: Routes = [
    { path: 'tasks', component: TaskListComponent },
    { path: 'create-task', component: CreateTaskComponent},
    { path: 'edit-task/:taskId', component: EditTaskComponent},
    { path: '', redirectTo: 'tasks', pathMatch: 'full' },
];
