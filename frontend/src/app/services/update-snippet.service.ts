import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateSnippetService {
  edit:boolean=false

  constructor() { }

  updateSnippetByService(){
    this.edit = true 
    console.log(this.edit,"serviceEdit")
    return 
  }

}
