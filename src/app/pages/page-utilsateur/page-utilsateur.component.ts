import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-utilsateur',
  templateUrl: './page-utilsateur.component.html',
  styleUrls: ['./page-utilsateur.component.scss']
})
export class PageUtilsateurComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nouvelUtilsateur(): void{
    this.router.navigate(['nouvelutilisateur']);
  }

}
