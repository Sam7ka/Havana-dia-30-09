import { Politico } from './Politico';

export class Governador extends Politico {
  private quantidadeSecretarios: number;
  private estadoRepresentado: string;

  constructor(
    nome: string,
    partido: string,
    estadoRepresentado: string,
    nomeLocalTrabalho: string,
    enderecoLocalTrabalho: string,
    remuneracao: number,
    quantidadeSecretarios: number,
    projetos: string[] = []
  ) {
    super(
      nome,
      partido,
      "Estadual",
      "Executivo",
      nomeLocalTrabalho,
      enderecoLocalTrabalho,
      remuneracao,
      projetos
    );
    this.estadoRepresentado = estadoRepresentado;
    this.quantidadeSecretarios = quantidadeSecretarios;
  }

  public exercerMandato(): void {
    console.log(`[Mandato Governador - ${this.nome} (${this.estadoRepresentado})]: Sanciona e veta leis estaduais, decreta estado de calamidade e envia PEC à Assembleia Legislativa.`);
  }

  public gerirPoliciaMilitar(): void {
    console.log(`Ação realizada por ${this.nome}: Gerindo a Polícia Militar do estado de ${this.estadoRepresentado}.`);
  }

  public administrarRodoviasEstaduais(): void {
    console.log(`Ação realizada por ${this.nome}: Administrando as rodovias estaduais.`);
  }

  public coordenarEducacaoESaude(): void {
    console.log(`Ação realizada por ${this.nome}: Coordenando a educação e a saúde do estado.`);
  }

  public enviarPPALDOLOAEstadual(): void {
    console.log(`Ação realizada por ${this.nome}: Elaborando e enviando à Assembleia Legislativa o PPA, LDO e LOA estaduais.`);
  }

  public getQuantidadeSecretarios(): number { return this.quantidadeSecretarios; }
  public getEstadoRepresentado(): string { return this.estadoRepresentado; }
}