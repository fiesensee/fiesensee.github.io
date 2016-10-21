import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  page = 'home';

  states = {
    'home': true,
    'projects': false,
    'blog': false
  };

  setAllStatesFalls(): void {
    this.states.home = false;
    this.states.projects = false;
    this.states.blog = false;
  }

  setActiveIcon(page: string): void {
    this.setAllStatesFalls();
    this.states[page] = true;
  }

  changeContent(panel: string): void {
    this.page = panel;
    this.setActiveIcon(panel);
  }
}
