import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'new_wind_restaurant';

  constructor(private service: DataService){}

  ngOnInit(): void {
      this.service.getDataFromSQL().subscribe(res=>{
        console.log(res)
      });
  }
}
