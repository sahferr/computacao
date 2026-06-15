export const textLibrary = {
  site: {
    title: "Computopia",
    shortTitle: "Computopia",
    eyebrow: "Ciência da Computação",
    heroTitle: "Computopia",
    heroLead:
      "Página sobre Ciência da Computação! Este espaço é organizado em guias de estudo para áreas essenciais em quatro fases progressivas. O objetivo é ser uma fonte de materiais livres tanto para calouros quanto para veteranos e autodidatas.",
    footer: "Computopia",
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
        phrase:
          "Organizar memória, instruções e dados muda o alcance das ideias.",
      },
      {
        name: "Grace Hopper",
        area: "linguagens",
        phrase: "Ferramentas melhores aproximam pessoas de sistemas complexos.",
      },
      {
        name: "Edsger Dijkstra",
        area: "algoritmos",
        phrase:
          "Clareza no raciocínio também é parte da construção do software.",
      },
      {
        name: "Katherine Johnson",
        area: "cálculo",
        phrase:
          "Precisão, método e confiança fazem a ciência chegar mais longe.",
      },
    ],
  },
  detail: {
    phaseCount: "4 fases",
    libraryToggle: "Bibliotecas",
    previousPhase: "Mostrar card anterior",
    nextPhase: "Mostrar próximo card",
    description:
      "Consolide os fundamentos de cada assunto e evolua gradualmente para aplicações práticas de alta complexidade.",
    topicCount: (count) => `${count} tópicos para explorar`,
    areaCount: (count) => `4 fases · ${count} tópicos`,
    phaseTitle: (index, title) => `Fase ${index + 1}: ${title}`,
  },
};
