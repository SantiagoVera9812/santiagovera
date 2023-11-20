import { Component, OnInit } from '@angular/core';
import { GeneroService } from 'src/app/service/genero.service';
import { Genero } from 'src/app/modelo/genero.interface';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-genero',
  templateUrl: './form-genero.component.html',
  styleUrls: ['./form-genero.component.css']
})
export class FormGeneroComponent implements OnInit {

  generoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private generoService: GeneroService, private router: Router){
    this.generoForm = this.formBuilder.group({
      nombre: ['',Validators.required]
    });
  }
  ngOnInit(){}

   onSubmit(){

    if (this.generoForm.valid) {
      const generoData = this.generoForm.value;
      console.log(generoData)
      this.generoService.save(generoData).subscribe(
        (response) => {
          console.log('se agrego genero')
          window.location.reload();
        },
        (error) => {
        console.error('error fetching data')
        }
      );
    }
  }

}