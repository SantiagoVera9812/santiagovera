import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/service/album.service';
import { Album } from 'src/app/modelo/album.interface';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-album',
  templateUrl: './form-album.component.html',
  styleUrls: ['./form-album.component.css']
})
export class FormAlbumComponent implements OnInit {

  albumForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private albumService: AlbumService, private router: Router){
    this.albumForm = this.formBuilder.group({
      name: ['',Validators.required],
      artist: ['',Validators.required],
      type: ['',Validators.required],
      release_date: ['',Validators.required],
      rym_rating: ['',Validators.required],
      language: ['',Validators.required],
      genres: ['',Validators.required],
      colorscheme: ['',Validators.required]
    });
  }
  ngOnInit(){}

   onSubmit(){

    if (this.albumForm.valid) {
      const albumData = this.albumForm.value;
      console.log(albumData)
      this.albumService.save(albumData).subscribe(
        (response) => {
          console.log('se agrego album')
          window.location.reload();
        },
        (error) => {
        console.error('error fetching data')
        }
      );
    }
  }

}