import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'new_wind_restaurant';
  // topItems: MenuItem[] = [];
  // leftItems: MenuItem[] = [];
  isVisible: boolean = true;
  displayaccount: string = "";
  firstFiveCharacters: string = "";
  icon_log_out = faArrowRightFromBracket;
  icon_user = faUser;
  icon_house = faHouse;
  icon_question = faQuestionCircle;
  constructor(private service: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getDataFromSQL();
    this.displayMainWeb();
    // this.topItems = [
    //   {
    //     label: 'NEW WIND RESTAURANT',
    //     icon: 'pi pi-fw pi-home',
    //     routerLink: ['/'],
    //   },
    // ]
    //   this.leftItems = [
    //     {
    //       label: 'Đăng ký',
    //       icon: 'pi pi-fw pi-home',
    //       command: () => this.navigateToRegister(),
    //     },
    //     {
    //       label: 'Tài khoản',
    //       icon: 'pi pi-fw pi-user-edit',
    //       command: () => this.navigateToLogin(),
    //     },
    //     {
    //       label: 'Doanh mục',
    //       icon: 'pi pi-fw pi-list',
    //       routerLink: ['/login'],
    //     },
    //     {
    //       label: 'Thức ăn',
    //       icon: 'pi pi-fw pi-cart-minus',
    //       items: [
    //         {
    //           label: 'Đồ nóng',
    //         },
    //         {
    //           label: 'Đồ lạnh',
    //         }
    //       ]
    //     },
    //     {
    //       label: 'Thống kê',
    //       icon: 'pi pi-fw pi-share-alt',
    //       command: () => this.navigateToStatistics(),
    //     },
    //   ]
  }

  getDataFromSQL() {
    this.service.getDataFromSQL().subscribe(res => {
    });
  }

  displayMainWeb() {
    this.route.queryParams.subscribe(params => {
      this.firstFiveCharacters = params['userAccount'];
     
      if (this.firstFiveCharacters == null) {
        this.isVisible = false;
      } else {
        this.isVisible = true;
      }

      if (this.firstFiveCharacters == null) {
        this.firstFiveCharacters = ''
      } else {
        if (this.firstFiveCharacters.length > 5) {
          this.displayaccount = this.firstFiveCharacters.substring(0, 5) + '...';
        } else {
          this.displayaccount = this.firstFiveCharacters.substring(0, 5);
        }
      }
    })
  }

  BDK() {
    this.router.navigate(['/trangchu/register'], { queryParams: { userAccount: this.displayaccount } });
  }

  DM() {
    this.router.navigate(['/trangchu/login'], { queryParams: { userAccount: this.displayaccount } });
  }

  TK() {
    this.router.navigate(['/trangchu/thongke'], { queryParams: { userAccount: this.displayaccount } });
  }
}
