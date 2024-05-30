import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  servicios:any[] = [
    {"texto": ["Lavar", "$65", "1-2 horas", "Lun a Vie"]},
    {"texto": ["Limpiar", "$30", "2-3 horas", "Lun a Mie"]},
    {"texto": ["Sacar la basura", "$10", "30 min", "Lun a Sab"]},
  ]
}
