import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Producto } from '../../interface/producto.interface';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {
  productos: Producto[] = []; 
  id: string | null = null;
  producto: Producto | undefined;
  constructor(private productoServicio: ProductoService, private route: ActivatedRoute) {};
 
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
  
  editarProducto():void{
    this.id = this.route.snapshot.paramMap.get('id'); 
    console.log('Producto ID: ', this.id );
    if(this.id){
      this.productoServicio.getProductoId(this.id).subscribe((producto) =>{
        this.producto = producto;
      })
    }
  }
  router = inject(Router);

 elimiarProducto(id:string){
  this.productoServicio.eliminarProducto(id).subscribe({
    next:() =>{
      this.router.navigateByUrl('inventario');
    },
    error : (error) =>{
      console.log("Ha ocurrido un error", error)
    }
  })
 }

}
