import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { NouveauCltFrsComponent } from './composants/nouveau-clt-frs/nouveau-clt-frs.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PageCategoriesComponent } from './categories/page-categories/page-categories.component';
import { NouvelleCategorieComponent } from './categories/nouvelle-categorie/nouvelle-categorie.component';
import { PageUtilsateurComponent } from './pages/page-utilsateur/page-utilsateur.component';
import { NouvelUtilisateurComponent } from './pages/nouvel-utilisateur/nouvel-utilisateur.component';

const routes: Routes = [
  {path: 'login' , component: PageLoginComponent},
  {path: 'inscrire' , component: PageInscriptionComponent},
 
  {path: '' , component: PageDashboardComponent, 
         children:
          [
            { path: 'statistiques', component: PageStatistiquesComponent},
            { path: 'articles', component: PageArticleComponent},
            { path: 'nouvelarticle', component: NouvelArticleComponent},
            { path: 'mvtstk', component: PageMvtstkComponent},
            { path: 'clients', component: PageClientComponent},
            { path: 'fournisseurs', component: PageFournisseurComponent},
            { path: 'nouveauclient', component: NouveauCltFrsComponent},
            { path: 'nouveaufournisseur', component: NouveauCltFrsComponent},
            { path: 'commandesclient', component: PageCmdCltFrsComponent},
            { path: 'commandesfournisseur', component: PageCmdCltFrsComponent},
            { path: 'nouvelleCommandeclt', component: NouvelleCmdCltFrsComponent},
            { path: 'nouvelleCommandefrs', component: NouvelleCmdCltFrsComponent},
            { path: 'categories', component: PageCategoriesComponent},
            { path: 'nouvellecategorie', component: NouvelleCategorieComponent},
            { path: 'utilisateurs', component: PageUtilsateurComponent},
            { path: 'nouvelutilisateur', component: NouvelUtilisateurComponent}








         ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
