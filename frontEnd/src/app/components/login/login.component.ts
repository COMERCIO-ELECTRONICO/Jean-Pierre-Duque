import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/Router';
import { UsersService } from 'src/app/Services/Ingreso.service';
// import {LoginService } from '../../Services/Login.service';
// import { User } from 'src/app/modules/user.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
 export class LoginComponent implements OnInit {
  //credenciales
  // public user: User;
    // firstName: string;
    // lastName:string;
    // username: string;
    // password: string;
    email:string;
    password:string;
 constructor(public userService: UsersService) {}
      // this.user= new User();
      login(){
          const user={email: this.email, password: this.password};
          this.userService.login(user).subscribe(data =>{
              console.log(data);
              alert('Inicio de sesion procesada');

          });

          // console.log(this.firstName);
          // console.log(this.lastName);
          // console.log(this.username);
          // console.log(this.password);
}
  // // validateLogin(){
  // //     if (this.user.username && this.user.password) {
  // //         this._loginService.validateLogin(this.user)
  // //         .subscribe(result =>{
  // //             console.log('result is',result);
  // //             console.log(result);
  // //
  // //
  // //         }, error=>{
  // //            console.log('error is',error);
  // //
  // //         });
  // //     }else{
  // //         alert('Ingrese el nombre de usuario y contraseña');
  // //     }
  // // }

  ngOnInit(): void {

      // this._loginService.agregarUsuario('http://localhost:1337/login?email='this.email).subscribe((resultget)=>{
      //     console.log('Prueba');
      //
      //     console.log(resultget);
      //
      // })
  }


}
