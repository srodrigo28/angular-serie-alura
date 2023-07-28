import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    { conteudo: 'HTML5 base aos projetos', autoria: 'Sebastião Rodrigo', modelo: 'modelo3'},
    { conteudo: 'HTML5 e css3 base aos projetos', autoria: 'Sebastião Rodrigo', modelo: 'modelo1'},
    { conteudo: 'HTML5, css3 e javascript  base aos projetos reais para seu dia a dia com as melhores práticas possíveis', autoria: 'Sebastião Rodrigo', modelo: 'modelo1'},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
