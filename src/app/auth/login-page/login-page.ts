import { Component } from '@angular/core';
import { Navbar } from "../../public/components/navbar/navbar";
import { LandingPage } from "../../public/landing-page/landing-page";

@Component({
  selector: 'app-login-page',
  imports: [Navbar, LandingPage],
  templateUrl: './login-page.html',
})
export class LoginPage { }
