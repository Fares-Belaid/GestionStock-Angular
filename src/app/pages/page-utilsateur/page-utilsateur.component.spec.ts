import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUtilsateurComponent } from './page-utilsateur.component';

describe('PageUtilsateurComponent', () => {
  let component: PageUtilsateurComponent;
  let fixture: ComponentFixture<PageUtilsateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUtilsateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUtilsateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
