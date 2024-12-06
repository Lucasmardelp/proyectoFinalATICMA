import { Component } from '@angular/core';
import { ProductoListaComponent } from '../../componente/tiendaLista/producto-lista/producto-lista.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { ListadoProductosComponent } from '../../componente/listado-productos/listado-productos.component';

@Component({
  selector: 'app-shop-productos',
  standalone: true,
  imports: [ProductoListaComponent, CommonModule, NavbarComponent, ListadoProductosComponent],
  templateUrl: './shop-productos.component.html',
  styleUrl: './shop-productos.component.css'
})
export class ShopProductosComponent {

}
