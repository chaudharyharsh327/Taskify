package com.example10.TaskManagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example10.TaskManagement.model.User;
import com.example10.TaskManagement.repository.UserRepository;


@CrossOrigin("http://localhost:4200/")
@RequestMapping("/tasks")
@RestController
public class UserController {
	 @Autowired 
     UserRepository userRepository;
     @PostMapping("/login")
     public ResponseEntity<Boolean> validateUser(@RequestBody User user) {
         User u = userRepository.findByUsername(user.getUsername());

         if (u!= null && u.getPassword().equals(user.getPassword())) {
             return ResponseEntity.ok(true); 
         } else {
//             return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(false); 
        	 return null;
         }
     }
     @PostMapping("/create")
     public void createUser(@RequestBody User user) {
    	 userRepository.save(user);
     }
}
