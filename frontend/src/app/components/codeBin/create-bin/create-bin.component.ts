import { DbService } from './../../../services/db.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Snippet } from '../../../../models/snippet';

@Component({
  selector: 'app-create-bin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-bin.component.html',
  styleUrl: './create-bin.component.css'
})
export class CreateBinComponent {

  constructor(private dbService:DbService){}
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
