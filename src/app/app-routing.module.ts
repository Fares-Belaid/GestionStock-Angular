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
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ProfilChangerMotDePComponent } from './pages/profil/profil-changer-mot-de-p/profil-changer-mot-de-p.component';
import { ApplicationGuardService } from './services/guard/application-guard.service';

const routes: Routes = [
  {path: 'login' , component: PageLoginComponent},
  {path: 'inscrire' , component: PageInscriptionComponent},
 
  {path: '' , component: PageDashboardComponent, 
         children:
          [
            { path: 'statistiques', component: PageStatistiquesComponent,
              canActivate: [ApplicationGuardService]
            },
            { path: 'articles', component: PageArticleComponent,
              canActivate: [ApplicationGuardService]
            },
            { path: 'nouvelarticle', component: NouvelArticleComponent,
             canActivate: [ApplicationGuardService]
            },
            { path: 'mvtstk', component: PageMvtstkComponent,
             canActivate: [ApplicationGuardService]
           },
            { path: 'clients', component: PageClientComponent,
            canActivate: [ApplicationGuardService]
          },
            { path: 'fournisseurs', component: PageFournisseurComponent,
            canActivate: [ApplicationGuardService]},
            { path: 'nouveauclient', component: NouveauCltFrsComponent,
            canActivate: [ApplicationGuardService],
                data : {
                  origin: 'client'
                }
            },
            { path: 'nouveaufournisseur', component: NouveauCltFrsComponent,
            canActivate: [ApplicationGuardService],
                data: {
                  origin: 'fournisseur'
                }
            },
            { path: 'commandesclient', component: PageCmdCltFrsComponent, 
            canActivate: [ApplicationGuardService],
                data: {
                  origin: 'client'
                 }
            },
            { path: 'commandesfournisseur', component: PageCmdCltFrsComponent,
            canActivate: [ApplicationGuardService],
                data: {
                  origin: 'fournisseur'
                }
          },
            { path: 'nouvelleCommandeclt', component: NouvelleCmdCltFrsComponent,
            canActivate: [ApplicationGuardService],
              data: {
                origin: 'client'
              }
          },
            { path: 'nouvelleCommandefrs', component: NouvelleCmdCltFrsComponent,
            canActivate: [ApplicationGuardService],
              data: {
                origin: 'fournisseur'
            }
          },
            { path: 'categories', component: PageCategoriesComponent,
            canActivate: [ApplicationGuardService]
          },
            { path: 'nouvellecategorie', component: NouvelleCategorieComponent,
            canActivate: [ApplicationGuardService]},
            { path: 'utilisateurs', component: PageUtilsateurComponent,
            canActivate: [ApplicationGuardService]},
            { path: 'nouvelutilisateur', component: NouvelUtilisateurComponent,
            canActivate: [ApplicationGuardService]
          },
            { path: 'profil', component: PageProfilComponent,
            canActivate: [ApplicationGuardService]
          },
            { path: 'changermotdepasse', component: ProfilChangerMotDePComponent,
            canActivate: [ApplicationGuardService]}

         ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
