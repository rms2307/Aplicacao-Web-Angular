import { API_CONFIG } from './../config/api.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  constructor(
    public http: HttpClient,
  ) { }

  adicionarAgendamentoCSV(formData: FormData) {
    return this.http.post(
      `${API_CONFIG.baseUrl}/agendamentos/csv`,
      formData,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }

  atualizarAgendamentoCSV(formData: FormData) {
    return this.http.put(
      `${API_CONFIG.baseUrl}/agendamentos/csv`,
      formData,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }

}
