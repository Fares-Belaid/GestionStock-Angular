import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { BoutonActionComponent } from './composants/bouton-action/bouton-action.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { DetailMvtStkArticleComponent } from './composants/detail-mvt-stk-article/detail-mvt-stk-article.component';
import { DetailMvtStkComponent } from './composants/detail-mvt-stk/detail-mvt-stk.component';
import { DetailCltFrsComponent } from './composants/detail-clt-frs/detail-clt-frs.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { NouveauCltFrsComponent } from './composants/nouveau-clt-frs/nouveau-clt-frs.component';
import { DetailCmdCltFrsComponent } from './composants/detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { DetailCmdComponent } from './composants/detail-cmd/detail-cmd.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PageCategoriesComponent } from './categories/page-categories/page-categories.component';
import { NouvelleCategorieComponent } from './categories/nouvelle-categorie/nouvelle-categorie.component';
import { PageUtilsateurComponent } from './pages/page-utilsateur/page-utilsateur.component';
import { DetailUtilisateurComponent } from './pages/detail-utilisateur/detail-utilisateur.component';
import { NouvelUtilisateurComponent } from './pages/nouvel-utilisateur/nouvel-utilisateur.component';
import { ProfilChangerMotDePComponent } from './pages/profil/profil-changer-mot-de-p/profil-changer-mot-de-p.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    BoutonActionComponent,
    NouvelArticleComponent,
    PageMvtstkComponent,
    DetailMvtStkArticleComponent,
    DetailMvtStkComponent,
    DetailCltFrsComponent,
    PageClientComponent,
    PageFournisseurComponent,
    NouveauCltFrsComponent,
    DetailCmdCltFrsComponent,
    DetailCmdComponent,
    PageCmdCltFrsComponent,
    NouvelleCmdCltFrsComponent,
    PageCategoriesComponent,
    NouvelleCategorieComponent,
    PageUtilsateurComponent,
    DetailUtilisateurComponent,
    NouvelUtilisateurComponent,
    ProfilChangerMotDePComponent,
    PageProfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
