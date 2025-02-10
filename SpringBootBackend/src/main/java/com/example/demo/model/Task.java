package com.example.demo.model;

import jakarta.persistence.*;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;
import java.time.Period;

@Entity
@Table//(name = "tasks")
public class Task {
    @Id
    @SequenceGenerator(
            name = "task_sequence",
            sequenceName = "task_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "task_sequence"
    )
    private Long id;
    private String title;
    private String description;
    private LocalDate deadline;
    private boolean completed;
    @Transient
    private Integer daysUntilDeadline;

    public Task() {
    }

    public Task(
            Long id,
            String title,
            String description,
            LocalDate deadline,
            int daysUntilDeadline,
            boolean completed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.deadline = deadline;
        this.completed = completed;
        this.daysUntilDeadline = daysUntilDeadline;
    }

    public Task(
                String title,
                String description,
                LocalDate deadline,
                boolean completed) {
        this.title = title;
        this.description = description;
        this.deadline = deadline;
        this.completed = completed;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDeadline() {
        return deadline;
    }

    public void setDeadline(LocalDate deadline) {
        this.deadline = deadline;
    }

    public int getDaysUntilDeadline() {
        return Period.between(deadline, LocalDate.now()).getDays();
    }

    public void setDaysUntilDeadline(int hoursUntilDeadline) {
        this.daysUntilDeadline = hoursUntilDeadline;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    @Override
    public String toString() {
        return "Task{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", deadline=" + deadline +
                ", days until deadline=" + daysUntilDeadline +
                ", completed=" + completed +
                '}';
    }
}
