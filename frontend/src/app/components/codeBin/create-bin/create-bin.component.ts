import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-bin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-bin.component.html',
  styleUrl: './create-bin.component.css'
})
export class CreateBinComponent {
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

  submit():void{
    console.log(this.codeForm.value)
  }

}
