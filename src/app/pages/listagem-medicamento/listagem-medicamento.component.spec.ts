import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemMedicamentoComponent } from './listagem-medicamento.component';

describe('ListagemMedicamentoComponent', () => {
  let component: ListagemMedicamentoComponent;
  let fixture: ComponentFixture<ListagemMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemMedicamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
