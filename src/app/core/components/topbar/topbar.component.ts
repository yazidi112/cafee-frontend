import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthenticationService } from '../../../authentication/services/authentication.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  authenticatedUser!: User|undefined;

  constructor(private router:Router,private authService :AuthenticationService) { }

  ngOnInit(): void {
    this.authenticatedUser = this.authService.getAuthenticatedUSer();
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }

}
