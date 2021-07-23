import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil-changer-mot-de-p',
  templateUrl: './profil-changer-mot-de-p.component.html',
  styleUrls: ['./profil-changer-mot-de-p.component.scss']
})
export class ProfilChangerMotDePComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  cancel(): void {
    this.router.navigate(['profil']);
  }
}
