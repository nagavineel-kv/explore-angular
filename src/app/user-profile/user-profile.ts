import { Component } from '@angular/core';
import { ProfilePhoto } from '../profile-photo/profile-photo';
import { UserBio } from "../user-bio/user-bio";

@Component({
  selector: 'app-user-profile',
  imports: [ProfilePhoto, UserBio],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {

}
