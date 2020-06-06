import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/Router';
import {LoginService} from '../../Services/Login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //credenciales

  email: '';
  password: '';
  rol?: '';


  constructor(private _ActivatedRoute: ActivatedRoute, private _loginService: LoginService) {
  }

  ngOnInit(): void {
   /* Login() {
      this._loginService
        .metodoGet('http://localhost:1337/User?usuario=' + this.user + '&&clave=' + this.clave)
        .subscribe((resultadoMetodoGet: any) => {

          this.id = resultadoMetodoGet[0].id;
          this.role = resultadoMetodoGet[0].id_role.id;

          if (this.role === 1) {

            this._router.navigate(['/cliente/' + this.id]);
          } else {

            this._router.navigate(['/home/' + this.id])
          }

        });
    }
 */ }
}
