import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGrupoEmpresaComponent } from './home-grupo-empresa.component';

describe('HomeGrupoEmpresaComponent', () => {
  let component: HomeGrupoEmpresaComponent;
  let fixture: ComponentFixture<HomeGrupoEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGrupoEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeGrupoEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
