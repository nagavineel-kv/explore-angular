import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count = signal(0);
  increase(){
    this.count.update((value) => value + 1);
  }
  decrease(){
    this.count.update((value) => value - 1);
  }
  
}
