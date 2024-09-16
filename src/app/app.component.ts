import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './shared/services/flowbite.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NavbarComponent } from "./layout/additions/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxSpinnerModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'socialMedia';

  constructor(private _flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this._flowbiteService.loadFlowbite(flowbite => {
    })
  }
  
}
