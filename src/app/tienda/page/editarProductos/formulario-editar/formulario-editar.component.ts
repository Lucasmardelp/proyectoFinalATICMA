import { Component } from '@angular/core';
import { EditarProductoComponent } from '../../../componente/editComponente/editar-producto/editar-producto.component';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-editar',
  standalone: true,
  imports: [EditarProductoComponent, NavbarComponent],
  templateUrl: './formulario-editar.component.html',
  styleUrl: './formulario-editar.component.css'
})
export class FormularioEditarComponent {

}
