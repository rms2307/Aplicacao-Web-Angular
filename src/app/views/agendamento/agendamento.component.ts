import { AgendamentoService } from './../../services/agendamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  formData: FormData = new FormData();

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
        console.log("AGENDAMENTO SALVO");
      },
        error => {
          console.log("ERRO AO SALVAR AGENDAMENTO");
        });
  }

  atualizarAgendamento() {
    this.agendamentoService.atualizarAgendamentoCSV(this.formData)
      .subscribe(response => {
        console.log("AGENDAMENTO ATUALIZADO");
      },
        error => {
          console.log("ERRO AO ATUALIZAR AGENDAMENTO");
        });
  }

}
