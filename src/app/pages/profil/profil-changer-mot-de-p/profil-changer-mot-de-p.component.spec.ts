import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilChangerMotDePComponent } from './profil-changer-mot-de-p.component';

describe('ProfilChangerMotDePComponent', () => {
  let component: ProfilChangerMotDePComponent;
  let fixture: ComponentFixture<ProfilChangerMotDePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilChangerMotDePComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilChangerMotDePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
