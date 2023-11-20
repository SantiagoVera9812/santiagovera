import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/modelo/album.interface';
import { AlbumService } from 'src/app/service/album.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cliente-some-album',
  templateUrl: './cliente-some-album.component.html',
  styleUrls: ['./cliente-some-album.component.css']
})
export class ClienteSomeAlbumComponent implements OnInit {

  showInfoAlbumConTracks: boolean = true

  albumes: Album[] = [];
  some: Album[]=[];
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
        for (let i = 0; i < 5; i++) {
          this.some.push(this.albumes[i])
        }
      },
      err => {
        console.log(err);
      }
    );
    
  }
  
}
