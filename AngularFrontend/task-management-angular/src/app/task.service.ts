import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private baseUrl = 'http://localhost:8080/tasks';

  constructor(private httpClient: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.baseUrl);
  }

  createTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.baseUrl, task);
  }


updateTask(id: number | null,
    title?: string, 
    description?: string, 
    deadline?: string): Observable<void> {
    let queryParams = new URLSearchParams();
    if (title) queryParams.append('title', title);
    if (description) queryParams.append('description', description);
    if (deadline) queryParams.append('deadline', deadline);
  
    const url = `${this.baseUrl}/${id}?${queryParams.toString()}`;
  
    console.log('Request PUT URL:', url);
    
    return this.httpClient.put<void>(url, {}); // Emply body
  }

  deleteTask(id: number | null): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  toggleTaskCompletion(id: number | null) {
    return this.httpClient.patch<void>(`${this.baseUrl}/${id}/toggle-completion`, {});
  }
}