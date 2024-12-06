import { Component } from '@angular/core';
import { ContactarComponenComponent } from '../../../componente/contactar-componen/contactar-componen.component';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';

@Component({
  selector: 'app-contactar-page',
  standalone: true,
  imports: [ContactarComponenComponent, NavbarComponent],
  templateUrl: './contactar-page.component.html',
  styleUrl: './contactar-page.component.css'
})
export class ContactarPageComponent {

}
