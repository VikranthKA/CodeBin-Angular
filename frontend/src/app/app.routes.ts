import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { CreateBinComponent } from './components/codeBin/create-bin/create-bin.component';

export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"createbin",component:CreateBinComponent},
    {path:"about",loadComponent:()=>import("./pages/about/about.component").then(mod=>mod.AboutComponent)},

    {path:"",redirectTo:"/login",pathMatch:"full"},






    {path:"**",component:NotFoundComponent},


];
