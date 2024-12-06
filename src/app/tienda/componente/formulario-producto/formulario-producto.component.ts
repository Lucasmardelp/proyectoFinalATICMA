import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Producto } from '../../interface/producto.interface';
import { Router, RouterEvent, RouterModule } from '@angular/router';
import { ProductoService } from '../../service/producto.service';
import { Form, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-formulario-producto',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css'
})
export class FormularioProductoComponent {
imagenRuta: string = '';

productoForm: FormGroup;
router = inject(Router);

constructor(private fb: FormBuilder, private productoService: ProductoService){
  this.productoForm = this.fb.group({
    id: [this.generarId()],
    nombre: ['', [Validators.required]],
    precio: [0,[Validators.required, Validators.min(0)]],
    descripcion: ['', Validators.required],
    imagen: [''],
  });
  console.log(this.productoForm + "recibido");
}

agregarProducto(){

  if(this.productoForm.valid){
    const precio = parseFloat(this.productoForm.value.precio).toFixed(3);
    const producto = {...this.productoForm.value, imagen: this.imagenRuta, precio: precio,};
    
    console.log('Datos enviados:', producto);
    this.productoService.postProductos(producto).subscribe({
      next: (response) => {
        console.log('Producto agregado con éxito.', response);
        this.productoForm.reset();
        this.router.navigateByUrl('');
      },

    
      error:(err) =>{
        console.error('Error al agregar el producto', err);
      }
    });
  }else{
    console.log('El formulario contiene errores');
  }
}

onFileSelected(event: any):void{
  const file = event.target.files[0];
  if(file){
   const reader = new FileReader();
   reader.onload = () => {
    this.imagenRuta = reader.result as string;
   };
   reader.readAsDataURL(file);
  }
}

generarId(): string{
  const numeroAleatorio = Math.floor(Math.random() * 1000000);
return 'id' + numeroAleatorio;
}


}
