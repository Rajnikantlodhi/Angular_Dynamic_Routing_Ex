import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
  data: any = {}
  userDetails: any = []
  showDetails: any = []
  constructor (private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.data = params
    })
  }

  ngOnInit () {
    this.userDetails = JSON.parse(localStorage.getItem('CurentUser'))
    this.userDetails.map(__ => {
      if (__.email === this.data.name && __.usertype === this.data.usertype) {
        this.showDetails = __
      }
    })
  }
}
