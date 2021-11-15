import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	nombre:any;
	fecha:any;
	direccion:any;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  vacuname(){

  	console.log('entre...',this.nombre)


  	this.router.navigate(['/minsa-carne-vacunacion'], { queryParams: { nombre: this.nombre,fecha:this.fecha,direccion:this.direccion} });
  }

}
