import { Component, computed, linkedSignal, signal, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilePhoto } from "./profile-photo/profile-photo";
import { AccountSettings } from "./account-settings/account-settings";


type Doctor = { id: number; name: string; speciality: string };

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AccountSettings],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
