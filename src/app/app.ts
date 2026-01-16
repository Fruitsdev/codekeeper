import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('CodeKeeper');

  navMenusProp: any = [{ icon: 'sticky_note_2', text: 'Javascript', route: 'javascript' }];
}
