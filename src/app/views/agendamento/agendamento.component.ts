import { AgendamentoDTO } from './../../../models/agendamento.dto';
import { AgendamentoService } from './../../services/agendamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  formData: FormData = new FormData();
  data: String;
  agendamentos: AgendamentoDTO[];
  adicionado: boolean = false;
  atualizado: boolean = false;

  constructor(
    private agendamentoService: AgendamentoService
  ) { }

  ngOnInit(): void {
  }

  inputFileChange(evento) {
    if (evento.target.files && evento.target.files[0]) {
      const arquivoCSV = evento.target.files[0];
      this.formData.append('arquivo', arquivoCSV);
      this.agendamentoService.mostrarMensagem('Arquivo Carregado');
    }
  }

  adicionarAgendamento() {
    this.agendamentoService.mostrarMensagem('Processando...');
    this.agendamentoService.adicionarAgendamentoCSV(this.formData)
      .subscribe(response => {
        this.adicionado = true;
        this.atualizado = false;
        this.agendamentoService.mostrarMensagem('Agendamento Adicionado');
      },
        error => {
          if (error.status == 500) {
            this.agendamentoService.mostrarMensagem(
              'Conflito de agendamento. Escolha outra data/hora', true);
          }
          if (error.status == 400) {
            this.agendamentoService.mostrarMensagem(
              'Escolha um arquivo CSV', true);
          }
        });
  }

  atualizarAgendamento() {
    this.agendamentoService.mostrarMensagem('Processando...');
    this.agendamentoService.atualizarAgendamentoCSV(this.formData)
      .subscribe(response => {
        this.atualizado = true;
        this.adicionado = false;
        this.agendamentoService.mostrarMensagem('Agendamento Atualizado');
      },
        error => {
          this.agendamentoService.mostrarMensagem(
            'Conflito de agendamento. Escolha outra data/hora', true);
        });
  }

  buscarAgendamentosPorAnoMes() {
    this.agendamentoService.mostrarMensagem('Processando...');
    let anoMes: string[] = this.data.split("-");
    let ano = anoMes[0];
    let mes = anoMes[1];

    this.agendamentoService.buscarAgendamentosPorAnoMes(ano, mes)
      .subscribe(response => { this.agendamentos = response; });
  }

}
