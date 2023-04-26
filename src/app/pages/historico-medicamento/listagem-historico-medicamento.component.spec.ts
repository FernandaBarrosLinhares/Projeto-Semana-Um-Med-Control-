import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemHistoricoMedicamentoComponent } from './listagem-historico-medicamento.component';

describe('ListagemHistoricoMedicamentoComponent', () => {
  let component: ListagemHistoricoMedicamentoComponent;
  let fixture: ComponentFixture<ListagemHistoricoMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemHistoricoMedicamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemHistoricoMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
