package com.example10.TaskManagement.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Task {
	    @Id
	    private int taskid;
	    private String title;
        private String description;
        private String  date;
        private String status;
        @ManyToOne
        @JoinColumn(name = "username")
        private User user;
        public User getUser() {
			return user;
		}
		public void setUser(User user) {
			this.user = user;
		}
		public int getTaskid() {
			return taskid;
		}
		public void setTaskid(int taskid) {
			this.taskid = taskid;
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
		public String getDate() {
			return date;
		}
		public void setDate(String date) {
			this.date = date;
		}
		public String getStatus() {
			return status;
		}
		public void setStatus(String status) {
			this.status = status;
		}
		
}
