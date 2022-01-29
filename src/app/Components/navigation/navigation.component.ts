import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToForums(): void {
    this.router.navigateByUrl('Forums');
  }

  goToPlay(): void {
    this.router.navigateByUrl('Play');
  }

  goToVote(): void {
    this.router.navigateByUrl('Vote');
  }

  goToStore(): void {
    this.router.navigateByUrl('Store');
  }

  goToHome(): void {
    this.router.navigateByUrl('');
  }

  goToHiScores(): void {
    this.router.navigateByUrl('HiScores');
  }
}
