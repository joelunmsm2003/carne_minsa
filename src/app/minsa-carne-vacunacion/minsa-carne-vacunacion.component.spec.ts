import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinsaCarneVacunacionComponent } from './minsa-carne-vacunacion.component';

describe('MinsaCarneVacunacionComponent', () => {
  let component: MinsaCarneVacunacionComponent;
  let fixture: ComponentFixture<MinsaCarneVacunacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinsaCarneVacunacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinsaCarneVacunacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
