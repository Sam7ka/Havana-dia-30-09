import { Politico } from './Politico';

export class DeputadoEstadual extends Politico {
  private estadoRepresentado: string;
  private comissoes: string[];

  constructor(
    nome: string,
    partido: string,
    estadoRepresentado: string,
    nomeLocalTrabalho: string,
    enderecoLocalTrabalho: string,
    remuneracao: number,
    comissoes: string[],
    projetos: string[] = []
  ) {
    if (!comissoes || comissoes.length === 0) {
      throw new Error("O deputado estadual deve participar de ao menos uma comissão.");
    }
    super(
      nome,
      partido,
      "Estadual",
      "Legislativo",
      nomeLocalTrabalho,
      enderecoLocalTrabalho,
      remuneracao,
      projetos
    );
    this.estadoRepresentado = estadoRepresentado;
    this.comissoes = comissoes;
  }

  public exercerMandato(): void {
    console.log(`[Mandato Deputado Estadual - ${this.nome} (${this.estadoRepresentado})]: Legisla sobre assuntos de interesse do estado e fiscaliza o governador.`);
  }

  public votarPPALDOLOAEstadual(): void {
    console.log(`Ação realizada por ${this.nome}: Votando o PPA, LDO e LOA do Estado.`);
  }

  public proporEmendaConstituicaoEstadual(): void {
    console.log(`Ação realizada por ${this.nome}: Propondo emenda à Constituição Estadual.`);
  }

  public criarCPIEstadual(): void {
    console.log(`Ação realizada por ${this.nome}: Criando CPI Estadual.`);
  }

  public getEstadoRepresentado(): string { return this.estadoRepresentado; }
  public getComissoes(): string[] { return this.comissoes; }
}