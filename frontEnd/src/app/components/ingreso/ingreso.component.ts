import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
    [x: string]: any;
    email: string;
  password: string;
  passwordError: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  register() {
     const user = { email: this.email, password: this.password };
     this._accountService.register(user).subscribe(data => {
       console.log(data);
     });
   }


}
