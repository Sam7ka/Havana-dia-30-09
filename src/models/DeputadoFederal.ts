import { Politico } from './Politico';

export class DeputadoFederal extends Politico {
  private bancada: string;

  constructor(
    nome: string,
    partido: string,
    bancada: string,
    remuneracao: number,
    projetos: string[] = []
  ) {
    super(
      nome,
      partido,
      "Federal",
      "Legislativo",
      "Câmara dos Deputados",
      "Palácio do Congresso Nacional - Praça dos Três Poderes, Brasília - DF",
      remuneracao,
      projetos
    );
    this.bancada = bancada;
  }

  public exercerMandato(): void {
    console.log(`[Mandato Deputado Federal - ${this.nome}]: Legisla sobre Código Penal, Código Tributário e Leis Trabalhistas, e fiscaliza o Presidente da República.`);
  }

  public votarPEC(): void {
    console.log(`Ação realizada por ${this.nome}: Votando Projeto de Emenda à Constituição (PEC).`);
  }

  public criarCPINacional(): void {
    console.log(`Ação realizada por ${this.nome}: Criando CPI Nacional.`);
  }

  public votarPPALDOLOANacional(): void {
    console.log(`Ação realizada por ${this.nome}: Votando PPA, LDO e LOA nacionais.`);
  }

  public proporLeiComplementar(): void {
    console.log(`Ação realizada por ${this.nome}: Propondo Lei Complementar.`);
  }

  public getBancada(): string { return this.bancada; }
}