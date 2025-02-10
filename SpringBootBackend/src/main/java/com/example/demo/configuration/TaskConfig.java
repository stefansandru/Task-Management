package com.example.demo.configuration;

import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

@Configuration
public class TaskConfig {

    @Bean
    CommandLineRunner commandLineRunner(TaskRepository taskRepository) {
        return args -> {
            Task linkDB = new Task(
                    "Link the DB to the app",
                    "Create a new DB and link it to the app.",
                    LocalDate.of(2024, 3, 21),
                    true
            );
            Task createTask = new Task(
                    "Create a new task",
                    "Create a new task in the app.",
                    LocalDate.of(2024, 3, 11),
                    false
            );
            Task testConnection = new Task(
                    "Test the connection",
                    "Test the connection between the app and the DB. Check if you can see the new added task.",
                    LocalDate.of(2024, 2, 21),
                    false
            );
            Task createService = new Task(
                    "Create a new service",
                    "Create a new service in the app.",
                    LocalDate.of(2024, 3, 1),
                    true
            );
            taskRepository.saveAll(List.of(linkDB, createTask, testConnection, createService));
        };
    }
}
