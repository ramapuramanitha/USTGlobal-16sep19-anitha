import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddbookComponent } from './addbook/addbook.component';
import { RequestbookComponent } from './requestbook/requestbook.component';
import { DisplaybookComponent } from './displaybook/displaybook.component';
import { ReturnbookComponent } from './returnbook/returnbook.component';
import { RouterModule } from '@angular/router';
import { DisplayRequestedBooksComponent } from './display-requested-books/display-requested-books.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { ShowIssuedBooksComponent } from './show-issued-books/show-issued-books.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AddbookComponent,
    RequestbookComponent,
    ReturnbookComponent,
    DisplaybookComponent,
    DisplayRequestedBooksComponent,
    RequestStatusComponent,
    AddStudentComponent,
    DeleteStudentComponent,
    IssueBookComponent,
    SearchBookComponent,
    ShowIssuedBooksComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'addbook', component: AddbookComponent },
      { path: 'requestbook', component: RequestbookComponent },
      { path: 'returnbook', component: ReturnbookComponent },
      { path: 'displaybook', component: DisplaybookComponent },
      { path: 'display-requested-books', component: DisplayRequestedBooksComponent },
      {path: 'request-status', component: RequestStatusComponent},
      {path: 'add-student', component: AddStudentComponent},
      {path: 'delete-student', component: DeleteStudentComponent},
      {path: 'show-issued-books', component: ShowIssuedBooksComponent},
      {path: 'issue-book', component: IssueBookComponent},
      {path: 'search-book', component: SearchBookComponent},
      {path: 'logout', component: LogoutComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
