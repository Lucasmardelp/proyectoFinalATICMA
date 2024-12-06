import { Routes } from '@angular/router';
import { HomeComponent } from './tienda/page/home/home.component';
import { FormularioAgregarComponent } from './tienda/page/formularios/formulario-agregar/formulario-agregar.component';
import { ShopProductosComponent } from './tienda/page/inventarioProductos/shop-productos.component';
import { DetallesProductoComponent } from './tienda/componente/detalleProducto/detalles-producto/detalles-producto.component';
import { DetallsProductComponent } from './tienda/page/detalleProduct/detalls-product/detalls-product.component';
import { Component } from '@angular/core';
import { EditarProductoComponent } from './tienda/componente/editComponente/editar-producto/editar-producto.component';
import { FormularioEditarComponent } from './tienda/page/editarProductos/formulario-editar/formulario-editar.component';

export const routes: Routes = [
    {
      path:'',
      component: HomeComponent
    },
    {
    
        path:'agregarProductos',
        loadComponent: () => import('./tienda/page/formularios/formulario-agregar/formulario-agregar.component').then(m=>m.FormularioAgregarComponent)
    },
    
    {
      path:'productosDetalle/:id',
      loadComponent: () => import('./tienda/page/detalleProduct/detalls-product/detalls-product.component').then(m=>m.DetallsProductComponent)
     
    },
    {
      path: 'editarProducto/:id',
      loadComponent: () => import('./tienda/page/editarProductos/formulario-editar/formulario-editar.component').then(m=>m.FormularioEditarComponent)
    },
    {
      path:'registrarse',
      loadComponent: () => import('./tienda/page/registrarPage/registrar-pagina/registrar-pagina.component').then(m=>m.RegistrarPaginaComponent)
    },
    {
      path:'quieneSomos',
      loadComponent: () => import('./tienda/page/quienesSomosPag/quienes-somos-pagina/quienes-somos-pagina.component').then(m=>m.QuienesSomosPaginaComponent)
    },
    {
      path:'contactar',
      loadComponent:() => import('./tienda/page/contactarPagina/contactar-page/contactar-page.component').then(m=>m.ContactarPageComponent)
    },
    {
      path:'inventario',
      loadComponent:() => import('./tienda/page/listadoPagina/listado-producto-pagina/listado-producto-pagina.component').then(m=>m.ListadoProductoPaginaComponent)
    }
   

];
