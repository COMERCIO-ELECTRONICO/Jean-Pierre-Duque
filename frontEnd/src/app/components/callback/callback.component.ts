import { Component, OnInit } from '@angular/core';

import { AccountService } from 'src/app/Services';


@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {


  constructor( private auth: AccountService) { }

  ngOnInit() {
    this.auth.handleAuthCallback();
  }

}
