import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AiService } from '../ai.service'

@Component({
  selector: 'app-scheduler',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './scheduler.component.html',
})
export class SchedulerComponent {
  task = '';
  date = '';
  tasks: any[] = [];
  reminder = '';

  constructor(private ai: AiService) {}

  addTask() {
    this.tasks.push({ task: this.task, date: this.date });
    this.task = '';
    this.date = '';
  }

  async generateReminder() {
    this.reminder = 'Thinking...';

    try {
      this.reminder = await this.ai.getReminder(this.tasks);
    } catch (error) {
      this.reminder = 'Error getting reminder. Please try again.';
      console.error(error);
    }
  }
}