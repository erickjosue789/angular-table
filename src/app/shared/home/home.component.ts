import { Component } from '@angular/core';
import { RecursosService } from "../../servicios/recursos.service";
import { HttpClientModule } from '@angular/common/http';
import { Foto } from '../../interfaz/foto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HttpClientModule,],
  providers: [RecursosService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  fotos:Foto[] = [];
  constructor(private recursosService: RecursosService){
    recursosService.obtenerDatos().subscribe(respuesta =>{
      this.fotos = respuesta as Array<Foto>
    })
  }
}
