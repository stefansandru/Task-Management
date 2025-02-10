package com.example.demo.service;

import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    public final TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public void addTask(Task task) {
        Optional<Task> taskByTitlel = taskRepository.
                findTaskByTitle(task.getTitle());
        if (taskByTitlel.isPresent()) {
            throw new IllegalStateException("Task already exists.");
        }
        taskRepository.save(task);
    }

    public void deleteTask(Long id) {
        boolean exists = taskRepository.existsById(id);
        if (!exists) {
            throw new IllegalStateException("Task with id " + id + " does not exist.");
        }
        taskRepository.deleteById(id);
    }

    @Transactional
    public void updateTask(Long id, String title, String description, LocalDate deadline) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(
                        "Task with id " + id + " does not exist."
                ));
        if (title != null &&
                !title.isEmpty() &&
                !title.equals(task.getTitle())) {
            task.setTitle(title);
        }
        if (description != null &&
                !description.isEmpty() &&
                !description.equals(task.getDescription())) {
            task.setDescription(description);
        }

        if (deadline != null &&
                !deadline.equals(task.getDeadline())) {
            task.setDeadline(deadline);
        }
    }
}
