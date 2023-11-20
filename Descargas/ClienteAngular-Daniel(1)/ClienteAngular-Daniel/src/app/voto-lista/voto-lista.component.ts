import { Component, OnInit } from '@angular/core';
import { Voto } from '../modelo/voto.interface';
import { VotoListaService } from '../voto-lista.service';
@Component({
  selector: 'app-voto-lista',
  templateUrl: './voto-lista.component.html',
  styleUrls: ['./voto-lista.component.css']
})
export class VotoListaComponent implements OnInit {

  voto: Voto[]= []

  constructor(private votoListaService: VotoListaService){}

  ngOnInit(): void {
  this.votoListaService.getAll().subscribe((data: Voto[])=>{

    this.voto = data;
  })
  }

}
