import { Component, signal } from '@angular/core';
import { Scheduler } from './scheduler/scheduler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Scheduler],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('smart-tracker-app');
}