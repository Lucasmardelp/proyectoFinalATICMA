import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';
import { QuienesSomosComponenteComponent } from '../../../componente/quienesSomos/quienes-somos-componente/quienes-somos-componente.component';
import { FooterComponent } from '../../../../shared/footer/footer.component';

@Component({
  selector: 'app-quienes-somos-pagina',
  standalone: true,
  imports: [QuienesSomosComponenteComponent, NavbarComponent, FooterComponent],
  templateUrl: './quienes-somos-pagina.component.html',
  styleUrl: './quienes-somos-pagina.component.css'
})
export class QuienesSomosPaginaComponent {

}
