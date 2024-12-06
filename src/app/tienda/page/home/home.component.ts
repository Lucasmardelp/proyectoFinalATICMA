import { Component } from '@angular/core';
import { NavbarComponent } from "../../../shared/navbar/navbar.component";
import { ProductoListaComponent } from '../../componente/tiendaLista/producto-lista/producto-lista.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, ProductoListaComponent, CommonModule, FooterComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
