import { Component } from '@angular/core';
import { Account } from '../../model/account';
import { DataService } from '../../service/data.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  account: Account = <Account>{};
  public typeAccount = ['admin', 'nvienquen']
  constructor(private service: DataService, private router: Router) {
    this.account = new Account('', '', 'admin')
  }

  register(account: Account) {
    let dem = 0;
    this.service.getDataFromJson().subscribe(res1 => {
      if (res1) {
        res1.forEach((data: any) => {
          if (data.user === account.user) {
            dem++;
            return;
          }
        });
        if (dem !== 0) {
          confirm("Tài khoản mật khẩu đã tồn tại")
        } else {
          //thêm
          this.service.pushToJson(account).subscribe(res2 => {
            this.service.pushToSQL().subscribe(res3 => {
              this.router.navigate(['']);
              confirm("Tạo thành công");
            });
          });
        }
      }
    })
  }
}
