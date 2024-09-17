import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf, ngFor
import { RouterLink } from '@angular/router'; // Import RouterLink for router navigation
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {

  constructor(private dbService: DbService) {}
  items: any[] = [];

  async deleteSnippetByIdHome(snippedId:string){
    await this.dbService.deleteSnippetById(snippedId)
    const filterSnipped = this.items.filter(item=>item.id!==snippedId)
    this.items = filterSnipped

  }


  ngOnInit() {
    this.dbService.getAllSnippet().then((data: any) => {
      console.log(data, "snippets");
      this.items = data;
    });
  }
}
