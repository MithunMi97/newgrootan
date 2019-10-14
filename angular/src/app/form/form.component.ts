import { Component, OnInit } from '@angular/core';
import { reg } from '../modul/reg';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  reg =new reg()
save=()=>{
  console.log(this.reg)

}
Country=(value)=>{
this.reg.Country=value
}
  ngOnInit() {
  }

}
