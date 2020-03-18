import { Component, OnInit } from '@angular/core'
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { NotificationService } from '../../_services'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login_Form: FormGroup
  userDetails: any = []
  constructor (
    public formBuilder: FormBuilder,
    public _NS: NotificationService,
    private router: Router
  ) {
    this.userDetails = JSON.parse(localStorage.getItem('CurentUser'))
  }

  ngOnInit () {
    this.formControl()
    console.log(this.userDetails)
  }

  formControl () {
    this.login_Form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.login_Form.valueChanges.subscribe(data => {})
  }
  checkUser () {
    let userType,user
    this.userDetails.map(_ => {
      if (
        _.email === this.login_Form.get('email').value &&
        _.password === this.login_Form.get('password').value
      ) { userType = _.usertype;
          user = _.email
        this.router.navigate([`${userType}/${user}/details`]) // dynamic routing
      } else {
        this._NS.notification$.next('Invalid User')
      }
    })
  }
}
