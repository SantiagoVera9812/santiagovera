import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroListarComponent } from './genero-listar.component';

describe('GeneroListarComponent', () => {
  let component: GeneroListarComponent;
  let fixture: ComponentFixture<GeneroListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneroListarComponent]
    });
    fixture = TestBed.createComponent(GeneroListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
