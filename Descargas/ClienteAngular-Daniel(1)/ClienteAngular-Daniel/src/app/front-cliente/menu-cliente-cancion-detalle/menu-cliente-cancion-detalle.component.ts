
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Track } from 'src/app/modelo/track.interface';
import { TrackService } from 'src/app/service/track.service';
@Component({
  selector: 'app-menu-cliente-cancion-detalle',
  templateUrl: './menu-cliente-cancion-detalle.component.html',
  styleUrls: ['./menu-cliente-cancion-detalle.component.css']
})
export class MenuClienteCancionDetalleComponent implements OnInit {
  track_id: number | null = null;
  track: Track | null = null;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  constructor(private route: ActivatedRoute, private trackService: TrackService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.track_id = Number(params.get('id'));
      if (this.track_id !== null) {
        this.trackService.detail(this.track_id).subscribe(
          (data) => {
            this.track = data;

          },
          (error) => {
            console.error('Error fetching album details:', error);
          }
        );
      }
    });
  }
  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }}
