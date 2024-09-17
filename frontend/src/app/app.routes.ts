import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { CreateBinComponent } from './components/codeBin/create-bin/create-bin.component';
import { authGuard } from './auth.guard';
import { ViewSnippetComponent } from './components/view-snippet/view-snippet.component';
import { HomeComponent } from './components/home/home.component';
import { DefferdemoComponent } from './components/defferdemo/defferdemo.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},

    {path:"login",component:LoginComponent},
    {path:"demo",component:DefferdemoComponent},

    {path:"register",component:RegisterComponent},
    {path:"createbin",component:CreateBinComponent,canActivate:[authGuard]},
    {path:"about",loadComponent:()=>import("./pages/about/about.component").then(mod=>mod.AboutComponent)},
    {path:"snippet/:snippedId",component:ViewSnippetComponent},






    {path:"**",component:NotFoundComponent},


];
