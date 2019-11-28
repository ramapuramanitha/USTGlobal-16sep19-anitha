import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PropertyBindingComponent } from './data-binding/property-binding/property-binding.component';
import { EventbindingComponent } from './data-binding/eventbinding/eventbinding.component';
import { TwoWayBindingComponent } from './data-binding/two-way-binding/two-way-binding.component';
import { StructuralDirectiveComponent } from './directive/structural-directive/structural-directive.component';
import { NgifComponent } from './directive/structural-directive/ngif/ngif.component';
import { NgforComponent } from './directive/structuraldirective/ngfor/ngfor.component';
import { NgswitchComponent } from './directive/structural-directive/ngswitch/ngswitch.component';
import { CustomDirective } from './custom.directive';
import { RegisterComponent } from './register/register.component';
import { FormComponent } from './form/form.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';
import {HttpClientModule} from '@angular/common/http';
import { DollarPipe } from './dollar.pipe';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
   AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    HelpComponent,
    FooterComponent,
    DataBindingComponent,
    PropertyBindingComponent,
    EventbindingComponent,

   LoginComponent,
   TwoWayBindingComponent,
   StructuralDirectiveComponent,
   NgifComponent,
   NgforComponent,
   NgswitchComponent,
   CustomDirective,
   RegisterComponent,
   FormComponent,
   Form1Component,
   Form2Component,
   Form3Component,
   ReactiveFormComponent,
   ParentComponent,
   ChildComponent,
   DollarPipe,
   CommentComponent,
   CommentDetailsComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
     {path : '', component : HomeComponent},
     {path : 'about', component : AboutComponent},
     {path: 'login', component: LoginComponent},
     {path : 'help', component : HelpComponent},
     {path : 'property-binding' , component : PropertyBindingComponent},
     {path : 'event-binding' , component: EventbindingComponent},
     {path : 'two-way-binding', component: TwoWayBindingComponent},
     {path : 'ngif' , component : NgifComponent},
     {path : 'ngfor' , component: NgforComponent},
     {path : 'ngswitch' , component: NgswitchComponent},
     {path : 'register' , component: RegisterComponent},
     {path : 'form' , component: FormComponent},
     {path : 'form1' , component: Form1Component},
     {path : 'form2' , component: Form2Component},
     {path : 'form3' , component: Form3Component},
     { path : 'reactive-form' , component: ReactiveFormComponent},
     {path : 'parent' , component : ParentComponent},
      { path : 'comment-details' , component: CommentDetailsComponent}
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

