import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/modelo/track.interface';
import { TrackService } from 'src/app/service/track.service';
import { Album } from 'src/app/modelo/album.interface';
import { AlbumService } from 'src/app/service/album.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancion-listar',
  templateUrl: './cancion-listar.component.html',
  styleUrls: ['./cancion-listar.component.css']
})
export class CancionListarComponent implements OnInit {

  tracks: Track[] = [];
  
  constructor(private trackService: TrackService, private albumService: AlbumService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.cargar();
  }
  cargar(): void {
    this.trackService.lista().subscribe(
      data => {
        this.tracks = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  borrar(id: number) {
    this.trackService.delete(id).subscribe(
      (response) => {
        console.log('se borro track')
        window.location.reload();
      },
      (error) => {
        console.error('error fetching data')
      }
    );

  };
}