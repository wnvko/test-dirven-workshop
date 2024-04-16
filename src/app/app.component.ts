import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { IGX_BUTTON_GROUP_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IGX_INPUT_GROUP_DIRECTIVES, IGX_BUTTON_GROUP_DIRECTIVES, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public number: number | undefined = undefined;
}
