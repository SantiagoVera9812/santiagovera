import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/modelo/track.interface';
import { TrackService } from 'src/app/service/track.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from 'src/app/modelo/album.interface';
import { AlbumService } from 'src/app/service/album.service';
@Component({
  selector: 'app-editar-cancion',
  templateUrl: './editar-cancion.component.html',
  styleUrls: ['./editar-cancion.component.css']
})
export class EditarCancionComponent implements OnInit {

  track: Track;
  constructor(
    private trackService: TrackService,    
    private albumService: AlbumService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.trackService.detail(id).subscribe(
      data => {
        this.track = data;
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.trackService.update(this.track).subscribe(
      data => {
        this.router.navigate(['/menu-admin-album']);
      }
    );
  }

}