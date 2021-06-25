import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { Products } from 'src/app/models/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  user:any;
  listOfData: any = [];
  size: NzButtonSize = 'large';
  checked = false;
  pageSize: number = 10;
  loading = true;
  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.http.get<Products>('https://60bffd78b8d36700175540c5.mockapi.io/api/Users').subscribe((data: any)=>{
      this.listOfData = data;
      this.loading = false;
      console.log(data,"load data successfully");
      this.user = sessionStorage.SetStore("Users");
    })
  }

}
