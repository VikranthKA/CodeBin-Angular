import { DbService } from './../../../services/db.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Snippet } from '../../../../models/snippet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-bin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-bin.component.html',
  styleUrl: './create-bin.component.css'
})
export class CreateBinComponent {

  constructor(private dbService:DbService,    private route:ActivatedRoute,
  ){}

  edit:boolean=true

  ngOnInit(){
    if(this.edit){
      const snippetId = this.route.snapshot.paramMap.get("snipppedId")
      this.dbService.getSnippetById(snippetId!).then((data:any)=>{
        console.log(data,"edit")
    })
    .catch(error=>console.log(error))

      // this.title = 
    }
  }


  title=new FormControl("",[
    Validators.required,
    Validators.minLength(2),


  ])

  code= new FormControl("",[
    Validators.required,
    Validators.minLength(2),
  ])

  codeForm = new FormGroup({
    title:this.title,
    code:this.code
  })

  async submit(){

    await this.dbService.createCodeSnippet(this.codeForm.value as Snippet)
  }

}
