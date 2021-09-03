import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { DataService } from 'src/data.service';
//import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'form validation';
   angForm: any = FormGroup;
   constructor(private fb: FormBuilder,private dataservice:DataService) {
    this.createForm();
  }
   createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       email: ['', Validators.required ]
    });
  };
  ngOnInit(){}
  handlesubmit = () => {
    alert("hi sweta,u got success");
    this.dataservice.sendPostRequest(this.angForm.value).subscribe((data:any) => {
      console.log(data);
    });
    //this.http.post(`http://localhost:3000/postdata`,this.angForm.value).subscribe((response) => console.log(response),(error) => console.log(error));
  }

  

}
