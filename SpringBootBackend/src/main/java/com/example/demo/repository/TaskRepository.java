package com.example.demo.repository;

import com.example.demo.model.Task;
import com.example.demo.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@Repository
public interface TaskRepository
        extends JpaRepository<Task, Long> {

    @Query("SELECT t FROM Task t WHERE t.title = ?1")
    Optional<Task> findTaskByTitle(String taskTitle);

    @Query("SELECT t FROM Task t ORDER BY t.deadline ASC")
    List<Task> findAllByOrderByDeadlineAsc();
}
