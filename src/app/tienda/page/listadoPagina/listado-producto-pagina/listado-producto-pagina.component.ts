import { Component } from '@angular/core';
import { ListadoProductosComponent } from '../../../componente/listado-productos/listado-productos.component';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-producto-pagina',
  standalone: true,
  imports: [ListadoProductosComponent, NavbarComponent, CommonModule],
  templateUrl: './listado-producto-pagina.component.html',
  styleUrl: './listado-producto-pagina.component.css'
})
export class ListadoProductoPaginaComponent {

}
