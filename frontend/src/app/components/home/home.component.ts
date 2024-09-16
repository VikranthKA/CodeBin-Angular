import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf, ngFor
import { RouterLink } from '@angular/router'; // Import RouterLink for router navigation
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink], // Correct imports for standalone component
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class HomeComponent {

  constructor(private dbService: DbService) {}

  items: any[] = [];

  ngOnInit() {
    this.dbService.getAllSnippet().then((data: any) => {
      console.log(data, "snippets");
      this.items = data;
    });
  }
}
