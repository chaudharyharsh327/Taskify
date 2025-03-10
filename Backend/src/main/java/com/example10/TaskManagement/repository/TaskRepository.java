package com.example10.TaskManagement.repository;
import java.util.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example10.TaskManagement.model.Task;

public interface TaskRepository extends JpaRepository<Task,Integer>{
	List<Task> findByUserUsername(String username);

	
	
}
