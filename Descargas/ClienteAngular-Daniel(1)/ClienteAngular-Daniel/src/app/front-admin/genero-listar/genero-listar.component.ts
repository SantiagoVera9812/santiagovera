import { Component, OnInit } from '@angular/core';
import { Genero } from 'src/app/modelo/genero.interface';
import { GeneroService } from 'src/app/service/genero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genero-listar',
  templateUrl: './genero-listar.component.html',
  styleUrls: ['./genero-listar.component.css']
})
export class GeneroListarComponent implements OnInit {

  generos: Genero[] = [];

  clickedGenero: Genero | null = null;
  constructor(private generoService: GeneroService, private router: Router) {

  }

  ngOnInit(): void {
    this.cargar();
    this.generoService.lista().subscribe(data => {

      this.generos = data;
    })

    this.generoService.generoClick$.subscribe((genero) =>
      this.handleGeneroClick(genero));
  }

  handleGeneroClick(genero: Genero) {
    this.clickedGenero = genero;
    this.router.navigate(['/recomendar-lista', { genero: genero.id }]);
  }


  cargar(): void {
    this.generoService.lista().subscribe(
      data => {
        this.generos = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  borrar(id: number) {
    this.generoService.delete(id).subscribe(
      (response) => {
        console.log('se borro album')
        window.location.reload();
      },
      (error) => {
        console.error('error fetching data')
      }
    );

  };

}
