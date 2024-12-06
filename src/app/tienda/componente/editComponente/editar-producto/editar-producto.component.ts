import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductoService } from '../../../service/producto.service';
import { Producto } from '../../../interface/producto.interface';
import { __param } from 'tslib';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent implements OnInit {

  
  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe({
        next:(params) =>{
         this.id = params.get('id');
         this.productoServicio.getProductoId(this.id).subscribe({
          next:(producto: Producto) => {
            this.formulario.get('id')?.setValue(producto.id);
            this.formulario.get('nombre')?.setValue(producto.nombre);
            this.formulario.get('precio')?.setValue(producto.precio);
            this.formulario.get('descripcion')?.setValue(producto.descripcion);
            this.formulario.get('imagen')?.setValue(producto.imagen);
            
          }
         })
        }
      })
  }

  imagenRuta: string = '';

  id:string | null =  '' ;

  
fb = inject(FormBuilder)
formulario = this.fb.nonNullable.group(
  {    
    id:['', Validators.required],
    nombre: ['', [Validators.required]],
    precio: [0,[Validators.required, Validators.min(0)]],
    descripcion: ['', Validators.required],
    imagen: [''],
}
);
  
activatedRoute = inject(ActivatedRoute);
productoServicio = inject(ProductoService);
router = inject(Router);

editarProducto(){
  if(this.formulario.invalid) return
  const producto = this.formulario.getRawValue();

  this.productoServicio.editarProducto(this.id, producto).subscribe({
    next:() => {
       console.log("La tarea ha sido actualizada");
    },
    error: (error: Error) => {
      console.log(error.message);
    }
  })
  this.router.navigateByUrl('');
}

}
