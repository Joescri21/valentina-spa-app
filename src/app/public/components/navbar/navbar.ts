import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',

  styles: `
  .navbar {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin: 0 auto;
  }
  section {
    width: 50%;
    display: flex;
    gap: 1rem;
  }
  .logo{
    font-family: "Coiny", system-ui;
    font-weight: 400;
    font-style: normal;
    font-size: 2rem;
  }
  .nav__menu{
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
  }
  .nav__menu--item{
    text-decoration: none;
    color: #000;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .nav__menu--item:hover{
    color: #E91E63;
    font-size: 1.3rem;
  }
  .nav__menu--boton{
    background-image: linear-gradient(to right, #E91E63 0%, #B21F83 51%, #7B1FA2 100%);

    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
    outline: none;
    border: none;
  }
  .nav__menu--boton:hover{
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
  `
})
export class Navbar { }
