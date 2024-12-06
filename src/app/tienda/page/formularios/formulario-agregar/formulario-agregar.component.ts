import { Component, inject } from '@angular/core';
import { FormularioProductoComponent } from '../../../componente/formulario-producto/formulario-producto.component';
import { Router, RouterModule } from '@angular/router';
import { Producto } from '../../../interface/producto.interface';
import { ProductoService } from '../../../service/producto.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';

@Component({
  selector: 'app-formulario-agregar',
  standalone: true,
  imports: [FormularioProductoComponent,NavbarComponent],
  templateUrl: './formulario-agregar.component.html',
  styleUrl: './formulario-agregar.component.css'
})
export class FormularioAgregarComponent {
}
