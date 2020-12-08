import { Component, OnInit, Input } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor(private servicio: BdService) { }
 
  
  users={
    nombre:null,
    apellido:null,
    usuario:null,
    correo:null,
    contrasenia:null
  }

  ngOnInit(): void{
  }

  agregarUsuario(){
    
    this.servicio.agregarUsuario(this.users).subscribe(datos => {
      if(datos['resultado'] === 'OK'){
        alert(datos['mensaje']);
      }
    });
  }
  
}
