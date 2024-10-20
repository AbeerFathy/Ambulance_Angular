import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  counter: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout(): void {
    localStorage.removeItem('usertoken');
    this.router.navigate(['/Login']);
  }

  trackRequest(): void {
    alert('سيتم تتبع طلبك.');
  }
}






