import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor(private http: HttpClient, private add: AuthService , private router: Router) { }
  addBook(addProductForm: NgForm) {
    this.http.post(`${this.add.baseURL}/add`, addProductForm.value).subscribe(response => {
  if (response != null) {
    alert('Product Added');
    this.router.navigate(['/diplay-product']);
   } else {
      alert('failed to add product');
    }
    });
  }
    ngOnInit() {
    }

  }

