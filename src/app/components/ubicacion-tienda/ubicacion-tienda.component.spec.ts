import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionTiendaComponent } from './ubicacion-tienda.component';

describe('UbicacionTiendaComponent', () => {
  let component: UbicacionTiendaComponent;
  let fixture: ComponentFixture<UbicacionTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbicacionTiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
