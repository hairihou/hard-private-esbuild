import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HardPrivateService } from './services/hard-private.service';
import { SoftPrivateService } from './services/soft-private.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'hard-private-esbuild';

  private softPrivateService = inject(SoftPrivateService);
  private hardPrivateService = inject(HardPrivateService);

  ngOnInit(): void {
    console.log(this.softPrivateService.getPrivateField());
    console.log(this.hardPrivateService.getPrivateField());
  }
}
