export const roadmap = [
        {
                "id": "math",
                "icon": "MAT",
                "title": "Matemática Fundacional",
                "color": "#7C3AED",
                "phases": [
                        {
                                "level": 1,
                                "title": "Base Absoluta",
                                "topics": [
                                        "Lógica proposicional: verdadeiro/falso, AND, OR, NOT, implicação",
                                        "Teoria dos conjuntos: união, interseção, diferença, produto cartesiano",
                                        "Funções: domínio, imagem, injetora, sobrejetora, bijetora",
                                        "Indução matemática: base + passo indutivo"
                                ]
                        },
                        {
                                "level": 2,
                                "title": "Matemática Discreta",
                                "topics": [
                                        "Combinatória: permutação, combinação, princípio da contagem",
                                        "Relações: reflexiva, simétrica, transitiva, equivalência, ordem",
                                        "Lógica de predicados: quantificadores ∀ e ∃",
                                        "Grafos: vértices, arestas, grau, caminhos (conceito inicial)"
                                ]
                        },
                        {
                                "level": 3,
                                "title": "Probabilidade e Álgebra",
                                "topics": [
                                        "Probabilidade discreta: espaço amostral, eventos, Bayes",
                                        "Variáveis aleatórias discretas: esperança, variância",
                                        "Álgebra linear: vetores, matrizes, transformações lineares",
                                        "Sistemas de equações lineares, determinantes"
                                ]
                        },
                        {
                                "level": 4,
                                "title": "Avançado",
                                "topics": [
                                        "Teoria dos números: divisibilidade, MDC, aritmética modular",
                                        "Cálculo diferencial e integral (base para ML/otimização)",
                                        "Álgebra abstrata: grupos, anéis, corpos",
                                        "Teoria da informação: entropia de Shannon, informação mútua"
                                ]
                        }
                ]
        },
        {
                "id": "theory",
                "icon": "TC",
                "title": "Teoria da Computação",
                "color": "#0891B2",
                "phases": [
                        {
                                "level": 1,
                                "title": "Linguagens e Autômatos",
                                "topics": [
                                        "Alfabetos, strings, linguagens formais",
                                        "Autômatos Finitos Determinísticos (AFD): estados, transições, aceitação",
                                        "Autômatos Finitos Não-Determinísticos (AFN)",
                                        "Expressões Regulares e sua equivalência com autômatos"
                                ]
                        },
                        {
                                "level": 2,
                                "title": "Além dos Regulares",
                                "topics": [
                                        "Lema do Bombeamento para linguagens regulares",
                                        "Gramáticas Livres de Contexto (GLC): produções, derivações",
                                        "Autômatos de Pilha (AP)",
                                        "Linguagens livres de contexto e suas limitações"
                                ]
                        },
                        {
                                "level": 3,
                                "title": "Computabilidade",
                                "topics": [
                                        "Máquina de Turing: definição formal, variantes",
                                        "Tese de Church-Turing",
                                        "Problema da Parada e sua indecidibilidade",
                                        "Redução entre problemas, linguagens recursivas e RE"
                                ]
                        },
                        {
                                "level": 4,
                                "title": "Complexidade",
                                "topics": [
                                        "Classes P e NP: definições formais",
                                        "Redução polinomial e NP-completude",
                                        "Teorema de Cook-Levin (SAT é NP-completo)",
                                        "Classes PSPACE, EXP, e hierarquia polinomial"
                                ]
                        }
                ]
        },
        {
                "id": "arch",
                "icon": "ARQ",
                "title": "Arquitetura de Computadores",
                "color": "#B45309",
                "phases": [
                        {
                                "level": 1,
                                "title": "Representação de Dados",
                                "topics": [
                                        "Sistemas numéricos: binário, octal, hexadecimal",
                                        "Conversões entre bases",
                                        "Representação de inteiros com sinal (complemento de 2)",
                                        "Ponto flutuante (IEEE 754)"
                                ]
                        },
                        {
                                "level": 2,
                                "title": "Circuitos e Lógica",
                                "topics": [
                                        "Portas lógicas: AND, OR, NOT, NAND, NOR, XOR",
                                        "Álgebra booleana e simplificação (Karnaugh)",
                                        "Circuitos combinacionais: somadores, multiplexadores",
                                        "Circuitos sequenciais: flip-flops, registradores"
                                ]
                        },
                        {
                                "level": 3,
                                "title": "CPU e Memória",
                                "topics": [
                                        "Arquitetura von Neumann: CPU, memória, E/S",
                                        "ALU, registradores, PC, IR",
                                        "Ciclo fetch-decode-execute",
                                        "Hierarquia de memória: cache, RAM, disco"
                                ]
                        },
                        {
                                "level": 4,
                                "title": "Avançado",
                                "topics": [
                                        "Pipeline e hazards (data, control, structural)",
                                        "Assembly: instruções, modos de endereçamento",
                                        "RISC vs CISC (ARM vs x86)",
                                        "Paralelismo: multicore, SIMD, hyperthreading"
                                ]
                        }
                ]
        },
        {
                "id": "algo",
                "icon": "ALG",
                "title": "Algoritmos e Estruturas de Dados",
                "color": "#047857",
                "phases": [
                        {
                                "level": 1,
                                "title": "Complexidade e Estruturas Básicas",
                                "topics": [
                                        "Análise assintótica: Big-O, Θ, Ω",
                                        "Arrays e listas ligadas (simples e duplas)",
                                        "Pilhas e filas: operações, aplicações",
                                        "Algoritmos de busca: linear e binária"
                                ]
                        },
                        {
                                "level": 2,
                                "title": "Ordenação e Árvores",
                                "topics": [
                                        "Ordenação: Bubble, Insertion, Merge Sort, Quick Sort",
                                        "Árvores binárias de busca (BST): inserção, remoção, busca",
                                        "Heap e fila de prioridade",
                                        "Tabelas hash: funções hash, tratamento de colisões"
                                ]
                        },
                        {
                                "level": 3,
                                "title": "Grafos e Paradigmas",
                                "topics": [
                                        "Grafos: BFS e DFS, componentes conexas",
                                        "Dijkstra, Bellman-Ford, Floyd-Warshall",
                                        "Dividir e conquistar, programação dinâmica",
                                        "Algoritmos gulosos: Kruskal, Prim, Huffman"
                                ]
                        },
                        {
                                "level": 4,
                                "title": "Avançado",
                                "topics": [
                                        "Árvores balanceadas: AVL, Red-Black, B-Trees",
                                        "Tries, segment trees, fenwick trees",
                                        "Fluxo em redes: Ford-Fulkerson, matching bipartido",
                                        "Algoritmos aleatorizados e de aproximação"
                                ]
                        }
                ]
        },
        {
                "id": "os",
                "icon": "SO",
                "title": "Sistemas Operacionais",
                "color": "#BE185D",
                "phases": [
                        {
                                "level": 1,
                                "title": "Fundamentos",
                                "topics": [
                                        "O que é um SO: kernel, user space, chamadas de sistema",
                                        "Processos: PCB, estados (ready, running, blocked)",
                                        "Threads vs processos: vantagens e trade-offs",
                                        "Escalonamento: FIFO, Round-Robin, SJF"
                                ]
                        },
                        {
                                "level": 2,
                                "title": "Memória e Arquivos",
                                "topics": [
                                        "Gerenciamento de memória: partições, paginação, segmentação",
                                        "Memória virtual e page faults",
                                        "Sistemas de arquivos: inodes, diretórios, FAT, ext4",
                                        "I/O: polling, interrupções, DMA"
                                ]
                        },
                        {
                                "level": 3,
                                "title": "Concorrência",
                                "topics": [
                                        "Race conditions e seções críticas",
                                        "Mutexes, semáforos, monitores",
                                        "Deadlock: condições, detecção, prevenção",
                                        "Problemas clássicos: produtor-consumidor, leitores-escritores"
                                ]
                        },
                        {
                                "level": 4,
                                "title": "Avançado",
                                "topics": [
                                        "Virtualização: hypervisors tipo 1 e 2",
                                        "Containers: namespaces, cgroups (base do Docker)",
                                        "Segurança: proteção de memória, capabilities",
                                        "Sistemas distribuídos no nível de SO"
                                ]
                        }
                ]
        },
        {
                "id": "net",
                "icon": "RED",
                "title": "Redes de Computadores",
                "color": "#0369A1",
                "phases": [
                        {
                                "level": 1,
                                "title": "Modelo e Protocolos Básicos",
                                "topics": [
                                        "Modelo OSI: 7 camadas e suas funções",
                                        "TCP/IP na prática: IP, TCP, UDP",
                                        "HTTP/HTTPS: request, response, métodos, status codes",
                                        "DNS: como nomes são resolvidos"
                                ]
                        },
                        {
                                "level": 2,
                                "title": "Camadas em Detalhe",
                                "topics": [
                                        "Camada física: bits, sinais, largura de banda",
                                        "Camada de enlace: MAC, Ethernet, switches",
                                        "Camada de rede: IP, CIDR, roteamento",
                                        "Camada de transporte: controle de fluxo, congestionamento TCP"
                                ]
                        },
                        {
                                "level": 3,
                                "title": "Aplicações e Segurança",
                                "topics": [
                                        "TLS/SSL: handshake, certificados, PKI",
                                        "WebSockets, gRPC, REST vs GraphQL",
                                        "Firewalls, NAT, proxies",
                                        "Redes sem fio: Wi-Fi (802.11), segurança WPA2/3"
                                ]
                        },
                        {
                                "level": 4,
                                "title": "Avançado",
                                "topics": [
                                        "BGP e roteamento na internet real",
                                        "CDN: edge caching, anycast",
                                        "IPv6: endereçamento, transição do IPv4",
                                        "Redes definidas por software (SDN)"
                                ]
                        }
                ]
        },
        {
                "id": "db",
                "icon": "BD",
                "title": "Banco de Dados",
                "color": "#9333EA",
                "phases": [
                        {
                                "level": 1,
                                "title": "Relacional e SQL",
                                "topics": [
                                        "Modelo relacional: tabelas, linhas, colunas, chaves",
                                        "SQL básico: SELECT, INSERT, UPDATE, DELETE",
                                        "JOINs: INNER, LEFT, RIGHT, FULL",
                                        "Agregações: GROUP BY, HAVING, funções de janela"
                                ]
                        },
                        {
                                "level": 2,
                                "title": "Design e Teoria",
                                "topics": [
                                        "Diagrama ER: entidades, relacionamentos, cardinalidade",
                                        "Normalização: 1NF, 2NF, 3NF, BCNF",
                                        "Índices: B-tree, hash, covering index",
                                        "Transações e ACID: atomicidade, consistência, isolamento, durabilidade"
                                ]
                        },
                        {
                                "level": 3,
                                "title": "NoSQL e Performance",
                                "topics": [
                                        "NoSQL: documentos (MongoDB), chave-valor (Redis), colunar (Cassandra)",
                                        "CAP theorem: consistência, disponibilidade, tolerância a partições",
                                        "Query planning e EXPLAIN",
                                        "Sharding e replicação"
                                ]
                        },
                        {
                                "level": 4,
                                "title": "Avançado",
                                "topics": [
                                        "Controle de concorrência: MVCC, locks, isolation levels",
                                        "Data warehouses: OLAP vs OLTP, star schema",
                                        "Bancos de grafos: Neo4j, Cypher",
                                        "NewSQL e bancos distribuídos (CockroachDB, Spanner)"
                                ]
                        }
                ]
        },
        {
                "id": "se",
                "icon": "ES",
                "title": "Engenharia de Software",
                "color": "#D97706",
                "phases": [
                        {
                                "level": 1,
                                "title": "Fundamentos de Programação",
                                "topics": [
                                        "Paradigmas: imperativo, orientado a objetos, funcional",
                                        "OOP: encapsulamento, herança, polimorfismo, abstração",
                                        "Git: commits, branches, merge, rebase, pull requests",
                                        "Testes unitários: o que testar, como estruturar"
                                ]
                        },
                        {
                                "level": 2,
                                "title": "Design de Código",
                                "topics": [
                                        "Princípios SOLID",
                                        "Design patterns criacionais: Factory, Singleton, Builder",
                                        "Design patterns estruturais: Adapter, Decorator, Proxy",
                                        "Design patterns comportamentais: Observer, Strategy, Command"
                                ]
                        },
                        {
                                "level": 3,
                                "title": "Arquitetura de Sistemas",
                                "topics": [
                                        "MVC, MVP, MVVM",
                                        "Arquitetura em camadas e hexagonal",
                                        "Microsserviços vs monolito",
                                        "Event-driven architecture, CQRS, Event Sourcing"
                                ]
                        },
                        {
                                "level": 4,
                                "title": "Avançado",
                                "topics": [
                                        "CI/CD: pipelines, testes automatizados, deploy",
                                        "Observabilidade: logs, métricas, tracing (OpenTelemetry)",
                                        "Refactoring e technical debt",
                                        "API design: REST, versionamento, contratos"
                                ]
                        }
                ]
        },
        {
                "id": "dist",
                "icon": "SD",
                "title": "Sistemas Distribuídos",
                "color": "#0F766E",
                "phases": [
                        {
                                "level": 1,
                                "title": "Conceitos Fundamentais",
                                "topics": [
                                        "O que é um sistema distribuído e por que é difícil",
                                        "Falhas parciais: crash, rede, Byzantine",
                                        "Relógio lógico de Lamport e causalidade",
                                        "RPC e comunicação entre serviços"
                                ]
                        },
                        {
                                "level": 2,
                                "title": "Consistência e Replicação",
                                "topics": [
                                        "Modelos de consistência: forte, eventual, causal",
                                        "Replicação: líder-seguidor, multi-líder, leaderless",
                                        "Quoruns e conflitos",
                                        "CAP theorem na prática"
                                ]
                        },
                        {
                                "level": 3,
                                "title": "Consenso e Coordenação",
                                "topics": [
                                        "Problema do consenso e FLP impossibility",
                                        "Paxos: conceito e fases",
                                        "Raft: eleição de líder, log replication",
                                        "Zookeeper e coordenação distribuída"
                                ]
                        },
                        {
                                "level": 4,
                                "title": "Avançado",
                                "topics": [
                                        "Transações distribuídas: 2PC, SAGA pattern",
                                        "Sistemas de mensageria: Kafka, partições, offsets",
                                        "Computação em stream: Flink, Spark Streaming",
                                        "Consistência geo-distribuída: Spanner, CockroachDB"
                                ]
                        }
                ]
        },
        {
                "id": "sec",
                "icon": "SEG",
                "title": "Segurança da Informação",
                "color": "#DC2626",
                "phases": [
                        {
                                "level": 1,
                                "title": "Criptografia Básica",
                                "topics": [
                                        "Criptografia simétrica: AES, modos de operação",
                                        "Criptografia assimétrica: RSA, conceito de chave pública/privada",
                                        "Funções hash: SHA-256, propriedades, colisões",
                                        "Assinaturas digitais e autenticação"
                                ]
                        },
                        {
                                "level": 2,
                                "title": "Segurança Web",
                                "topics": [
                                        "OWASP Top 10: SQL Injection, XSS, CSRF, IDOR",
                                        "TLS na prática: certificados, CA, handshake",
                                        "Autenticação: sessões, JWT, OAuth 2.0, OIDC",
                                        "HTTPS e HSTS"
                                ]
                        },
                        {
                                "level": 3,
                                "title": "Segurança de Sistemas",
                                "topics": [
                                        "Buffer overflow e proteções (ASLR, DEP/NX, canaries)",
                                        "Privilege escalation e princípio do menor privilégio",
                                        "Análise de vulnerabilidades e CVEs",
                                        "Firewalls, IDS/IPS"
                                ]
                        },
                        {
                                "level": 4,
                                "title": "Criptografia Avançada",
                                "topics": [
                                        "Curvas elípticas (ECC): ECDSA, ECDH",
                                        "Zero-knowledge proofs: conceito e aplicações",
                                        "Criptografia pós-quântica",
                                        "Blockchain: Merkle trees, consenso, smart contracts"
                                ]
                        }
                ]
        },
        {
                "id": "ai",
                "icon": "IA",
                "title": "Inteligência Artificial",
                "color": "#7C3AED",
                "phases": [
                        {
                                "level": 1,
                                "title": "Fundamentos",
                                "topics": [
                                        "Busca: BFS, DFS, A*, heurísticas admissíveis",
                                        "Problemas de satisfação de restrições (CSP)",
                                        "Minimax e poda alfa-beta (jogos adversariais)",
                                        "Probabilidade em IA: redes bayesianas (conceito)"
                                ]
                        },
                        {
                                "level": 2,
                                "title": "Machine Learning",
                                "topics": [
                                        "Regressão linear e logística",
                                        "Árvores de decisão e Random Forest",
                                        "SVM: hiperplanos, kernel trick",
                                        "Avaliação de modelos: overfitting, cross-validation, métricas"
                                ]
                        },
                        {
                                "level": 3,
                                "title": "Deep Learning",
                                "topics": [
                                        "Redes neurais: neurônio, camadas, ativações",
                                        "Backpropagation e gradiente descendente",
                                        "CNNs para visão computacional",
                                        "RNNs, LSTMs e Transformers (atenção)"
                                ]
                        },
                        {
                                "level": 4,
                                "title": "Fronteira",
                                "topics": [
                                        "LLMs: pré-treino, fine-tuning, RLHF, RAG",
                                        "Aprendizado por reforço: MDP, Q-learning, PPO",
                                        "Aprendizado não-supervisionado: clustering, autoencoders, VAE, diffusion",
                                        "IA generativa: GAN, modelos de difusão"
                                ]
                        }
                ]
        },
        {
                "id": "lang",
                "icon": "LP",
                "title": "Linguagens de Programação",
                "color": "#0891B2",
                "phases": [
                        {
                                "level": 1,
                                "title": "Conceitos Básicos",
                                "topics": [
                                        "Sintaxe vs semântica",
                                        "Tipagem: estática, dinâmica, forte, fraca",
                                        "Escopo: léxico vs dinâmico, closures",
                                        "Paradigmas: imperativo, funcional, OO, lógico"
                                ]
                        },
                        {
                                "level": 2,
                                "title": "Compiladores – Front-end",
                                "topics": [
                                        "Análise léxica: tokens, expressões regulares, lexers",
                                        "Análise sintática: gramáticas, árvores de parse, parsers LL/LR",
                                        "Análise semântica: tabela de símbolos, type checking",
                                        "Árvore sintática abstrata (AST)"
                                ]
                        },
                        {
                                "level": 3,
                                "title": "Compiladores – Back-end",
                                "topics": [
                                        "Representações intermediárias (IR): SSA, LLVM IR",
                                        "Otimizações: constant folding, inlining, loop unrolling",
                                        "Geração de código: seleção de instruções, alocação de registradores",
                                        "Garbage collection: mark-sweep, reference counting, generational"
                                ]
                        },
                        {
                                "level": 4,
                                "title": "Sistemas de Tipos Avançados",
                                "topics": [
                                        "Sistemas de tipos: Hindley-Milner, inferência de tipos",
                                        "Tipos dependentes e verificação formal",
                                        "Interpretadores e VMs: bytecode, JIT compilation",
                                        "Metaprogramação: macros, reflection, code generation"
                                ]
                        }
                ]
        }
];
