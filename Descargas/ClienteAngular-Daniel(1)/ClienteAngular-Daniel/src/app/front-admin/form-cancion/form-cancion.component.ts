import { Component, OnInit } from '@angular/core';
import { TrackService } from 'src/app/service/track.service';
import { Track } from 'src/app/modelo/track.interface';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-cancion',
  templateUrl: './form-cancion.component.html',
  styleUrls: ['./form-cancion.component.css']
})
export class FormCancionComponent implements OnInit {

  trackForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private trackService: TrackService, private router: Router){
    this.trackForm = this.formBuilder.group({
      title: ['',Validators.required],
      duration: ['',Validators.required]
    });
  }
  ngOnInit(){}

   onSubmit(){

    if (this.trackForm.valid) {
      const trackData = this.trackForm.value;
      console.log(trackData)
      this.trackService.save(trackData).subscribe(
        (response) => {
          console.log('se agrego track')
          window.location.reload();
        },
        (error) => {
        console.error('error fetching data')
        }
      );
    }
  }

}