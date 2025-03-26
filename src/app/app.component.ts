import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ModalComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  isModalActive(): boolean {
    return this.route.snapshot.children.some(child => child.outlet === 'modal');
  }
}
