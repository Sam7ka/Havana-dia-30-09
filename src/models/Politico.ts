export abstract class Politico {
  protected nome: string;
  protected partido: string;
  protected esfera: string;
  protected poder: string;
  protected nomeLocalTrabalho: string;
  protected enderecoLocalTrabalho: string;
  protected remuneracao: number;
  protected projetos: string[];

  constructor(
    nome: string,
    partido: string,
    esfera: string,
    poder: string,
    nomeLocalTrabalho: string,
    enderecoLocalTrabalho: string,
    remuneracao: number,
    projetos: string[] = []
  ) {
    this.nome = nome;
    this.partido = partido;
    this.esfera = esfera;
    this.poder = poder;
    this.nomeLocalTrabalho = nomeLocalTrabalho;
    this.enderecoLocalTrabalho = enderecoLocalTrabalho;
    this.remuneracao = remuneracao;
    this.projetos = projetos;
  }

  abstract exercerMandato(): void;

  public adicionarProjeto(titulo: string): void {
    this.projetos.push(titulo);
  }

  // Getters
  public getNome(): string { return this.nome; }
  public getPartido(): string { return this.partido; }
  public getEsfera(): string { return this.esfera; }
  public getPoder(): string { return this.poder; }
  public getNomeLocalTrabalho(): string { return this.nomeLocalTrabalho; }
  public getEnderecoLocalTrabalho(): string { return this.enderecoLocalTrabalho; }
  public getRemuneracao(): number { return this.remuneracao; }
  public getProjetos(): string[] { return this.projetos; }
}