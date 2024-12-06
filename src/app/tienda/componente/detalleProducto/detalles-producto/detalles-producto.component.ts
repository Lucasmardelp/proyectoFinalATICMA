import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../../service/producto.service';
import { Producto } from '../../../interface/producto.interface';

@Component({
  selector: 'app-detalles-producto',
  standalone: true,
  imports: [NavbarComponent,CommonModule,RouterModule],
  templateUrl: './detalles-producto.component.html',
  styleUrl: './detalles-producto.component.css'
})
export class DetallesProductoComponent {
  id: string | null = null;
  producto: Producto | undefined;
  
  constructor(private route: ActivatedRoute, private productoServicio: ProductoService){}
  
  ngOnInit():void{
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
      this.router.navigateByUrl('shop');
    },
    error : (error) =>{
      console.log("Ha ocurrido un error", error)
    }
  })
 }
}
