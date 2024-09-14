import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { firebaseConfig } from '../firebase/firebaseConfig';
import {initializeApp} from "firebase/app"
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,
            HeaderComponent,
  ],

    
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
constructor(){
  const app = initializeApp(firebaseConfig);
}}
