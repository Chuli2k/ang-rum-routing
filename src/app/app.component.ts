import { ApmService } from './apm.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-rum-routing';

  constructor(private apm: ApmService) { }
}
