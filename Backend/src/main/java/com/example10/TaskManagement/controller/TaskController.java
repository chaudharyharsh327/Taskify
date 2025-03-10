package com.example10.TaskManagement.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example10.TaskManagement.model.Task;
import com.example10.TaskManagement.model.User;
import com.example10.TaskManagement.repository.TaskRepository;
import com.example10.TaskManagement.repository.UserRepository;

import jakarta.transaction.Transactional;

@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/tasks")
public class TaskController {
	 @Autowired
	  TaskRepository taskrep;
	  @Autowired
	  UserRepository userrep;
	  @PostMapping("/insert/{username}")
	  public ResponseEntity<Boolean> insert(@PathVariable String username,@RequestBody Task task) {
//		  return taskrep.save(task);
		  Optional<User> user = userrep.findById(username);

		    if (user.isPresent()) {
		        task.setUser(user.get()); // Set the user before saving
		        taskrep.save(task);
		        return ResponseEntity.ok(true);
		    } else {
		        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(false);
		    }
	  }
	  @GetMapping("/retreive")
	  public List<Task>retreiveData(){
		  return taskrep.findAll();
	  }
	  
	  @DeleteMapping("/deleteData/{tid}")
	  public void deleteData(@PathVariable("tid") int id) {
		  taskrep.deleteById(id);
	  }
	  @PutMapping("/updateData/{tid}")
	  public ResponseEntity<Task>updateData(@PathVariable("tid") int taskid,@RequestBody Task task){
		  Task updatetask = null;
		  Optional<Task>task1 = taskrep.findById(taskid);
		  if(task1.isPresent()) {
			  updatetask = task1.get();
			  updatetask.setTaskid(task.getTaskid());
			  updatetask.setTitle(task.getTitle());
			  updatetask.setDescription(task.getDescription());
			  updatetask.setDate(task.getDate());
			  updatetask.setStatus(task.getStatus());
			  
			  
			  taskrep.save(updatetask);
		  }
		  return new ResponseEntity<>(updatetask,HttpStatus.OK);
	  }
	  @GetMapping("/view/{username}")
	    public List<Task> getTasksByUsername(@PathVariable String username) {
	        return taskrep.findByUserUsername(username);
	    }
//	  @DeleteMapping("/deleteData/{username}/{id}")
//	  public ResponseEntity<String> deleteTask(@PathVariable String username, @PathVariable int id) {
//	      Optional<Task> task = taskrep.findById(id);
//	      
//	      if (task.isPresent() && task.get().getUser().getUsername().equals(username)) {
//	          taskrep.deleteById(id);
//	          return ResponseEntity.ok("Task deleted successfully");
//	      } else {
//	          return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Task not found or does not belong to user");
//	      }
//	  }

    
}
