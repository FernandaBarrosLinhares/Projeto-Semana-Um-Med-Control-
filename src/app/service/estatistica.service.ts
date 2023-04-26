import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstatisticaService {
  //Exemplo  de uma construção de objeto para mock  utilizando interface TS

  private estatistica: {
    totalPaciente: 100;
    totalMedicamento: 323;
  } | undefined

 
  constructor() { }

  getEstatistica(){
    return of(this.estatistica);
  }
}
