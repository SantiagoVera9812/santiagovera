import { Component, OnInit } from '@angular/core';
import { Album } from '../../modelo/album.interface';
import { AlbumService } from '../../service/album.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-listar',
  templateUrl: './album-listar.component.html',
  styleUrls: ['./album-listar.component.css']
})
export class AlbumListarComponent implements OnInit {

  showInfoAlbumConTracks: boolean = true

  albumes: Album[] = [];
  constructor(private albumService: AlbumService, private router: Router) {

  }

  ngOnInit(): void {
    this.cargar();
  }
  //Vuelve el colorscheme transparente
  generateGradient(color: string): string {
    return `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 1)`;
  }
  cargar(): void {
    this.albumService.lista().subscribe(
      data => {
        this.albumes = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  borrar(id: number) {
    this.albumService.delete(id).subscribe(
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
