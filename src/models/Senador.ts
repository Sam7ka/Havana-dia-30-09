import { Politico } from './Politico';

export class Senador extends Politico {
  private estadoRepresentado: string;
  private anoEleicao: number;

  constructor(
    nome: string,
    partido: string,
    estadoRepresentado: string,
    anoEleicao: number,
    remuneracao: number,
    projetos: string[] = []
  ) {
    super(
      nome,
      partido,
      "Federal",
      "Legislativo",
      "Senado Federal",
      "Praça dos Três Poderes, Brasília - DF",
      remuneracao,
      projetos
    );
    this.estadoRepresentado = estadoRepresentado;
    this.anoEleicao = anoEleicao;
  }

  public exercerMandato(): void {
    console.log(`[Mandato Senador - ${this.nome} (${this.estadoRepresentado})]: Sabatina e aprova ministros do STF, Procurador-Geral da República, presidentes do Banco Central; legisla sobre leis federais e autoriza operações financeiras externas.`);
  }

  public aprovarAutoridades(): void {
    console.log(`Ação realizada por ${this.nome}: Aprovando autoridades de alto escalão.`);
  }

  public julgarCrimesResponsabilidade(): void {
    console.log(`Ação realizada por ${this.nome}: Julgando crimes de responsabilidade.`);
  }

  public representarEstado(): void {
    console.log(`Ação realizada por ${this.nome}: Representando os interesses do estado de ${this.estadoRepresentado}.`);
  }

  public getEstadoRepresentado(): string { return this.estadoRepresentado; }
  public getAnoEleicao(): number { return this.anoEleicao; }
}