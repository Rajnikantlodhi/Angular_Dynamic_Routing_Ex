import { Component, OnInit } from '@angular/core'
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { NotificationService } from '../../_services';
import { Router } from "@angular/router";

interface userType {
  value: string
  viewValue: string
}

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.scss']
})
export class RegisteruserComponent implements OnInit {
  register_Form: FormGroup;
  userTypes: any = []
  foods: userType[] = [
    { value: 'superAdmin', viewValue: 'Super Admin' },
    { value: 'admin', viewValue: 'Admin' },
    { value: 'manager', viewValue: 'Manager' },
    { value: 'employee', viewValue: 'Employee' }
  ]

  constructor (
    public formBuilder: FormBuilder,
    public _NS: NotificationService,
    private router :Router
  ) {}

  ngOnInit () {
    this.formControl()
  }

  formControl () {
    this.register_Form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      usertype: ['', Validators.required],
      create: [false, Validators.required],
      read: [false, Validators.required],
      update: [false, Validators.required],
      delete: [false, Validators.required]
    })
    this.register_Form.valueChanges.subscribe(data => {})
  }

  allChecked (event) {
    switch (event.value) {
      case 'superAdmin':
        this.register_Form.get('create').setValue(true)
        this.register_Form.get('read').setValue(true)
        this.register_Form.get('update').setValue(true)
        this.register_Form.get('delete').setValue(true)
        break
      case 'admin':
        this.register_Form.get('create').setValue(true)
        this.register_Form.get('read').setValue(true)
        this.register_Form.get('update').setValue(true)
        this.register_Form.get('delete').setValue(false)
        break
      case 'manager':
        this.register_Form.get('create').setValue(true)
        this.register_Form.get('read').setValue(true)
        this.register_Form.get('update').setValue(false)
        this.register_Form.get('delete').setValue(false)

        break
      case 'employee':
        this.register_Form.get('create').setValue(false)
        this.register_Form.get('update').setValue(false)
        this.register_Form.get('delete').setValue(false)
        this.register_Form.get('read').setValue(true)

        break

      default:
        break
    }
  }
  saveUserData () {
    let message = 'User Successfuly Add'
    this.userTypes.push(this.register_Form.value)
    localStorage.setItem('CurentUser', JSON.stringify(this.userTypes))
    this._NS.notification$.next(message);
    this.router.navigate(['/login'])
  }
}
