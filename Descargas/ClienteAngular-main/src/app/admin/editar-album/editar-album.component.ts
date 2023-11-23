import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from 'src/app/modelo/album.interface';
import { AlbumService } from 'src/app/objetoServices/album.service';

@Component({
  selector: 'app-editar-album',
  templateUrl: './editar-album.component.html',
  styleUrls: ['./editar-album.component.css']
})
export class EditarAlbumComponent implements OnInit {

  album: Album;

  constructor(
    private albumService: AlbumService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.albumService.detail(id).subscribe(
      data => {
        this.album = data;
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.albumService.update(id, this.album).subscribe(
      data => {
        this.router.navigate(['/menu-admin-album']);
      }
    );
  }

}
