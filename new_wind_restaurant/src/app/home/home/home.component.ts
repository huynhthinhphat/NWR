import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Account } from '../../model/account';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private service: DataService, private router: Router, private route: ActivatedRoute) { }
  loginToShow: boolean = false;
  account: Account = <Account>{};
  displayaccount: string = "";
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.displayaccount = params['userAccount'];
      if (this.displayaccount == null) {
        this.loginToShow = false;
      } else {
        this.loginToShow = true;
      }
    })
  }
}
