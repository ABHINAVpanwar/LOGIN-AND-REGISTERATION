import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Model } from '../model/model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  formValue!: FormGroup;
  employedata !: any;
  employeeModelObj: Model = new Model();
  constructor(private formbuilder: FormBuilder, private api: ApiService,private router: Router) {}
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobileno: [''],
      salary: [''],
    });
    this.getAllemployee()
  }
  postEmployeeDetails() {
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobileno = this.formValue.value.mobileno;
    this.employeeModelObj.salary = this.formValue.value.salary;

    this.api.postEmploye(this.employeeModelObj).subscribe(
      (res) => {
        console.log(res);
        alert('Employee added successfully');
        this.formValue.reset();
        this.router.navigateByUrl('/employee');
      },
      (err) => {
        alert('something went wrong');
      }
    );
  }
  getAllemployee(){
    this.api.getEmploye()
    .subscribe(res=>{
      this.employedata = res;
    })
  }
  deleteEmployee(row :any){
    this.api.deleteEmploye(row.id)
    .subscribe(res=>{
      alert("employee deleted");
      this.getAllemployee();
    })
  }
}
