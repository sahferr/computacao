export const textLibrary = {
  site: {
    title: "Computopia",
    shortTitle: "Computopia",
    eyebrow: "Ciência da Computação",
    heroTitle: "Computopia",
    heroLead:
      "Explore áreas fundamentais de CC em quatro fases progressivas, com leitura, busca rápida e uma estrutura feita para crescer junto com seus estudos.",
    footer: "Computopia: um mapa para estudar Ciência da Computação.",
  },
  navigation: [
    { label: "Início", href: "#root", tone: "active" },
    { label: "Áreas", href: "#areas" },
    { label: "Busca", href: "#search" },
    { label: "Biblioteca", href: "#roadmap", tone: "primary" },
  ],
  search: {
    label: "Buscar no roadmap",
    placeholder: "Ex.: grafos, SQL, autômatos, Docker...",
    empty: "Nenhum tópico encontrado para essa busca.",
  },
  stats: {
    areas: "áreas de estudo",
    phases: "fases organizadas",
    topics: "tópicos essenciais",
  },
  footer: {
    heading: "Ideias que atravessam a computação",
    intro:
      "A Computopia nasce dessa linhagem: imaginar, formalizar, construir e compartilhar conhecimento.",
    notes: [
      {
        name: "Ada Lovelace",
        area: "programação",
        phrase: "Imaginar máquinas também é imaginar novos modos de pensar.",
      },
      {
        name: "Alan Turing",
        area: "computabilidade",
        phrase: "Uma pergunta bem formulada pode abrir um campo inteiro.",
      },
      {
        name: "John von Neumann",
        area: "arquitetura",
        phrase: "Organizar memória, instruções e dados muda o alcance das ideias.",
      },
      {
        name: "Grace Hopper",
        area: "linguagens",
        phrase: "Ferramentas melhores aproximam pessoas de sistemas complexos.",
      },
      {
        name: "Edsger Dijkstra",
        area: "algoritmos",
        phrase: "Clareza no raciocínio também é parte da construção do software.",
      },
      {
        name: "Katherine Johnson",
        area: "cálculo",
        phrase: "Precisão, método e confiança fazem a ciência chegar mais longe.",
      },
    ],
  },
  detail: {
    phaseCount: "4 fases",
    description:
      "Estude em fases pequenas: comece pela base, avance para aplicações e aprofunde quando fizer sentido.",
    topicCount: (count) => `${count} tópicos para explorar`,
    areaCount: (count) => `4 fases · ${count} tópicos`,
    phaseTitle: (index, title) => `Fase ${index + 1}: ${title}`,
  },
};
