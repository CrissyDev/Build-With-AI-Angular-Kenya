import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../app/enviroments/enviroments';

@Injectable({ providedIn: 'root' })
export class AiService {

  apiKey = environment.geminiApiKey;

  async getReminder(tasks: any[]) {
    const prompt = `Here are my tasks: ${JSON.stringify(tasks)}.
Suggest a helpful reminder for me.`;

    const res = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.apiKey}`,
      {
        contents: [{ parts: [{ text: prompt }] }]
      }
    );

    return res.data.candidates[0].content.parts[0].text;
  }
}