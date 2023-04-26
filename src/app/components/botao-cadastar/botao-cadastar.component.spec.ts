import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCadastarComponent } from './botao-cadastar.component';

describe('BotaoCadastarComponent', () => {
  let component: BotaoCadastarComponent;
  let fixture: ComponentFixture<BotaoCadastarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoCadastarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoCadastarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
