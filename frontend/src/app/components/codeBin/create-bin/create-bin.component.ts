import { UpdateSnippetService } from './../../../services/update-snippet.service';
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
  styleUrls: ['./create-bin.component.css'] // Corrected to `styleUrls` (not `styleUrl`)
})
export class CreateBinComponent {

  edit: boolean = false;
  snippetId: string = "";

  title = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);

  code = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);

  codeForm = new FormGroup({
    title: this.title,
    code: this.code
  });

  constructor(
    private dbService: DbService,
    private updateSnippet: UpdateSnippetService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.snippetId = params.get('snippetId') || '';
      this.edit = !!this.snippetId;

      if (this.snippetId) {
        this.dbService.getSnippetById(this.snippetId).then((data: any) => {
          this.codeForm.patchValue({
            title: data.title,
            code: data.code
          });
        }).catch(error => {
          console.error('Error fetching snippet:', error);
        });
      }
    });
  }

  async updateSnippetById() {
    if (this.codeForm.valid) {
      try {
        await this.dbService.updateSnippetById(this.snippetId, this.codeForm.value as Snippet);
      } catch (error) {
        console.error('Error updating snippet:', error);
      }
    }
  }

  async submit() {
    if (this.codeForm.valid) {
      try {
        await this.dbService.createCodeSnippet(this.codeForm.value as Snippet);
      } catch (error) {
        console.error('Error creating snippet:', error);
      }
    }
  }
}
