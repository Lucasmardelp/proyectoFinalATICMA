import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interface/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  urlBase: string = 'http://localhost:3000/productos'

  cargarProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.urlBase)
  }

  postProductos(producto: Producto): Observable<Producto>{
    return this.http.post<Producto>(this.urlBase, producto)
  }

  getProductoId(id: string | null): Observable<Producto>{
    return this.http.get<Producto>(`${this.urlBase}/${id}`);
  }

  editarProducto(id: string | null, producto: Producto):Observable<Producto>{
    return this.http.put<Producto>(`${this.urlBase}/${id}`, producto);
  }

  eliminarProducto(id:string):Observable<Producto>{
    return this.http.delete<Producto>(`${this.urlBase}/${id}`);
  }
  

}
