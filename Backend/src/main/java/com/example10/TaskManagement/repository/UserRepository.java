package com.example10.TaskManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.example10.TaskManagement.model.User;

public interface UserRepository extends JpaRepository<User,String>{
             User findByUsername(String username);
}
