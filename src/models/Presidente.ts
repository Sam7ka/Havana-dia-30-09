import { Politico } from './Politico';

export class Presidente extends Politico {
  private quantidadeMinistros: number;

  constructor(
    nome: string,
    partido: string,
    remuneracao: number,
    quantidadeMinistros: number,
    projetos: string[] = []
  ) {
    super(
      nome,
      partido,
      "Federal",
      "Executivo",
      "Palácio do Planalto",
      "Praça dos Três Poderes, Brasília - DF",
      remuneracao,
      projetos
    );
    this.quantidadeMinistros = quantidadeMinistros;
  }

  public exercerMandato(): void {
    console.log(`[Mandato Presidente - ${this.nome}]: Propõe, sanciona e veta leis e edita medidas provisórias.`);
  }

  public nomearExonerarMinistro(nomeMinistro: string): void {
    console.log(`Ação realizada por ${this.nome}: Nomear/exonerar o ministro ${nomeMinistro}.`);
  }

  public comandarForcasArmadas(): void {
    console.log(`Ação realizada por ${this.nome}: Comandando as Forças Armadas.`);
  }

  public representarPais(): void {
    console.log(`Ação realizada por ${this.nome}: Representando o país em eventos internacionais.`);
  }

  public enviarPPALDOLOA(): void {
    console.log(`Ação realizada por ${this.nome}: Elaborando e enviando ao Congresso o PPA, LDO e LOA nacionais.`);
  }

  public getQuantidadeMinistros(): number { return this.quantidadeMinistros; }
  public setQuantidadeMinistros(qtd: number): void { this.quantidadeMinistros = qtd; }
}