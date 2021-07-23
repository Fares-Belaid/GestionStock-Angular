import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrls: ['./nouvelle-cmd-clt-frs.component.scss']
})
export class NouvelleCmdCltFrsComponent implements OnInit {

  origin = "";

  constructor( private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin= data.origin;
    })
  }
  cancel() : void {
    if (this.origin === 'client') {
      this.router.navigate(['/commandesclient']);
    } else if (this.origin === 'fournisseur') {
      this.router.navigate(['/commandesfournisseur']);
    }
    
  }
}
