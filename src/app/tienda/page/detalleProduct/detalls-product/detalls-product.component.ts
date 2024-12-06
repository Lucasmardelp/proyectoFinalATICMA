import { Component } from '@angular/core';
import { DetallesProductoComponent } from "../../../componente/detalleProducto/detalles-producto/detalles-producto.component";
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';

@Component({
  selector: 'app-detalls-product',
  standalone: true,
  imports: [DetallesProductoComponent, NavbarComponent],
  templateUrl: './detalls-product.component.html',
  styleUrl: './detalls-product.component.css'
})
export class DetallsProductComponent {

}
