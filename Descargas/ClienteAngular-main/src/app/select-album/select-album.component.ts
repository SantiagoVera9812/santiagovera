import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Album } from '../modelo/album.interface';
import { AlbumService } from '../objetoServices/album.service';

@Component({
  selector: 'app-select-album',
  templateUrl: './select-album.component.html',
  styleUrls: ['./select-album.component.css']
})
export class SelectAlbumComponent implements OnInit {

  @Output() albumSelected: EventEmitter<number> = new EventEmitter<number>();

  public albums: Album[] = [];

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.lista().subscribe(
      (albums: Album[]) => {
        this.albums = albums;
      },
      (error) => {
        console.error('Error fetching albums:', error);
      }
    );
  }

  onAlbumSelected(albumId: number): void {
    this.albumSelected.emit(albumId);
  }
}
