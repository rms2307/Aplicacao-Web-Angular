import { AgendamentoDTO } from './../../../models/agendamento.dto';
import { AgendamentoPorAnoMesDTO } from './../../../models/agendamento.por.ano.mes.dto';
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
      console.log("Arquivo Carregado")
    }
  }

  adicionarAgendamento() {
    this.agendamentoService.adicionarAgendamentoCSV(this.formData)
      .subscribe(response => {
        this.adicionado = true;
        this.atualizado = false;
      },
        error => {
          console.log("ERRO AO SALVAR AGENDAMENTO");
        });
  }

  atualizarAgendamento() {
    this.agendamentoService.atualizarAgendamentoCSV(this.formData)
      .subscribe(response => {
        this.atualizado = true;
        this.adicionado = false;
      },
        error => {
          console.log("ERRO AO ATUALIZAR AGENDAMENTO");
        });
  }

  buscarAgendamentosPorAnoMes() {
    let anoMes: string[] = this.data.split("-");
    let ano = anoMes[0];
    let mes = anoMes[1];

    this.agendamentoService.buscarAgendamentosPorAnoMes(ano, mes)
      .subscribe(response => { this.agendamentos = response; });
  }

}
