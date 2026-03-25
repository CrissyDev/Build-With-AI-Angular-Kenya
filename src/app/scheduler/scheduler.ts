import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AiService } from '../ai.service';

@Component({
  selector: 'app-scheduler',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './scheduler.html',
  styleUrls: ['./scheduler.css']
})
export class Scheduler {
  name = '';
  email = '';
  type = 'Meet';
  date = '';
  time = '';
  reminderEnabled = true;
  is24Hour = false;

  tasks: any[] = [];
  aiReminder = '';

  constructor(private ai: AiService) {}

  addTask() {
    const task = {
      name: this.name,
      email: this.email,
      type: this.type,
      date: this.date,
      time: this.time
    };

    this.tasks.push(task);

    this.name = '';
    this.email = '';
    this.date = '';
    this.time = '';
  }

  async generateReminder() {
    this.aiReminder = 'Thinking...';

    try {
      this.aiReminder = await this.ai.getReminder(this.tasks);
    } catch (error) {
      this.aiReminder = 'Error getting reminder';
      console.error(error);
    }
  }
}