import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorage } from 'angular-web-storage';
import { Products } from 'src/app/models/Products';



@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {
  user:any;
  theme = true;
  listOfData: any = [];
  loading:boolean = true;
  rate: any = '';
  constructor(private http : HttpClient) { 
  }

  ngOnInit() {
    this.http.get<Products>('https://60bffd78b8d36700175540c5.mockapi.io/api/Users').subscribe((data: any)=>{
      this.loading = true;
      this.listOfData = data;
      this.loading = false;
      console.log(data,"load data successfully");
      this.user = SessionStorage.call("Users");
    })
  }
}
