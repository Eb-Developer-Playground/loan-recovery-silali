import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'loan-recovery';

  constructor(private matIconRegistry: MatIconRegistry) {}

  onOnInit() {
    this.matIconRegistry.setDefaultFontSetClass('material-symbols-outlined');
  }
}
