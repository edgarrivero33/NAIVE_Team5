import { Component, Input, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  dataList:any;

  @Input()
  display:boolean;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<any>("assets/new_filename.json").subscribe((data) => this.dataList = data);
  }

}