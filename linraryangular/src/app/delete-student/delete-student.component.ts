import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {




  studentData: any;

  constructor(private http: HttpClient, private router: Router, private service: AuthService) { }

  ngOnInit() {
  }

  getStudentInfo(Student: NgForm) {
    console.log(Student.value);
    this.http.get(`${this.service.baseURL}/getStudent/{Student.value.id}`)
    .subscribe(response => {
        console.log('response=', response);
        if (response != null) {
          alert('student data found');
        } else {
          alert('No Student Data Present for ID ' + Student.value.id);
        }
        this.studentData = response;

      });
  }

  deleteStudent(id) {
    this.http.delete(`${this.service.baseURL}admin/delete/{id}/${id}`)
      .subscribe(response => {
        if (response) {
           alert('Student Deleted Successfully');
           this.router.navigate(['/']);
           console.log(response);
        } else {
          alert('Failed to delete the Student');
          this.router.navigate(['/']);
        }
      });

  }

}


