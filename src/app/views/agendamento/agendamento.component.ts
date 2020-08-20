import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  clique: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  adicionarNovoAgendamento() {
    this.clique = 1;
    console.log('Adicionado')
  }

}
