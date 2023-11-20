import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GeneroService } from '../service/genero.service';
import { Album } from '../modelo/album.interface';
import { Genero } from '../modelo/genero.interface';
import { Recomendacion } from '../modelo/recomendacion.interface';
import { RecomendacionService } from '../service/recomendacion.service';
@Component({
  selector: 'app-recomendar-lista',
  templateUrl: './recomendar-lista.component.html',
  styleUrls: ['./recomendar-lista.component.css']
})
export class RecomendarListaComponent implements OnInit{

  clickedGenero: Genero = {} as Genero;

  recomendaciones : Recomendacion[] = []
  genero: Observable<Genero>[] = []
  album: Observable<Album>[] = []
  albums: Album[] = [];
  generoId: number = -1;
  showRecomendacion: boolean = true

  constructor(private recomendacionService: RecomendacionService, private generoService: GeneroService,private route: ActivatedRoute){

    this.route.params.subscribe(params => {
      if (params['genero']) {
        this.generoId = +params['genero'];

      }
    });
  }
  ngOnInit(): void {
    this.recomendacionService.lista().subscribe((data: Recomendacion[])=>{
      console.log( data )
      this.recomendaciones = data

      this.matchAlbumsByGenero(this.generoId);
    },
    (error: any) => {
      console.error('Error fetching data:', error);
    })

  }


  matchAlbumsByGenero(generoId: number) {
    console.log("Clicked Genero ID:", generoId);
    console.log("recomendaciones: ", this.recomendaciones)
    const filteredRecomendaciones = this.recomendaciones.filter((recomendacion) => recomendacion.genero.id === generoId);
  console.log("Filtered Recomendaciones:", filteredRecomendaciones);

  this.albums = filteredRecomendaciones.map((recomendacion) => recomendacion.album);
  console.log("Albums:", this.albums);

    this.albums = this.recomendaciones
      .filter((recomendacion) => recomendacion.genero.id === generoId)
      .map((recomendacion) => recomendacion.album);
      console.log("albums:", this.albums);
  }


}
