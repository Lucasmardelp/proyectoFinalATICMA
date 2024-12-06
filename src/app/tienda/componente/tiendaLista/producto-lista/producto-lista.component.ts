import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../interface/producto.interface';
import { ProductoService } from '../../../service/producto.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './producto-lista.component.html',
  styleUrl: './producto-lista.component.css'
})
export class ProductoListaComponent {
 productos: Producto[] = []; 

 constructor(private productoServicio: ProductoService) {};

 ngOnInit(): void {

  this.cargarProducto();
 }

 cargarProducto(): void{
  this.productoServicio.cargarProductos().subscribe({
    next:(respuesta) =>{
      this.productos = respuesta;
      console.log('Productos cargados: ', this.productos);
    },
    error: (err) =>{
      console.error('Error al cargar los productos: ', err);
    }
  });

 }
}
