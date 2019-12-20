import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { BookTransactionResponse } from '../book-transaction-response';


@Component({
  selector: 'app-request-status',
  templateUrl: './request-status.component.html',
  styleUrls: ['./request-status.component.css']
})
export class RequestStatusComponent implements OnInit {

  transactions: BookTransactionResponse;

  constructor(private service: AuthService,
              private http: HttpClient) { }
    id = null;
    getRequestStatusInfo(requestStatusInfo: NgForm) {
      this.http.get<BookTransactionResponse>(`${this.service.baseURL}/library/student/book/requestStatus/${requestStatusInfo.value.id}`)
        .subscribe(response => {
          if (response != null) {
            alert('Request Accepted Succefully');
          } else {
            alert('Request denyed for ID ' + requestStatusInfo.value.id);
          }
          this.transactions = response;
          console.log(response);
        });
    }

  ngOnInit() {
  }

}
