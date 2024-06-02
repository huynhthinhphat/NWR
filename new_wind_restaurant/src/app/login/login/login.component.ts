import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Account } from '../../model/account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  account: Account = <Account>{};
  isButtonAdmin: boolean = true;
  isButtonNV: boolean = true;
  constructor(private service: DataService, private router: Router) { }
  adminButton() {
    this.isButtonAdmin = false; // Kích hoạt nút
    this.isButtonNV = true;
  }

  NVButton() {
    this.isButtonAdmin = true; // Vô hiệu hóa nút
    this.isButtonNV = false;
  }

  disableButton(){
    this.isButtonAdmin = true; // Vô hiệu hóa nút
    this.isButtonNV = true;
  }

  login(account: Account) {
    let dem = 0;
    this.service.getDataFromJson().subscribe(res => {
      if (res && res.length > 0) {
        res.forEach((data: any) => {
          if (data.user === account.user && data.password == account.password && data.typeAccount == "admin") {
            dem++;
            this.adminButton();
            return;
          } else if (data.user === account.user && data.password == account.password && data.typeAccount == "nvienquen") {
            dem++;
            this.NVButton();
            return;
          }
        });
        console.log(dem)
        if (dem == 1) {
          this.router.navigate(['login']);
        } else {
          console.log("Tài khoản hoặc mật khẩu sai");
          this.disableButton();
        }
      } else {
        confirm("Tài khoản hoặc mật khẩu sai")
      }
    })
  }
}
