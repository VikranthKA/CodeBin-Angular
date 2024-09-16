import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-snippet',
  standalone: true,
  imports: [],
  templateUrl: './view-snippet.component.html',
  styleUrl: './view-snippet.component.css'
})
export class ViewSnippetComponent {

  codeSnipped = {
    title:"",
    code:"",
    by:"",
    id:""
  }
  constructor(
    private dbService:DbService,
    private route:ActivatedRoute,
  ){
  }

  ngOnInit(){
    const snippedId = this.route.snapshot.paramMap.get('snippedId')
    this.dbService.getSnippetById(snippedId!).then((data:any)=>{
        this.codeSnipped = data
    })
    .catch(error=>console.log(error))
  }

}
