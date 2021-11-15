import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-minsa-carne-vacunacion',
  templateUrl: './minsa-carne-vacunacion.component.html',
  styleUrls: ['./minsa-carne-vacunacion.component.css']
})
export class MinsaCarneVacunacionComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

nombre:any;
edad:any;
fecha:any;
hoy:any;
output:any;
direccion:any;
ngOnInit() {
  this.route.queryParams.subscribe(params => {
    console.log(params)

    this.hoy=new Date()

	let parts_of_date = params.fecha.split("/");

	this.output = new Date(+parts_of_date[2], parts_of_date[1] - 1, +parts_of_date[0]);


    console.log(this.output)
    this.nombre=params.nombre
    this.fecha=params.fecha
    this.edad=(this.hoy-this.output)/31556952000

    this.edad=parseInt(this.edad)
    this.direccion=params.direccion
    console.log('edad',this.edad)
  });
}


}
