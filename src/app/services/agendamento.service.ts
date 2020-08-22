import { MatSnackBar } from "@angular/material/snack-bar";
import { AgendamentoDTO } from './../../models/agendamento.dto';
import { API_CONFIG } from './../config/api.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  constructor(
    public http: HttpClient,
    private snackBar: MatSnackBar,
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

  buscarAgendamentosPorAnoMes(ano: string, mes: string): Observable<AgendamentoDTO[]> {
    return this.http.get<AgendamentoDTO[]>(
      `${API_CONFIG.baseUrl}/agendamentos/${ano}/${mes}`);
  }

  mostrarMensagem(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
}
