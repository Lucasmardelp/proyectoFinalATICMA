import { Component } from '@angular/core';
import { RegistraseComponenteComponent } from '../../../componente/registrarse/registrase-componente/registrase-componente.component';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-pagina',
  standalone: true,
  imports: [RegistraseComponenteComponent, NavbarComponent, CommonModule],
  templateUrl: './registrar-pagina.component.html',
  styleUrl: './registrar-pagina.component.css'
})
export class RegistrarPaginaComponent {

}
