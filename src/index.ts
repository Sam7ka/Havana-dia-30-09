import { Politico } from './models/Politico';
import { Presidente } from './models/Presidente';
import { Governador } from './models/Governador';
import { DeputadoEstadual } from './models/DeputadoEstadual';
import { DeputadoFederal } from './models/DeputadoFederal';
import { Senador } from './models/Senador';

const listaPoliticos: Politico[] = [];

// 1.Presidente
const presidente = new Presidente(
  "Luiz Inácio Lula da Silva",
  "PT",
  46366.19,
  38,
  ["Novo PAC", "Minha Casa Minha Vida Renovado"]
);
listaPoliticos.push(presidente);

// 2. Governador do Estado de Pernambuco e de São Paulo
const govPE = new Governador(
  "Raquel Lyra",
  "PSDB",
  "Pernambuco",
  "Palácio do Campo das Princesas",
  "Praça da República, Recife - PE",
  42145.00,
  27,
  ["Juntos Pela Segurança", "Programa Chapéu de Palha"]
);

const govSP = new Governador(
  "Tarcísio de Freitas",
  "Republicanos",
  "São Paulo",
  "Palácio dos Bandeirantes",
  "Av. Morumbi, 4500, São Paulo - SP",
  34572.89,
  28,
  ["Expansão do Metrô", "Trem Intercidades"]
);
listaPoliticos.push(govPE, govSP);

// 3. Três Deputados Federais eleitos por PE e dois da Paraíba
const depFedPE1 = new DeputadoFederal("Pedro Campos", "PSB", "Ambientalista", 44008.52, ["Incentivo à Energia Solar"]);
const depFedPE2 = new DeputadoFederal("Túlio Gadêlha", "REDE", "Cultura e Educação", 44008.52, ["Lei Paulo Gustavo II"]);
const depFedPE3 = new DeputadoFederal("Clarissa Tércio", "PP", "Conservadora", 44008.52, ["Apoio às Famílias Atípicas"]);

const depFedPB1 = new DeputadoFederal("Aguinaldo Ribeiro", "PP", "Econômica", 44008.52, ["Regulamentação Tributária"]);
const depFedPB2 = new DeputadoFederal("Hugo Motta", "Republicanos", "Governista", 44008.52, ["Fortalecimento da Saúde Regional"]);
listaPoliticos.push(depFedPE1, depFedPE2, depFedPE3, depFedPB1, depFedPB2);

// 4. Três Deputados Estaduais de PE e dois de SP
const localALEPE = "Assembleia Legislativa do Estado de Pernambuco (ALEPE)";
const endALEPE = "Rua da União, 439, Boa Vista, Recife - PE";

const depEstPE1 = new DeputadoEstadual("Gigliany Maria", "PT", "Pernambuco", localALEPE, endALEPE, 33006.39, ["Comissão de Educação"], ["Valorização dos Professores"]);
const depEstPE2 = new DeputadoEstadual("Joel da Harpa", "PL", "Pernambuco", localALEPE, endALEPE, 33006.39, ["Comissão de Segurança Pública"], ["Estruturação dos Policiais Militares"]);
const depEstPE3 = new DeputadoEstadual("Dani Portela", "PSOL", "Pernambuco", localALEPE, endALEPE, 33006.39, ["Comissão de Cidadania"], ["Combate ao Feminicídio"]);

const localALESP = "Assembleia Legislativa do Estado de São Paulo (ALESP)";
const endALESP = "Av. Pedro Álvares Cabral, 201, São Paulo - SP";

const depEstSP1 = new DeputadoEstadual("Eduardo Suplicy", "PT", "São Paulo", localALESP, endALESP, 33006.39, ["Comissão de Direitos Humanos"], ["Renda Básica de Cidadania"]);
const depEstSP2 = new DeputadoEstadual("Tomé Abduch", "Republicanos", "São Paulo", localALESP, endALESP, 33006.39, ["Comissão de Finanças"], ["Incentivo Fiscal às Pequenas Empresas"]);
listaPoliticos.push(depEstPE1, depEstPE2, depEstPE3, depEstSP1, depEstSP2);

// 5. Dois Senadores de PE e um do Ceará
const senPE1 = new Senador("Humberto Costa", "PT", "Pernambuco", 2018, 44008.52, ["Fortalecimento do SUS"]);
const senPE2 = new Senador("Teresa Leitão", "PT", "Pernambuco", 2022, 44008.52, ["Piso Nacional da Enfermagem"]);
const senCE1 = new Senador("Camilo Santana", "PT", "Ceará", 2022, 44008.52, ["Programa Pé-de-Meia"]);
listaPoliticos.push(senPE1, senPE2, senCE1);

// --- EXECUÇÃO E TESTES ---

console.log("=================================================");
console.log("      MANDATOS DOS POLÍTICOS (POLIMORFISMO)      ");
console.log("=================================================\n");
for (const p of listaPoliticos) {
  p.exercerMandato();
}

console.log("\n=================================================");
console.log("         AÇÕES ESPECÍFICAS DE CADA CARGO        ");
console.log("=================================================\n");

presidente.comandarForcasArmadas();
presidente.nomearExonerarMinistro("Fernando Haddad");

govPE.gerirPoliciaMilitar();
govPE.enviarPPALDOLOAEstadual();

depEstPE1.criarCPIEstadual();
depEstPE1.proporEmendaConstituicaoEstadual();

depFedPE1.proporLeiComplementar();
depFedPE1.votarPEC();

senPE1.aprovarAutoridades();
senPE1.representarEstado();