import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private dbService:DbService){

  }

  items:any[] = []
  ngOnInit(){
    this.dbService.getAllSnippet().then((data:any)=>{
      console.log(data,"snippets")
      this.items = data
    })
  }

}
