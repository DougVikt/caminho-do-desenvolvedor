# Guia Completo de Estudo: Desenvolvimento Front-end

## Uma Jornada do Zero ao nível de referência

Bem-vindo. Este guia foi escrito para você, que quer aprender desenvolvimento front-end do começo, sem pular etapas, e chegar a um nível em que outros profissionais te consultam como referência. Aqui você não vai encontrar apenas uma lista de tópicos — você vai encontrar explicações, contextos, motivos e um caminho claro para seguir.

Este material consolida tudo o que foi pesquisado e organizado em três arquivos de estudo: o que saber (conhecimento), como estudar (metodologia) e quando estudar (cronograma). Tudo está aqui, num único lugar, escrito como se um professor estivesse ao seu lado explicando cada etapa.

---

## índice

- [Introdução: O que é ser um desenvolvedor front-end?](#introdução-o-que-é-ser-um-desenvolvedor-front-end)
- [Parte 1: O Universo de conhecimento do Front-end](#parte-1-o-universo-de-conhecimento-do-front-end)
  - [1.1 A Base obrigatória — o alicerce de tudo](#11-a-base-obrigatória--o-alicerce-de-tudo)
  - [1.2 HTML e Semântica — a estrutura da web](#12-html-e-semântica--a-estrutura-da-web)
  - [1.3 CSS — a arte de estilizar](#13-css--a-arte-de-estilizar)
  - [1.4 JavaScript — a alma da interface](#14-javascript--a-alma-da-interface)
  - [1.5 TypeScript — segurança em escala](#15-typescript--segurança-em-escala)
  - [1.6 Frameworks e Bibliotecas — produtividade real](#16-frameworks-e-bibliotecas--produtividade-real)
  - [1.7 Arquitetura Front-end — organizando o caos](#17-arquitetura-front-end--organizando-o-caos)
  - [1.8 Acessibilidade — a web para todos](#18-acessibilidade--a-web-para-todos)
  - [1.9 UX e UI — a ponte entre código e usuário](#19-ux-e-ui--a-ponte-entre-código-e-usuário)
  - [1.10 Performance — velocidade como requisito](#110-performance--velocidade-como-requisito)
  - [1.11 Consumo de APIs — o front-end conversa](#111-consumo-de-apis--o-front-end-conversa)
  - [1.12 Testes e Qualidade — entregando confiança](#112-testes-e-qualidade--entregando-confiança)
  - [1.13 Ferramentas do dia a dia](#113-ferramentas-do-dia-a-dia)
  - [1.14 Segurança no Front-end](#114-segurança-no-front-end)
  - [1.15 SEO — visibilidade nos buscadores](#115-seo--visibilidade-nos-buscadores)
  - [1.16 Comunicação e Processo](#116-comunicação-e-processo)
  - [1.17 Os níveis de Proficiência](#117-os-níveis-de-proficiência)
  - [1.18 Soft Skills — o que o código não ensina](#118-soft-skills--o-que-o-código-não-ensina)
- [Parte 2: Como Estudar — A Metodologia do Loop Infinito](#parte-2-como-estudar--a-metodologia-do-loop-infinito)
  - [2.1 A Filosofia do Loop — por que estudar em espiral](#21-a-filosofia-do-loop--por-que-estudar-em-espiral)
  - [2.2 O Loop de 6 Meses — o ciclo completo](#22-o-loop-de-6-meses--o-ciclo-completo)
  - [2.3 Rotina Semanal — o que fazer cada dia](#23-rotina-semanal--o-que-fazer-cada-dia)
  - [2.4 Rotina Diária — quando o tempo é curto](#24-rotina-diária--quando-o-tempo-é-curto)
  - [2.5 O Loop de Revisão — nunca esquecer](#25-o-loop-de-revisão--nunca-esquecer)
  - [2.6 O Loop de Pesquisa — aprender a aprender](#26-o-loop-de-pesquisa--aprender-a-aprender)
  - [2.7 O Loop de Projetos — teoria vira prática](#27-o-loop-de-projetos--teoria-vira-prática)
  - [2.8 O Loop de Especialização — aprofundando](#28-o-loop-de-especialização--aprofundando)
  - [2.9 Distribuição de Esforço — onde investir tempo](#29-distribuição-de-esforço--onde-investir-tempo)
  - [2.10 Regras para não se Perder — a bússola](#210-regras-para-não-se-perder--a-bússola)
- [Parte 3: O Plano Passo a Passo — da Estaca Zero ao Topo](#parte-3-o-plano-passo-a-passo--da-estaca-zero-ao-topo)
  - [3.1 Fase 0: Antes de escrever a primeira linha de código](#31-fase-0-antes-de-escrever-a-primeira-linha-de-código)
  - [3.2 Fase 1: Fundamentos da Web](#32-fase-1-fundamentos-da-web)
  - [3.3 Fase 2: CSS e Layouts](#33-fase-2-css-e-layouts)
  - [3.4 Fase 3: JavaScript Essencial](#34-fase-3-javascript-essencial)
  - [3.5 Fase 4: JavaScript Avançado e TypeScript](#35-fase-4-javascript-avançado-e-typescript)
  - [3.6 Fase 5: Framework Front-end](#36-fase-5-framework-front-end)
  - [3.7 Fase 6: Consumo de APIs e Estado](#37-fase-6-consumo-de-apis-e-estado)
  - [3.8 Fase 7: Testes e Qualidade](#38-fase-7-testes-e-qualidade)
  - [3.9 Fase 8: Performance e Acessibilidade](#39-fase-8-performance-e-acessibilidade)
  - [3.10 Fase 9: Arquitetura e Design Systems](#310-fase-9-arquitetura-e-design-systems)
  - [3.11 Fase 10: Segurança e Produção](#311-fase-10-segurança-e-produção)
  - [3.12 Fase 11: Projeto Grande e Portfólio](#312-fase-11-projeto-grande-e-portfólio)
  - [3.13 Fase 12: Evolução até referência](#313-fase-12-evolução-até-referência)
- [Parte 4: Projetos práticos — o que construir](#parte-4-projetos-práticos--o-que-construir)
- [Parte 5: Recursos e Bibliografia — onde buscar](#parte-5-recursos-e-bibliografia--onde-buscar)

---

## Introdução: O que é ser um desenvolvedor front-end?

Imagine que você entra num restaurante. O salão com mesas arrumadas, garçons educados, um cardápio bonito e uma decoração agradável — isso é o front-end. É a parte que o usuário vê, toca, sente. A cozinha, com chefs e fogões, é o back-end. Ninguém vê a cozinha, mas se o salão for feio, sujo ou confuso, o cliente vai embora antes mesmo de provar a comida.

O desenvolvedor front-end é o arquiteto e construtor desse salão. Ele pega um design (vindo do Figma, do Photoshop ou da cabeça de um designer) e transforma em código que roda no navegador do usuário. Mas ser front-end hoje vai muito além de "centralizar uma div" ou "colocar um botão azul". Você precisa entender de performance, acessibilidade, experiência do usuário, estado de aplicação, consumo de APIs, arquitetura de componentes, testes e um monte de outras coisas que tornam uma interface não apenas bonita, mas funcional, rápida e inclusiva.

Para ser um desenvolvedor front-end de referência — aquele profissional que outros consultam, que decide arquiteturas, que resolve problemas complexos — você precisa dominar muito mais do que HTML, CSS e JavaScript. Você precisa entender o ecossistema inteiro: como o navegador renderiza, como os dados fluem, como a interface se comporta em diferentes dispositivos, como garantir que todos possam usar o que você construiu.

Este guia existe para te levar exatamente até lá, com um caminho claro, uma metodologia comprovada e um plano passo a passo. Não importa se você está começando do zero ou se já tem alguma experiência — o importante é seguir a ordem certa e nunca pular os fundamentos.

---

## Parte 1: O Universo de conhecimento do Front-end

Antes de falar sobre como estudar, você precisa saber **o que estudar**. Esta seção mapeia todo o território que um desenvolvedor front-end de referência precisa conhecer. Pense nela como um mapa: você não precisa dominar tudo de uma vez, mas precisa saber o que existe e onde cada coisa se encaixa.

### 1.1 A Base obrigatória — o alicerce de tudo

Toda construção precisa de uma fundação sólida. Se a base for fraca, o resto desmorona quando a pressão chega — e em produção, a pressão sempre chega. A base do desenvolvedor front-end é composta por conceitos que vão muito além de qualquer framework ou biblioteca.

**Como a web funciona** é o primeiro conceito que você precisa entender. A dança entre cliente e servidor: você digita uma URL, o navegador faz uma requisição DNS para descobrir onde o site está, abre uma conexão HTTP com o servidor, o servidor processa e devolve HTML, CSS e JavaScript, e o navegador renderiza tudo isso na tela. Esse ciclo parece simples, mas cada etapa tem dezenas de nuances que um desenvolvedor de referência conhece em profundidade.

**O navegador** é o seu ambiente de trabalho. Você precisa entender como ele funciona: como ele faz o parsing do HTML para construir o DOM, como processa o CSS para montar o CSSOM, como combina os dois na Render Tree, como calcula o layout (posição e tamanho de cada elemento) e como pinta tudo na tela. Esse fluxo se chama **Critical Rendering Path** e é a base para entender performance front-end. Quanto mais cedo você internalizar esse conceito, mais fácil será otimizar aplicações mais tarde.

**Git** não é opcional — é obrigatório. Você precisa dominar commit, branch, merge, rebase, pull request e code review. Git é a ferramenta que permite você trabalhar em equipe sem pisar no código dos outros, que mantém histórico de tudo que foi feito e que permite voltar atrás quando algo quebra. Um desenvolvedor que não sabe Git direito simplesmente não está pronto para o mercado.

**Terminal e linha de comando** são ferramentas do dia a dia. Instalar pacotes com npm, rodar scripts, navegar entre diretórios, manipular arquivos — tudo isso é mais rápido e mais preciso no terminal do que em qualquer interface gráfica. Não precisa ser um expert em shell, mas precisa se sentir confortável.

**Leitura de documentação técnica** é uma habilidade que separa iniciantes de profissionais. O iniciante busca tutoriais no YouTube. O profissional abre a documentação oficial e descobre sozinho. A documentação pode parecer intimidadora no começo, mas com prática você aprende a ler, entender e aplicar o que está escrito. A MDN (Mozilla Developer Network) será sua melhor amiga.

**Debug com DevTools** é outra habilidade essencial. O Chrome DevTools não serve só para inspecionar elementos. Você vai usar a aba Elements para ver o HTML e CSS em tempo real, a aba Console para testar código JavaScript, a aba Network para analisar requisições, a aba Performance para identificar gargalos, a aba Application para ver cookies e armazenamento, e a aba Lighthouse para auditar qualidade. Um desenvolvedor que sabe usar DevTools resolve problemas em minutos; quem não sabe, passa horas.

### 1.2 HTML e Semântica — a estrutura da web

HTML é a espinha dorsal de toda página web. Pode parecer simples, e de fato a sintaxe é, mas o HTML bem escrito faz uma diferença enorme na acessibilidade, no SEO e na manutenibilidade do código.

**Estrutura correta do documento** é o ponto de partida. `<!DOCTYPE html>`, `<html>`, `<head>` com metadados, `<body>` com o conteúdo. Parece básico, mas muitos desenvolvedores pulam essa parte e acabam com páginas que funcionam por sorte, não por propósito.

**Tags semânticas** são o coração do HTML moderno. `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>` — cada uma tem um significado específico. Usá-las corretamente não é frescura: leitores de tela usam essas tags para navegar pelo conteúdo, mecanismos de busca usam para entender a estrutura da página, e outros desenvolvedores usam para entender seu código mais rápido. Uma página feita só de `<div>` é como uma casa sem paredes marcadas — você até consegue morar, mas ninguém sabe qual cômodo é qual.

**Headings bem organizados** (`<h1>` a `<h6>`) criam a hierarquia do conteúdo. O `<h1>` é o título principal da página, e deve haver apenas um. Os `<h2>` são as seções principais, `<h3>` as subseções, e assim por diante. Essa hierarquia não é decorativa — é a base da navegação por leitores de tela e um dos fatores mais importantes para SEO.

**Formulários e inputs** são a principal forma de interação do usuário com o sistema. Você precisa dominar tipos de input (text, email, password, number, date, file, radio, checkbox, etc.), labels associados corretamente (que melhoram a acessibilidade), validação nativa do HTML5 (required, pattern, min, max, type), e mensagens de erro personalizadas. Um formulário bem construído é a diferença entre uma experiência agradável e uma frustrante.

**Imagens e mídia** envolvem mais do que só colocar uma tag `<img>`. Você precisa entender atributo `alt` (essencial para acessibilidade), `figure` e `figcaption` para legendas, `picture` e `source` para imagens responsivas (que se adaptam a diferentes tamanhos de tela), formatos modernos como WebP e AVIF, e lazy loading para carregar imagens só quando o usuário vai vê-las.

**Links e navegação** são o que fazem a web ser uma teia. Links não são só para páginas externas — você pode linkar para seções da mesma página (âncoras), para telefones (`tel:`), para emails (`mailto:`), e para downloads com atributo `download`. A navegação entre telas precisa ser previsível e consistente.

**Metadados** são informações sobre a página que não aparecem diretamente, mas são cruciais. O `<title>` aparece na aba do navegador e no resultado de busca. As meta tags de description, keywords e author ajudam os mecanismos de busca. As tags Open Graph (og:title, og:description, og:image) controlam como sua página aparece quando compartilhada no Facebook, WhatsApp, Twitter e outras redes.

**SEO básico com HTML** significa estruturar seu conteúdo de forma que os mecanismos de busca entendam e valorizem. Headings bem hierarquizados, texto alternativo em imagens, URLs limpas, meta tags adequadas, dados estruturados (Schema.org) para enriquecer os resultados de busca.

### 1.3 CSS — a arte de estilizar

CSS é a linguagem que transforma HTML sem graça em interfaces bonitas e funcionais. Muita gente subestima o CSS, achando que é "fácil" ou "menos importante". Nada mais enganador. CSS moderno é uma linguagem poderosa e complexa, capaz de criar layouts sofisticados, animações suaves e designs responsivos sem uma linha de JavaScript.

**Seletores** são como você encontra os elementos para estilizar. Você tem seletores de tag (`div`), de classe (`.minha-classe`), de ID (`#meu-id`), de atributo (`[type="text"]`), pseudo-classes (`:hover`, `:focus`, `:nth-child`), pseudo-elementos (`::before`, `::after`), e combinações como descendentes, filhos diretos e irmãos. Quanto mais específico seu seletor, mais controle você tem, mas também mais complexidade.

**Cascata e Especificidade** são os dois conceitos mais importantes e mais confusos do CSS. A cascata determina qual regra vence quando duas regras conflitam, baseada em origem (navegador, usuário, autor), importância (`!important`), especificidade e ordem. A especificidade é calculada como um peso: seletores de ID valem mais que classes, que valem mais que tags. Entender isso evita aqueles momentos de "por que esse CSS não funciona?" que todo desenvolvedor já enfrentou.

**Box Model** é o modelo de caixa que todo elemento HTML segue. Cada elemento tem conteúdo (content), preenchimento interno (padding), borda (border) e margem externa (margin). O `box-sizing: border-box` muda como o tamanho total é calculado e é uma das primeiras coisas que você deve definir no seu CSS global.

**Display** define como um elemento se comporta em relação aos outros. `block` ocupa a linha inteira, `inline` fica na mesma linha que outros elementos, `inline-block` é um híbrido, `flex` e `grid` ativam modos de layout poderosos, `none` esconde o elemento. Cada um tem seu lugar.

**Position** controla como um elemento é posicionado no documento. `static` (padrão), `relative` (desloca em relação a si mesmo), `absolute` (desloca em relação ao ancestral posicionado mais próximo), `fixed` (fixo na tela), `sticky` (gruda quando atinge uma posição). Saber posicionar elementos corretamente é essencial para criar interfaces complexas.

**Flexbox** é o sistema de layout unidimensional (uma linha ou uma coluna). Com ele, você alinha itens horizontal e verticalmente, distribui espaço entre eles, inverte a ordem, e faz tudo isso de forma previsível e sem usar hacks como `float` ou `display: table`. Flexbox é o que torna layouts responsivos realmente fáceis.

**CSS Grid** é o sistema de layout bidimensional (linhas e colunas ao mesmo tempo). Enquanto Flexbox é ótimo para componentes lineares (uma barra de navegação, uma lista de cards), Grid é perfeito para layouts de página completos. Você define o grid, posiciona os itens, e o navegador faz o resto. Grid + Flexbox juntos resolvem praticamente qualquer problema de layout.

**Unidades relativas** (`rem`, `em`, `%`, `vh`, `vw`) são preferíveis a unidades absolutas (`px`) porque se adaptam ao contexto. `rem` é relativo ao tamanho da fonte do elemento raiz, `em` é relativo ao elemento pai, `%` é relativo ao elemento pai, `vh` e `vw` são relativos à viewport. Usar unidades relativas é o primeiro passo para um design verdadeiramente responsivo.

**Media Queries** permitem que seu CSS se adapte a diferentes tamanhos de tela, resoluções, orientações e até preferências do usuário (como modo escuro). O padrão mobile-first (escrever o CSS base para mobile e adicionar media queries para telas maiores) é a abordagem mais recomendada.

**Responsividade e Mobile-first** vão além de encolher elementos. É repensar a navegação, reorganizar o conteúdo, esconder ou mostrar elementos conforme o espaço disponível, garantir que botões sejam grandes o suficiente para toques, e testar em dispositivos reais. Um design responsivo de verdade funciona em qualquer tela, de um smartwatch a uma TV 4K.

**Tipografia, espaçamento e cores** são os pilares do design visual. Tipografia inclui escolha de fontes, tamanhos, pesos, alturas de linha, e como tudo isso se combina para criar hierarquia visual. Espaçamento (margin, padding, gap) define o ritmo visual — muito espaçamento faz parecer vazio, pouco faz parecer amontoado. Cores criam identidade, contraste e hierarquia. Use variáveis CSS para manter tudo consistente.

**Variáveis CSS (Custom Properties)** são uma das melhores adições ao CSS moderno. Elas permitem definir valores que podem ser reutilizados em todo o CSS, atualizados dinamicamente (inclusive com JavaScript), e que facilitam a criação de temas (claro/escuro, por exemplo). Em vez de repetir a mesma cor em 50 lugares, você define uma variável `--cor-primaria` e usa onde precisar.

**Pseudo-classes e estados** (`:hover`, `:focus`, `:active`, `:disabled`, `:checked`, `:required`, `:valid`, `:invalid`) permitem estilizar elementos com base no estado ou interação do usuário. São essenciais para feedback visual e acessibilidade.

**Animações e transições** dão vida à interface. `transition` faz a mudança suave entre dois estados (como um botão que muda de cor suavemente). `@keyframes` e `animation` criam animações mais complexas (como um loader girando ou um card aparecendo com efeito). Mas cuidado: animações em excesso são ruins para performance e para usuários com sensibilidade a movimento (use `prefers-reduced-motion`).

**Pré-processadores** como Sass e Less estendem CSS com funcionalidades que o CSS nativo não tinha: variáveis (hoje nativas), aninhamento de seletores, mixins (blocos de código reutilizáveis), funções, loops. Com o CSS moderno, a necessidade de pré-processadores diminuiu, mas muitos projetos ainda os usam.

### 1.4 JavaScript — a alma da interface

JavaScript é a linguagem que faz a web ser interativa. Sem JavaScript, as páginas seriam estáticas como livros. Com JavaScript, você cria experiências dinâmicas, responde a ações do usuário, busca dados do servidor sem recarregar a página, e constrói aplicações completas dentro do navegador.

**Variáveis e tipos** são o ponto de partida. `let` para valores que mudam, `const` para valores constantes (mas cuidado: `const` não impede que objetos e arrays sejam modificados, só impede a reatribuição). Tipos primitivos: `string` (texto), `number` (número), `boolean` (verdadeiro/falso), `null` (vazio intencional), `undefined` (não definido), `symbol` (identificador único), `bigint` (números muito grandes). Entender a diferença entre tipos primitivos (copiados por valor) e objetos (copiados por referência) é crucial.

**Operadores** incluem aritméticos (`+`, `-`, `*`, `/`, `%`, `**`), de comparação (`==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`), lógicos (`&&`, `||`, `!`), de atribuição (`=`, `+=`, `-=`), e o operador ternário (`condição ? valorSeVerdadeiro : valorSeFalso`). Sempre prefira `===` a `==` para evitar problemas de coerção automática de tipos.

**Condicionais** (`if`, `else if`, `else`, `switch`) controlam o fluxo do seu código baseado em condições. O `switch` é útil para múltiplos valores fixos, mas `if/else` é mais flexível e legível na maioria dos casos.

**Laços** (`for`, `while`, `do...while`, `for...of`, `for...in`, `forEach`) permitem repetir operações. `for...of` é ótimo para iterar sobre arrays e strings. `for...in` itera sobre propriedades de objetos (mas use com cuidado). `forEach` é o método mais comum para percorrer arrays, mas não permite `break` ou `continue`.

**Funções** são blocos de código reutilizáveis. Você declara com `function`, usa parênteses para parâmetros e chaves para o corpo. Arrow functions (`() => {}`) são mais concisas e não tem seu próprio `this` — isso é importante em certos contextos, como callbacks. Funções podem ser passadas como argumentos, retornadas de outras funções, e armazenadas em variáveis. Isso é o que torna JavaScript uma linguagem funcional.

**Escopo** define onde uma variável é acessível. Escopo global (visível em todo lugar), escopo de função (visível apenas dentro da função), escopo de bloco (visível apenas dentro do bloco `{}` — com `let` e `const`). Closures são funções que "lembram" do escopo onde foram criadas, mesmo quando executadas em outro contexto. Esse é um dos conceitos mais importantes e confusos do JavaScript.

**Objetos e arrays** são as estruturas de dados fundamentais. Objetos armazenam pares chave-valor. Arrays armazenam listas ordenadas. Você precisa dominar os métodos de array: `map` (transformar cada elemento), `filter` (selecionar elementos), `reduce` (acumular valores), `find` (encontrar um elemento), `some` (algum elemento satisfaz?), `every` (todos satisfazem?), `sort` (ordenar), `push`/`pop` (adicionar/remover no final), `shift`/`unshift` (adicionar/remover no começo), `splice` (adicionar/remover em qualquer posição). Esses métodos são as ferramentas do dia a dia de qualquer desenvolvedor front-end.

**Assincronicidade** é o que permite que o JavaScript faça várias coisas ao mesmo tempo — pelo menos aparentemente. O JavaScript é single-threaded (uma coisa de cada vez), mas usa um Event Loop para gerenciar operações assíncronas. Callbacks foram a primeira abordagem, mas levam ao "callback hell". Promises são uma evolução: representam um valor que pode estar disponível agora, no futuro ou nunca. `async/await` é a forma mais moderna e legível de trabalhar com Promises.

**Promises** tem três estados: pending (pendente), fulfilled (resolvida com sucesso), rejected (rejeitada com erro). Você cria uma Promise com `new Promise((resolve, reject) => {...})` e consome com `.then()` e `.catch()` ou com `async/await` e `try/catch`. `Promise.all()` espera várias Promises em paralelo, `Promise.race()` pega a primeira que resolver.

**async/await** é açúcar sintático sobre Promises. Uma função `async` sempre retorna uma Promise. Dentro dela, `await` pausa a execução até a Promise resolver. Isso torna o código assíncrono tão legível quanto código síncrono.

**Fetch e consumo de API** são como o front-end conversa com o back-end. A Fetch API nativa do navegador faz requisições HTTP. Você usa `fetch(url)` que retorna uma Promise, depois `.then(response => response.json())` para extrair os dados. Trate sempre os erros com `catch` ou `try/catch`, e considere estados de loading, sucesso e erro na sua interface.

**Modularização** é a organização do código em arquivos separados (módulos). Com ES Modules (`import`/`export`), você divide seu código em partes menores e reutilizáveis, cada uma com sua responsabilidade. Isso melhora a organização, facilita testes e permite que o navegador ou o bundler otimize o carregamento.

**Manipulação do DOM** é como o JavaScript interage com a página. Você seleciona elementos com `querySelector`, `querySelectorAll`, `getElementById`. Modifica conteúdo com `textContent`, `innerHTML`. Modifica estilos com `element.style.property`. Adiciona/remove classes com `classList.add`, `classList.remove`, `classList.toggle`. Cria elementos com `createElement`, `appendChild`. Remove com `removeChild`, `remove`. Tudo que o usuário vê e interage passa pela manipulação do DOM.

**Eventos** são a forma de responder a ações do usuário: clique, teclado, mouse, toque, formulário, scroll, resize. Você adiciona listeners com `addEventListener`. O Event Loop gerencia a propagação dos eventos em três fases: captura (do documento até o elemento alvo), alvo (o elemento que recebeu o evento) e bolha (do elemento alvo de volta ao documento). O **event delegation** é uma técnica poderosa: em vez de adicionar um listener para cada elemento, você adiciona um no pai e usa a bolha para capturar eventos dos filhos. Isso funciona mesmo para elementos criados dinamicamente.

### 1.5 TypeScript — segurança em escala

JavaScript é uma linguagem dinâmica: você não diz que tipo uma variável vai ter. Isso dá flexibilidade, mas também abre portas para erros que só aparecem em execução. TypeScript resolve isso adicionando tipagem estática ao JavaScript.

**Tipos primitivos** em TypeScript são `string`, `number`, `boolean`, `null`, `undefined`, `void` (para funções que não retornam nada), `any` (desliga a tipagem — evite usar), `unknown` (tipo seguro para valores desconhecidos), `never` (para funções que nunca retornam, como lançamento de erro). Use `any` apenas como último recurso.

**Interfaces e Type Aliases** definem a forma de objetos. `interface` é mais extensível (pode ser declarada várias vezes e mesclada), `type` é mais flexível (pode representar uniões, interseções, tipos primitivos). Na prática, use `interface` para objetos e `type` para o resto. Exemplo:

```typescript
interface Usuario {
  id: number;
  nome: string;
  email: string;
  ativo: boolean;
}
```

**Generics** permitem criar funções, classes e tipos que funcionam com qualquer tipo, mantendo a segurança da tipagem. `Array<T>` é um generic. `function primeiro<T>(lista: T[]): T` é uma função genérica. Generics são a ferramenta que torna TypeScript realmente poderoso para criar código reutilizável e seguro.

**Enums** são conjuntos de valores nomeados, úteis para representar opções fixas como status, categorias, direções. Prefira `const enum` para evitar código extra no JavaScript final.

**Union e Intersection types** combinam tipos. Union (`string | number`) significa "pode ser um ou outro". Intersection (`A & B`) significa "tem que ser ambos". Unions são especialmente úteis para representar estados: `type Resultado = Sucesso | Erro | Carregando`.

**Narrowing** é o processo de refinar um tipo dentro de um bloco condicional. TypeScript entende que depois de um `typeof x === 'string'`, dentro do bloco `x` é uma string. Entender narrowing permite trabalhar com unions de forma segura.

**Tipagem de funções e objetos** inclui parâmetros opcionais (`?`), parâmetros com valor padrão, `rest parameters`, `overloads` (múltiplas assinaturas para a mesma função), e `this` tipado.

**Configuração do tsconfig.json** controla como o TypeScript é compilado: `target` (versão do JavaScript de saída), `module` (sistema de módulos), `strict` (ativa todas as verificações rigorosas), `outDir` (pasta de saída), `rootDir` (pasta de entrada). Ative `strict` sempre.

**Uso em componentes** no React tipa props e estado. Exemplo:

```typescript
interface BotaoProps {
  texto: string;
  variante?: 'primario' | 'secundario';
  onClick: () => void;
  desabilitado?: boolean;
}
```

TypeScript se tornou obrigatório em projetos front-end profissionais por um motivo simples: ele pega erros em tempo de compilação que passariam despercebidos em JavaScript puro até o usuário final encontrar. É uma camada de segurança que paga o investimento muitas vezes.

### 1.6 Frameworks e Bibliotecas — produtividade real

Um framework front-end é como um kit de construção: você não precisa fabricar cada peça do zero, só montar conforme o projeto. Eles resolvem problemas comuns: componentização, estado, roteamento, renderização. Os principais são React, Vue e Angular.

**React** é o mais popular. Criado pelo Facebook, é uma biblioteca (não um framework completo) para construir interfaces com componentes. Usa JSX (HTML dentro do JavaScript), um Virtual DOM para renderização eficiente, e um fluxo de dados unidirecional. Seus hooks (`useState`, `useEffect`, `useContext`, `useRef`, `useMemo`, `useCallback`) revolucionaram a forma de escrever componentes.

**Vue** é progressivo: você pode usar só uma parte (como substituir jQuery) ou o framework inteiro. É conhecido por ser mais fácil de aprender que React, com template HTML separado do JavaScript, e um sistema de reatividade baseado em observables. Composition API (similar aos hooks do React) e Pinia (gerenciamento de estado) são suas ferramentas modernas.

**Angular** é um framework completo e opinativo: ele dita como organizar o projeto, como fazer requisições, como gerenciar estado. Usa TypeScript nativamente, módulos, serviços, injeção de dependência, RxJS para programação reativa. É mais usado em grandes corporações e sistemas complexos.

Independente do framework, os conceitos são os mesmos:

**Componentização** é dividir a interface em partes independentes e reutilizáveis. Um botão é um componente, um card é um componente, uma página inteira é a composição de vários componentes. Cada componente tem sua própria aparência (HTML + CSS) e comportamento (JavaScript).

**Props** (ou propriedades) são os dados que um componente pai passa para um componente filho. São como argumentos de função: o componente recebe e usa. Em React, props são imutáveis — o componente nunca deve modificar suas próprias props.

**State** (estado) são os dados internos do componente, que podem mudar ao longo do tempo. Quando o estado muda, o componente re-renderiza para refletir os novos dados. A diferença entre props (dados que vêm de fora) e state (dados internos) é fundamental.

**Hooks** (em React) são funções que permitem usar estado e outras funcionalidades do React em componentes funcionais. `useState` gerencia estado local, `useEffect` executa efeitos colaterais (buscar dados, manipular o DOM, timers), `useContext` acessa contexto global, `useRef` mantém referências que não causam re-render, `useMemo` e `useCallback` otimizam performance.

**Ciclo de vida** de um componente inclui montagem (quando aparece na tela), atualização (quando props ou estado mudam) e desmontagem (quando sai da tela). Os hooks substituem os métodos de ciclo de vida de classe.

**Renderização condicional** exibe ou esconde partes da interface baseada em condições. `&&`, ternário, `if/else` no JSX. É o que permite mostrar loading enquanto dados carregam, mensagens de erro quando algo falha, e conteúdo vazio quando não há dados.

**Listas e keys** são usadas para renderizar coleções de dados. Quando você usa `map` para transformar um array em componentes, cada componente precisa de uma `key` única e estável (de preferência um ID, nunca o índice do array) para o React identificar qual elemento mudou, foi adicionado ou removido.

**State management** gerencia o estado global da aplicação. Context API resolve casos simples, mas para aplicações maiores você vai precisar de bibliotecas como Redux Toolkit (padrão da indústria), Zustand (simples e moderno) ou Jotai (atômico). O estado global deve ser usado com moderação — a maior parte do estado deve ficar local nos componentes.

**Routing** é a navegação entre telas. React Router, Vue Router, Angular Router. Você define rotas, protege rotas que exigem autenticação, passa parâmetros na URL, faz lazy loading de páginas para não carregar tudo de uma vez.

**Form handling** em frameworks vai além do HTML puro. Bibliotecas como React Hook Form (React) ou VeeValidate (Vue) facilitam validação, estados de erro, valores padrão, máscaras de input. Mas você também pode fazer manualmente — o importante é entender o conceito.

**SSR/SSG** são estratégias de renderização. SSR (Server-Side Rendering) renderiza a página no servidor e envia HTML pronto para o navegador — melhor para SEO e performance inicial. SSG (Static Site Generation) gera páginas HTML estáticas no build — mais rápido possível. Meta-frameworks como Next.js (React), Nuxt.js (Vue) e Astro (multi-framework) implementam essas estratégias.

**Meta-frameworks** (Next.js, Nuxt, Astro, SvelteKit, Remix) adicionam camadas sobre os frameworks básicos para resolver problemas de produção: roteamento baseado em arquivos, SSR/SSG, otimização de imagens, API routes, middleware, entre outros. Hoje em dia, é raro um projeto profissional usar React puro sem Next.js.

### 1.7 Arquitetura Front-end — organizando o caos

Conforme os projetos crescem, a organização do código se torna crítica. Uma boa arquitetura front-end separa responsabilidades, facilita a manutenção e permite que times grandes trabalhem no mesmo código sem conflitos.

**Separação de responsabilidades** significa que cada parte do código tem um motivo claro para existir e um único motivo para mudar. Separação entre lógica (JavaScript), apresentação (HTML/CSS) e dados (APIs, estado). Componentes de apresentação só se preocupam com a aparência; componentes de negócio sabem o que fazer com os dados.

**Organização por feature** agrupa arquivos por funcionalidade, não por tipo. Em vez de uma pasta `components/` com todos os componentes do sistema, você tem `usuário/`, `produto/`, `carrinho/`, cada uma com seus próprios componentes, hooks, estilos e testes. Isso facilita encontrar o código relacionado e isola mudanças.

**Component-driven development** significa que tudo é um componente — botões, formulários, páginas, layouts, provedores de contexto. Componentes pequenos e focados são mais fáceis de testar, reutilizar e manter.

**Design System** é uma biblioteca de componentes reutilizáveis que segue padrões consistentes de design. Inclui cores, tipografia, espaçamento, ícones, componentes (botão, input, modal, tabela). Um design system bem feito acelera o desenvolvimento e garante consistência visual.

**Atomic Design** é uma metodologia que organiza componentes em cinco níveis: átomos (elementos básicos como botão, input), moléculas (combinações simples como campo de formulário com label), organismos (seções complexas como cabeçalho com navegação e busca), templates (layouts de página), e páginas (templates com conteúdo real).

**Escalabilidade de UI** é a capacidade de crescer sem degradação. Isso envolve code splitting (carregar só o que precisa), lazy loading (adiar o carregamento), virtualização de listas (renderizar só o que está visível), memoização (evitar recálculos desnecessários).

**Padronização de pastas** define uma estrutura consistente para todos os projetos. Uma estrutura comum:

```
src/
  components/    — componentes compartilhados
  features/      — componentes por funcionalidade
  hooks/         — hooks customizados
  services/      — chamadas de API
  utils/         — funções utilitárias
  types/         — tipos TypeScript
  styles/        — estilos globais
  pages/         — páginas/rotas
  context/       — contextos globais
```

**Camadas de aplicação** separam o código em três níveis: apresentação (componentes visuais), negócio (lógica, validação, transformação) e dados (API, armazenamento, cache). A apresentação não deve saber como os dados são buscados; a camada de dados não deve saber como os dados são exibidos.

### 1.8 Acessibilidade — a web para todos

Acessibilidade (a11y) não é opcional — é direito do usuário e, em muitos países, exigência legal. Uma interface acessível funciona para pessoas com deficiências visuais, auditivas, motoras e cognitivas. E o melhor: uma interface acessível é melhor para todos.

**Semântica correta** é o alicerce da acessibilidade. Usar tags semânticas (`<nav>`, `<main>`, `<button>`, `<label>`) já resolve grande parte dos problemas. Leitores de tela entendem a estrutura da página e permitem navegação rápida entre seções.

**Navegação por teclado** significa que todas as funcionalidades devem ser acessíveis sem mouse. Tab para avançar, Shift+Tab para voltar, Enter e Espaço para ativar, Setas para navegar em listas e menus. O foco visível (aquele outline azul) é essencial — nunca use `outline: none` sem fornecer uma alternativa.

**Foco visível** mostra qual elemento está ativo no teclado. Nunca remova o outline sem substituir por outro indicador visual claro. Usuários que navegam por teclado dependem do foco para saber onde estão.

**Contraste** entre texto e fundo precisa ser suficiente para leitura. WCAG exige contraste mínimo de 4.5:1 para texto normal e 3:1 para texto grande. Ferramentas como WebAIM Contrast Checker ajudam a verificar.

**ARIA (Accessible Rich Internet Applications)** é um conjunto de atributos que complementam o HTML quando a semântica nativa não é suficiente. `aria-label` para dar nome a elementos sem texto visível, `aria-hidden` para esconder elementos decorativos dos leitores de tela, `aria-expanded` para indicar se um menu está aberto, `role` para definir o papel de elementos (mas prefira tags semânticas sempre que possível). Use ARIA com moderação — a primeira regra é não usar ARIA se o HTML nativo resolver.

**Leitura por screen readers** precisa ser testada com leitores reais: NVDA (Windows, gratuito), VoiceOver (Mac, nativo), JAWS (Windows, pago). O que parece óbvio visualmente pode ser incompreensível para quem ouve a página.

**Estrutura lógica de conteúdo** significa organizar o conteúdo em uma ordem que faça sentido mesmo sem o CSS. Um leitor de tela percorre o DOM na ordem, não na posição visual. Se você usa CSS para reposicionar elementos, pode estar criando uma experiência confusa.

**Formulários acessíveis** precisam de labels associados a inputs (com `for` ou wrapping), mensagens de erro claras, agrupamento de campos relacionados com `fieldset` e `legend`, e indicação de campos obrigatórios.

**Imagens com texto alternativo** no atributo `alt` descrevem o conteúdo da imagem para quem não pode vê-lá. Imagens decorativas devem ter `alt=""` (vazio) para serem ignoradas pelo leitor de tela.

**Componentes acessíveis** significa que cada componente customizado (modal, dropdown, accordion, carrossel) segue os padrões de acessibilidade. Modais devem prender o foco dentro delas, dropdowns devem ser navegáveis por teclado, accordions devem anunciar se estão abertos ou fechados.

**WCAG (Web Content Accessibility Guidelines)** é a referência internacional. Conhecer os critérios de sucesso dos níveis A, AA e AAA. Na prática, AA é o mínimo aceitável para a maioria dos projetos.

### 1.9 UX e UI — a ponte entre código e usuário

Desenvolvedor front-end não é designer, mas precisa entender de UX e UI para traduzir fielmente o design em código e, muitas vezes, contribuir com sugestões que melhoram a experiência.

**Noções de design visual** incluem hierarquia (o que é mais importante deve ser mais visível), alinhamento (elementos alinhados criam ordem), proximidade (elementos relacionados ficam perto), contraste (destacar o importante), repetição (padrões consistentes criam familiaridade), espaço em branco (respiração entre elementos).

**Hierarquia visual** guia o olhar do usuário: o título maior chama atenção primeiro, seguido por subtítulos, depois pelo corpo do texto. Cores e pesos de fonte também criam hierarquia.

**Feedback de interação** é a resposta visual a ações do usuário. Um botão muda de cor quando clicado, um formulário mostra erro quando dados inválidos, uma ação demorada mostra um loader. Sem feedback, o usuário fica perdido.

**Microinterações** são pequenos detalhes que encantam: um like que anima, um toggle que desliza suavemente, uma mensagem que aparece e desaparece. Não são funcionais, mas fazem a diferença na experiência percebida.

**Estados de loading, vazio e erro** são tão importantes quanto o estado de sucesso. Loading mostra que algo está acontecendo. Vazio informa que não há dados (com uma mensagem amigável e ação sugerida). Erro explica o que aconteceu e o que o usuário pode fazer.

**Leitura de Figma** é a habilidade de extrair informações do arquivo de design: dimensões, cores, tipografia, espaçamento, estados dos componentes. Ferramentas como Figma tem recursos de inspeção que mostram o CSS necessário.

**Tradução fiel de layout em código** significa que o resultado final corresponde ao design pixel a pixel (ou o mais próximo possível). Variações intencionais devem ser discutidas com o designer, não decididas sozinho.

**Pensamento centrado no usuário** coloca o usuário no centro das decisões. Não é "como eu acho bonito", é "como o usuário vai usar isso"? Um botão pode ser lindo, mas se ninguém encontra, não serve.

### 1.10 Performance — velocidade como requisito

Performance não é luxo — é requisito. Sites lentos perdem usuários, perdem vendas e perdem posições no Google. O Google considera velocidade como fator de ranking. Um atraso de 1 segundo na carga reduz conversões em 7%. Um desenvolvedor front-end de referência trata performance como parte integrante do desenvolvimento, não como uma etapa final de otimização.

**Core Web Vitals** são as métricas oficiais do Google: LCP (Largest Contentful Paint) — quanto tempo o maior conteúdo da página leva para aparecer, idealmente menos de 2,5 segundos; FID/INP (First Input Delay / Interaction to Next Paint) — quanto tempo a página leva para responder a interações, idealmente menos de 100ms; CLS (Cumulative Layout Shift) — quanto a página "pula" enquanto carrega, idealmente menos de 0.1.

**Lighthouse** é a ferramenta do Chrome que audita performance, acessibilidade, boas práticas e SEO. Dê o nome ao seu filho de Lighthouse. Ela dá notas, sugestões e explicações. Rode Lighthouse cedo e com frequência.

**Tamanho de bundle** é o tamanho total do JavaScript que o navegador precisa baixar, parsear e executar. Quanto menor, mais rápido. Use bundle analyzers para ver o que está ocupando espaço e eliminar o que não precisa.

**Code splitting** divide o bundle em partes menores que são carregadas sob demanda. Em vez de carregar o código da página de configuração junto com a página inicial, você carrega só quando o usuário navega para lá. Frameworks modernos fazem isso automaticamente com lazy loading de rotas.

**Lazy loading** adia o carregamento de recursos que não são imediatamente necessários. Imagens abaixo da dobra (fora da tela inicial) são carregadas só quando o usuário rola até elas. Componentes que não estão visíveis são renderizados só quando precisam. O atributo `loading="lazy"` em `<img>` faz isso nativamente.

**Tree shaking** é a eliminação de código morto. Se você importa uma biblioteca mas usa apenas 3 funções de 50, o tree shaking remove as 47 não usadas do bundle final. Funciona com módulos ES6 e bundlers modernos.

**Imagens otimizadas** são o maior ganho de performance na maioria dos sites. Use formatos modernos (WebP, AVIF) que são muito menores que JPEG e PNG com qualidade similar. Reduza as dimensões da imagem ao tamanho máximo que será exibido. Use `srcset` para servir imagens diferentes para telas diferentes.

**Memoization** evita recálculos e re-renderizações desnecessárias. Em React, `useMemo` memoriza o resultado de um cálculo e `useCallback` memoriza uma função. Só use quando houver um gargalo real — memoização prematura é complexidade desnecessária.

**Virtualização de listas** renderiza apenas os itens visíveis em uma lista longa. Se você tem 10.000 itens, a virtualização renderiza uns 20 de cada vez. Bibliotecas como `react-window` e `react-virtualized` fazem isso.

**Minificação** remove espaços, comentários e caracteres desnecessários do código. Reduz o tamanho dos arquivos em 30-60% sem alterar o comportamento. Bundlers fazem isso automaticamente em modo produção.

**Critical Rendering Path** é a sequência de passos que o navegador segue para pintar a primeira tela. Otimizar o CRP significa entregar o CSS crítico (necessário para renderizar o que aparece primeiro) inline no HTML, adiar o CSS não crítico, e adiar o JavaScript que não é essencial para a renderização inicial.

**Evitar re-render desnecessário** em React é uma arte. Use `React.memo` para evitar re-render de componentes cujas props não mudaram, use `useMemo` e `useCallback` para estabilizar referências, mova estado para baixo (mais perto de onde é usado), e evite contextos que mudam com frequência.

### 1.11 Consumo de APIs — o front-end conversa

O front-end raramente trabalha sozinho. Ele consome APIs para buscar, criar, atualizar e deletar dados. Um desenvolvedor front-end de referência sabe se comunicar com o back-end de forma eficiente, tratando erros, estados e cache.

**REST** é o padrão mais comum. Recursos identificados por URLs, operações mapeadas para verbos HTTP (GET para buscar, POST para criar, PUT para substituir, PATCH para atualizar parcialmente, DELETE para remover), representações em JSON ou XML. Você precisa saber montar requisições, tratar respostas e lidar com erros.

**Autenticação via token** (JWT — JSON Web Token) é o padrão moderno. O usuário faz login, recebe um token, e envia esse token no header `Authorization` de cada requisição. O back-end verifica o token e identifica o usuário. Você precisa armazenar o token com segurança (httpOnly cookies de preferência, ou localStorage com cuidados), enviar nas requisições, e tratar expiração (refresh tokens).

**Headers** HTTP carregam metadados das requisições. Content-Type diz o formato dos dados, Accept diz o formato aceito como resposta, Authorization leva o token de autenticação, Cache-Control controla cache. Saber configurar headers corretamente é essencial.

**Paginação** controla a quantidade de dados retornados. Em vez de buscar 10.000 registros de uma vez, o back-end retorna páginas de 20 ou 50. Você precisa implementar "carregar mais" ou paginação com número de páginas, controlando loading states e evitando chamadas duplicadas.

**Tratamento de erro** não é opcional. Toda requisição pode falhar: rede caiu, servidor com problema, token expirou, dado não encontrado. Trate cada caso: mostre mensagens amigáveis, ofereça retry quando apropriado, não deixe a interface quebrada ou em loading eterno.

**Loading states** informam o usuário que algo está acontecendo. Spinners, skeletons (esqueletos cinza que imitam o layout final), barras de progresso. O importante é nunca deixar o usuário olhando para uma tela vazia sem entender o que está acontecendo.

**Cache** evita requisições desnecessárias. Dados que não mudam com frequência (lista de estados, configurações) podem ser cacheados no front-end. Bibliotecas como TanStack Query (React Query) e SWR gerenciam cache automático, stale-while-revalidate (mostra dado em cache e atualiza em background), e refetch em intervalos.

**BFF (Backend for Frontend)** é um padrão onde um servidor intermediário (o BFF) serve como ponte entre o front-end e os micro-serviços. O BFF formata os dados especificamente para as necessidades do front-end, reduzindo a quantidade de chamadas e simplificando a lógica no navegador.

**WebSockets** permitem comunicação bidirecional em tempo real. Diferente do HTTP (onde o cliente faz requisição e o servidor responde), no WebSocket o servidor pode enviar dados para o cliente sem o cliente pedir. Útil para chats, notificações em tempo real, atualizações de preço em tempo real.

### 1.12 Testes e Qualidade — entregando confiança

Código sem teste é código que você não confia. Pode funcionar hoje, mas você não sabe se uma mudança amanhã vai quebrar. Testes não são custo — são investimento. Eles permitem refatorar com segurança, documentam o comportamento esperado, e pegam bugs antes do usuário.

**Testes unitários** testam a menor unidade de código isoladamente: uma função, um componente, um hook. Eles são rápidos, confiáveis e rodam a cada commit. Ferramentas: Jest, Vitest. Teste funções puras (mesma entrada, mesma saída) e componentes com diferentes props.

**Testes de integração** testam como diferentes partes do sistema funcionam juntas. Um formulário que chama uma função de validação que mostra uma mensagem de erro. Duas unidades cooperando.

**Testes end-to-end (E2E)** testam fluxos completos do usuário, do começo ao fim, no navegador real. Login, navegação, preenchimento de formulário, verificação de resultado. Ferramentas: Cypress, Playwright. São mais lentos e frágeis, mas cobrem o que nenhum outro teste cobre.

**Component testing** testa componentes isoladamente, renderizando com diferentes props, simulando eventos, e verificando a saída. React Testing Library é a ferramenta padrão para React. A filosofia é testar o comportamento (o que o usuário vê e faz), não a implementação (como o código funciona internamente).

**Snapshot testing** captura a saída renderizada de um componente e a compara com um snapshot salvo. Se o snapshot mudar, o teste falha. Útil para detectar mudanças não intencionais, mas frágil se usado em excesso.

**Mocking** substitui dependências reais (APIs, módulos, funções) por versões controladas durante o teste. Você não quer que seu teste de componente faça uma requisição real para a API — você mocka a resposta e testa como o componente reage.

**Testes de acessibilidade** verificam se a interface atende critérios de acessibilidade. Ferramentas como axe-core (integradas ao Testing Library) encontram problemas automaticamente: contraste insuficiente, labels faltando, ARIA mal usado.

**Testes de responsividade** verificam se a interface se adapta corretamente a diferentes tamanhos de tela. Ferramentas como Percy e Chromatic fazem testes de regressão visual: capturam screenshots e comparam com versões anteriores.

**Coverage** mede qual porcentagem do código é coberta por testes. 100% de cobertura não significa código perfeito, mas cobertura baixa significa áreas não testadas. Use coverage como guia, não como meta.

**Code review** é a prática de ter outro desenvolvedor revisando seu código antes de ir para produção. Pega bugs, melhora a qualidade, dissemina conhecimento. Um code review bem feito é construtivo, específico e respeitoso.

### 1.13 Ferramentas do dia a dia

Um desenvolvedor front-end usa dezenas de ferramentas diariamente. Conhecer cada uma bem é o que separa um profissional produtivo de um que perde tempo.

**Git e GitHub** são obrigatórios. Commit atômico (uma mudança por commit), mensagens claras (o que mudou e por quê), branches descritivas (feature/login, fix/corrige-botao), pull requests com descrição e screenshots.

**npm, yarn ou pnpm** gerenciam dependências. Entenda o que é package.json, node_modules, lock file, scripts, dependências de desenvolvimento vs produção. pnpm é mais rápido e eficiente que npm e yarn.

**Vite** é o bundler moderno preferido. Extremamente rápido no desenvolvimento (HMR instantâneo), configuração mínima, bom para projetos novos. Webpack ainda existe em projetos legados, mas Vite é o padrão atual.

**ESLint** analisa o código em busca de problemas: erros de sintaxe, más práticas, padrões problemáticos. Configuração compartilhada no time garante consistência.

**Prettier** formata o código automaticamente. Sem discussões sobre espaço vs tab, vírgula no final ou não, aspas simples vs duplas. Prettier decide e todo mundo aceita.

**Chrome DevTools** e as abas Elements, Console, Network, Performance, Application, Lighthouse. Saiba usar cada uma.

**Lighthouse** para auditoria de performance, acessibilidade, boas práticas e SEO.

**Figma** para inspecionar designs, extrair CSS, entender o sistema de design.

**Postman/Insomnia** para testar APIs, ver respostas, configurar headers, simular autenticação.

**Docker** em contexto de ambiente: usar containers para ter o mesmo ambiente de desenvolvimento que produção, evitar o "na minha máquina funciona".

### 1.14 Segurança no Front-end

Segurança não é responsabilidade só do back-end. O front-end também tem vulnerabilidades que um desenvolvedor de referência conhece e previne.

**XSS (Cross-Site Scripting)** é a vulnerabilidade mais comum no front-end. O atacante injeta código JavaScript malicioso na página, que rouba dados do usuário, redireciona para sites falsos, ou modifica a página. Prevenção: nunca confie em dados do usuário (sanitize input), escape output (React faz isso automaticamente com `{}`), use Content Security Policy (CSP).

**CSRF (Cross-Site Request Forgery)** força o usuário a executar ações indesejadas em um site onde está autenticado. Prevenção: tokens CSRF enviados em formulários, cookies com `SameSite`, verificação de header `Origin`/`Referer`.

**CORS (Cross-Origin Resource Sharing)** é um mecanismo do navegador que controla quais domínios podem acessar seus recursos. Entender CORS é essencial para consumir APIs. Erros de CORS são comuns e confusos — você precisa saber como configurar headers de acesso no servidor.

**Content Security Policy (CSP)** é um header HTTP que controla quais recursos podem ser carregados em sua página. Bloqueia scripts inline maliciosos, limita origens de imagens e fontes, previne XSS mesmo que o atacante consiga injetar código.

**Sanitização de dados** é limpar dados do usuário antes de usá-los. Nunca insira HTML fornecido pelo usuário diretamente no DOM sem sanitizar. Bibliotecas como DOMPurify fazem isso.

**Gestão de tokens** é como você armazena e gerencia tokens de autenticação. Prefira cookies httpOnly (não acessíveis por JavaScript) em vez de localStorage. Se usar localStorage, saiba que qualquer script XSS pode roubar o token.

**Armazenamento seguro** significa não armazenar senhas, tokens ou dados sensíveis em texto puro no front-end. O front-end é inerentemente inseguro — qualquer dado no navegador pode ser acessado pelo usuário.

**OWASP Top 10 para Front-end** é a lista das vulnerabilidades mais críticas. Conheça cada uma e saiba como prevenir.

### 1.15 SEO — visibilidade nos buscadores

SEO (Search Engine Optimization) é o conjunto de práticas para fazer seu site aparecer nos resultados de busca. Muitas decisões de front-end afetam o SEO diretamente.

**HTML semântico** ajuda os mecanismos de busca a entender a estrutura e importância do conteúdo. Headings bem hierarquizados, tags semânticas, texto alternativo em imagens.

**Title e meta description** são o que aparece no resultado da busca. O title é o título do link, a meta description é a descrição. Ambos influenciam a taxa de clique.

**Open Graph** controla como sua página aparece quando compartilhada em redes sociais (Facebook, WhatsApp, LinkedIn, Twitter). Og:title, og:description, og:image, og:url. Uma página sem Open Graph compartilha um link genérico e feio.

**Dados estruturados (Schema.org)** adicionam informações extras que os mecanismos de busca entendem: tipo de conteúdo (artigo, produto, receita, evento), avaliação, preço, disponibilidade. Aparecem como rich snippets nos resultados — estrelas de avaliação, preço, imagem.

**URLs amigáveis** são legíveis e descritivas. `/produto/123/cadeira-escritorio` em vez de `/produto.php?id=123`. Usam hífens, não underscores, e palavras relevantes.

**Renderização adequada** significa que os mecanismos de busca conseguem ver seu conteúdo. SPAs (Single Page Applications) renderizam tudo com JavaScript, e mecanismos de busca tradicionais podem não executar JavaScript. SSR (Server-Side Rendering) ou SSG (Static Site Generation) resolvem isso.

**Velocidade de página** é fator de ranking. Sites lentos aparecem pior nos resultados. As métricas de performance (Core Web Vitals) também são métricas de SEO.

### 1.16 Comunicação e Processo

Um desenvolvedor front-end não trabalha isolado. Ele se comunica com design, back-end, produto e outros desenvolvedores. Saber se comunicar é tão importante quanto saber programar.

**Comunicação clara com design** significa saber dar feedback técnico sobre viabilidade de implementação, sugerir alternativas que mantenham a experiência sem comprometer performance, e traduzir layouts em componentes funcionais.

**Comunicação com back-end** significa entender as limitações da API, negociar formatos de dados que funcionam para os dois lados, e saber quando uma mudança no front-end é melhor que uma mudança no back-end (e vice-versa).

**Leitura de requisitos** é extrair o que precisa ser feito a partir de descrições muitas vezes vagas. Perguntar as perguntas certas: "qual o comportamento em caso de erro?" "o que acontece se o usuário não está logado?" "qual o estado vazio?"

**Entendimento de produto** é conectar o código ao valor de negócio. Não é só implementar uma tela de cadastro — é entender por que o cadastro existe, o que o usuário ganha com ele, e como medir se está funcionando.

**Colaboração em time ágil** envolve participar de rituais (daily, planning, review, retrospectiva), dar estimativas realistas, e comunicar impedimentos cedo.

**Escrita de documentação** técnica: READMEs, Storybook (documentação de componentes), changelogs, ADRs (Architecture Decision Records) — documentos que registram decisões técnicas e por que foram tomadas.

### 1.17 Os níveis de Proficiência

Nem todo conhecimento tem o mesmo peso. Alguns tópicos você precisa dominar em profundidade. Outros você só precisa conhecer. Esta seção organiza os tópicos por nível de proficiência esperado.

**Básico (domínio obrigatório)** : HTML semântico, CSS (seletores, box model, flexbox, grid, responsividade), JavaScript (variáveis, funções, DOM, eventos, promises, async/await, fetch, métodos de array), Git (add, commit, push, pull, branch, merge), terminal básico, DevTools.

**Intermediário (domínio esperado)** : TypeScript (interfaces, generics, unions), um framework (React, Vue ou Angular), consumo de APIs, state management, roteamento, testes unitários e de componente, CSS moderno (variáveis, animações, container queries), pré-processadores, acessibilidade básica, performance básica (Lighthouse, lazy loading).

**Avançado (diferencial de referência)** : TypeScript avançado (tipos condicionais, utilitários), SSR/SSG com meta-frameworks, design systems, arquitetura front-end (micro-frontends, monorepos), testes E2E, performance avançada (Core Web Vitals, bundle analysis, CRP), acessibilidade avançada (WCAG, ARIA), segurança (XSS, CSP, CSRF), CI/CD, Docker, observabilidade.

### 1.18 Soft Skills — o que o código não ensina

Ser referência técnica não é só sobre código. As habilidades interpessoais são o que diferencia um desenvolvedor que entrega features de um desenvolvedor que lidera projetos.

**Mentoria** é ensinar outros desenvolvedores sem fazer por eles. Guiar, não dar a resposta. Revisar código com intenção de ensinar, não de criticar.

**System Design** é a capacidade de projetar sistemas: escolher a arquitetura certa, avaliar trade-offs, planejar escalabilidade. Não é coisa de back-end — front-end também tem system design.

**Tomada de decisões** baseada em trade-offs significa que não existe resposta certa absoluta. Toda decisão técnica tem prós e contras. Um desenvolvedor de referência pesa os fatores e decide com base no contexto.

**Comunicação** técnica é explicar conceitos complexos de forma clara. Escrever documentação que outros entendem. Apresentar ideias em reuniões. Argumentar decisões técnicas com dados, não com opinião.

**Product Thinking** é entender que o código serve ao produto, não o contrário. Um desenvolvedor de referência pergunta "por que" antes de perguntar "como".

---

## Parte 2: Como Estudar — A Metodologia do Loop Infinito

Saber **o que** estudar é metade do caminho. A outra metade é saber **como** estudar de forma eficiente, consistente e sustentável. Esta seção apresenta uma metodologia de estudo baseada em ciclos contínuos, que impede a sensação de "nunca sei o suficiente" e garante que você sempre avança sem esquecer o que aprendeu.

### 2.1 A Filosofia do Loop — por que estudar em espiral

A maioria das pessoas estuda de forma linear: termina um assunto e nunca mais revisa. O resultado é que, meses depois, o que foi estudado está perdido. Você lembra que estudou, mas não lembra o conteúdo.

O aprendizado em espiral é diferente. Você não termina um assunto — você o revisita em camadas cada vez mais profundas. Imagine uma espiral: a cada volta, você passa pelo mesmo ponto, mas em um nível mais alto. A primeira vez que você estuda Flexbox, você aprende o básico: display: flex, justify-content, align-items. Na segunda volta, você entende flex-grow, flex-shrink, flex-basis. Na terceira, você sabe quando usar Flexbox vs Grid. Na quarta, você ensina Flexbox para outros.

Esse ciclo de 6 meses garante que você nunca abandona fundamentos, sempre adiciona profundidade, e evolui de forma consistente. É melhor estudar 30 minutos por dia durante 6 meses do que 8 horas por dia durante 1 mês e depois parar.

### 2.2 O Loop de 6 Meses — o ciclo completo

Cada ciclo de 6 meses tem um tema central. Dentro de cada mês, você tem um foco principal, mas também revisa o que já estudou e aplica na prática.

**Regra semanal fixa**: toda semana segue o mesmo formato. Segunda é teoria, Terça é exercício, Quarta é revisão, Quinta é projeto, Sexta é qualidade, Sábado é leitura, Domingo é planejamento. Essa repetição cria ritmo e impede que você se perca.

**Mês 1: Fundamentos da Web**. HTML, CSS, Git, terminal, como o navegador funciona. Revisão de lógica de programação e exercícios de construção de páginas estáticas. Projeto: site pessoal ou landing page responsiva.

**Mês 2: JavaScript Essencial**. Variáveis, funções, DOM, eventos, promises, async/await, fetch, métodos de array. Revisão de HTML e CSS aplicando JavaScript nos projetos anteriores. Projeto: aplicação interativa que consome API pública (clima, filmes, etc.).

**Mês 3: TypeScript e Framework**. Tipagem estática, interfaces, generics, React (ou Vue/Angular): componentes, props, estado, hooks, roteamento. Revisão de JavaScript. Projeto: dashboard ou e-commerce simples com roteamento e estado.

**Mês 4: Consumo de APIs e Gerenciamento de Estado**. Autenticação, tratamento de erro, cache, TanStack Query, Context API, state management. Revisão do projeto do mês 3 adicionando autenticação e estado global. Projeto: aplicação com login, proteção de rotas e dados do usuário.

**Mês 5: Performance, Acessibilidade e Testes**. Core Web Vitals, Lighthouse, lazy loading, code splitting, WCAG, ARIA, testes unitários e E2E. Revisão geral: refatorar projetos anteriores aplicando performance e acessibilidade. Projeto: portfólio completo com testes, acessível e performático.

**Mês 6: Arquitetura e Produção**. Design systems, atomic design, SSR/SSG com Next.js, CI/CD, Docker, deploy. Revisão de todo o ciclo. Projeto: aplicação completa do zero, com SSR, testes, CI/CD e deploy.

Ao final do mês 6, o ciclo recomeça. Mas agora você está em um nível mais alto. Os fundamentos são revisados mais rápido, o framework fica mais natural, e você começa a explorar tópicos avançados que antes estavam fora do seu alcance.

### 2.3 Rotina Semanal — o que fazer cada dia

A rotina semanal distribui os 5 pilares do aprendizado ao longo da semana, garantindo que você nunca fique preso em um único tópico.

**Segunda — Base nova**: estude o tema principal da semana. Leia a documentação oficial, assista a uma aula, leia um capítulo de livro. Foco em entender o conceito, não em decorar.

**Terça — Exercícios guiados**: pratique com exercícios estruturados. Desafios no Frontend Mentor, exercícios de JavaScript, laboratórios guiados. Mão no código.

**Quarta — Revisão ativa**: revisite o conteúdo da semana anterior e do mês anterior. Explique em voz alta, faça um resumo, resolva um exercício antigo sem consultar.

**Quinta — Aplicação prática**: aplique o que estudou no seu projeto principal. Crie uma nova feature, refatore um componente, integre uma API. O projeto é onde o aprendizado vira experiência.

**Sexta — Qualidade**: testes, refatoração, debug, análise de performance. Melhore o que você construiu durante a semana. Escreva testes, otimize imagens, verifique acessibilidade.

**Sábado — Leitura técnica**: leia documentação, artigos técnicos, código de projetos open-source. Explore tópicos que você não estudou durante a semana. Amplie seu conhecimento.

**Domingo — Revisão e planejamento**: revise o que aprendeu na semana, atualize suas anotações, planeje a próxima semana. Não codifique no domingo — o cérebro precisa descansar.

### 2.4 Rotina Diária — quando o tempo é curto

Nem todo mundo tem horas por dia para estudar. Se você só tem 30-60 minutos por dia, o segredo é foco e consistência.

- **20-30 min**: revisão de anotações do dia anterior + leitura rápida de documentação
- **30-60 min**: estudo profundo do tema da semana + prática no projeto
- **15 min**: reflexão — anote o que aprendeu, dúvidas que surgiram, e o que fazer amanhã

O importante é não pular dias. Um dia perdido quebra o ritmo. Cinco dias de 30 minutos valem mais que um dia de 5 horas seguido de 4 dias sem estudar.

### 2.5 O Loop de Revisão — nunca esquecer

A revisão é o que transforma aprendizado temporário em conhecimento permanente. Sem revisão, você esquece 80% do que estudou em 30 dias.

A cada final de semana, revise o conteúdo da semana. Use o método de recordação ativa: feche as anotações e tente explicar o conceito em voz alta. O que você consegue explicar sem consultar, você realmente aprendeu.

### 2.6 O Loop de Pesquisa — aprender a aprender

Nem tudo que você precisa saber está em um curso ou tutorial. Grande parte do aprendizado de um desenvolvedor front-end vem da pesquisa autônoma: você precisa resolver um problema, pesquisa, testa, erra, acerta, e aprende.

A habilidade de pesquisar corretamente é subestimada. Saber formular a pergunta certa no Google, filtrar resultados relevantes, avaliar a qualidade da fonte, adaptar a solução para seu contexto. Isso se aprende praticando.

### 2.7 O Loop de Projetos — teoria vira prática

Estudar sem praticar é como ler sobre natação sem entrar na água. Você pode saber a teoria, mas na hora de aplicar, não sabe.

Cada fase de estudo deve ser acompanhada de um projeto prático. Não um projetinho descartável de tutorial, mas um projeto que evolui com você. Comece simples e adicione complexidade conforme avança. Um projeto que começou como landing page pode se tornar uma aplicação completa com framework, testes e deploy.

### 2.8 O Loop de Especialização — aprofundando

Depois de dominar o básico, escolha uma área de especialização. Pode ser performance, acessibilidade, design systems, animações, WebGL, PWA, ou o framework que você usa.

A especialização não significa abandonar o resto. Significa ter uma área onde você é a referência, enquanto mantém conhecimento sólido nas outras áreas.

### 2.9 Distribuição de Esforço — onde investir tempo

Nem todo tópico merece a mesma quantidade de tempo. A distribuição recomendada:

- **40% — Prática**: projetos, exercícios, desafios
- **20% — Base nova**: aprendendo conceitos novos
- **20% — Revisão**: consolidando o que já estudou
- **10% — Leitura**: documentação, artigos, código alheio
- **10% — Qualidade**: testes, refatoração, performance

### 2.10 Regras para não se Perder — a bússola

1. **Nunca pule fundamentos**. Frameworks vêm e vão. HTML, CSS e JavaScript são para sempre.
2. **Mantenha 3 frentes ativas**: fundamento, projeto e qualidade. Se uma está atrasada, é nela que você foca.
3. **Meça seu progresso**: o que você consegue fazer hoje que não conseguia mês passado?
4. **Estude em ciclos, não em linha reta**. Volte aos fundamentos regularmente, sempre com mais profundidade.
5. **Compartilhe o que aprendeu**. Explicar é a melhor forma de aprender.

---

## Parte 3: O Plano Passo a Passo — da Estaca Zero ao Topo

Esta seção traduz todo o conhecimento e metodologia em um plano concreto, fase por fase, do absoluto zero até o nível de referência. Cada fase tem objetivos, conteúdos, práticas e um projeto para consolidar.

### 3.1 Fase 0: Antes de escrever a primeira linha de código

**Objetivo**: preparar o ambiente e entender o que é desenvolvimento web.

**Conteúdo**: como a internet funciona (cliente-servidor, HTTP, DNS, navegadores), instalação de VS Code e extensões essenciais, terminal básico (navegação, criação de arquivos), Git (add, commit, push, pull, branch), GitHub (criação de repositório, clone).

**Meta**: conseguir criar um repositório no GitHub, clonar localmente, fazer alterações e subir.

### 3.2 Fase 1: Fundamentos da Web

**Objetivo**: construir páginas estáticas com HTML e CSS.

**Conteúdo**: HTML semântico (estrutura, tags, formulários, imagens, links), CSS (seletores, box model, display, flexbox, grid, responsividade, media queries, unidades relativas).

**Prática**: construir 3-5 páginas estáticas: site pessoal, landing page, formulário de contato, página de produto. Todas responsivas.

**Projeto**: site pessoal completo com portfólio, sobre, contato, responsivo e acessível.

### 3.3 Fase 2: CSS e Layouts

**Objetivo**: dominar CSS para layouts complexos.

**Conteúdo**: Flexbox avançado (alinhamento, distribuição, grow/shrink), CSS Grid avançado (grid-template-areas, grid implícito/explícito), variáveis CSS, animações e transições, pré-processadores (Sass), BEM.

**Prática**: replicar layouts de sites reais, criar temas claro/escuro, animar elementos da interface.

**Projeto**: refatorar o site pessoal com arquitetura CSS organizada e temas.

### 3.4 Fase 3: JavaScript Essencial

**Objetivo**: tornar as páginas interativas.

**Conteúdo**: variáveis, funções, objetos, arrays, condicionais, laços, DOM (seleção, modificação, criação de elementos), eventos, promises, async/await, fetch, métodos de array (map, filter, reduce, find, forEach), ES Modules.

**Prática**: construir funcionalidades interativas: carrossel, modal, accordion, formulário com validação, busca em tempo real.

**Projeto**: aplicação que consome API pública (clima, filmes, receitas) com busca, filtros e exibição de dados.

### 3.5 Fase 4: JavaScript Avançado e TypeScript

**Objetivo**: escrever JavaScript robusto e seguro.

**Conteúdo JavaScript avançado**: closures, escopo, this, prototype, async patterns (Promise.all, race), error handling, programação funcional (funções puras, imutabilidade), Web APIs (localStorage, sessionStorage, IndexedDB).

**Conteúdo TypeScript**: tipos, interfaces, type aliases, generics, unions, narrowing, utility types, configuração do tsconfig, integração com React.

**Prática**: migrar projetos anteriores para TypeScript, refatorar com tipos.

**Projeto**: aplicação React + TypeScript com componentes tipados.

### 3.6 Fase 5: Framework Front-end

**Objetivo**: construir aplicações escaláveis com componentes.

**Conteúdo**: React (ou Vue/Angular) — componentes, props, estado, hooks, ciclo de vida, renderização condicional, listas, formulários, roteamento, estilização (CSS Modules, Tailwind, Styled Components).

**Prática**: reconstruir projetos anteriores com o framework.

**Projeto**: aplicação completa com múltiplas páginas, roteamento, formulários e estado.

### 3.7 Fase 6: Consumo de APIs e Estado

**Objetivo**: conectar o front-end a dados reais.

**Conteúdo**: fetch e Axios, tratamento de erro, loading e empty states, autenticação (JWT, refresh tokens), TanStack Query (cache, stale-while-revalidate, mutations), Context API e state management (Redux Toolkit, Zustand), WebSockets.

**Prática**: adicionar autenticação e gerenciamento de estado ao projeto.

**Projeto**: dashboard com login, dados do usuário, gráficos, cache e atualização em tempo real.

### 3.8 Fase 7: Testes e Qualidade

**Objetivo**: entregar código confiável.

**Conteúdo**: testes unitários (Vitest + Testing Library), testes de integração, testes E2E (Playwright), mocks, coverage, code review, linters e formatadores.

**Prática**: adicionar testes ao projeto, configurar CI/CD para rodar testes automaticamente.

**Projeto**: refatorar o projeto anterior com cobertura de testes.

### 3.9 Fase 8: Performance e Acessibilidade

**Objetivo**: construir aplicações rápidas e inclusivas.

**Conteúdo Performance**: Core Web Vitals, Lighthouse, code splitting, lazy loading, otimização de imagens, memoização, virtualização de listas, bundle analysis, Critical Rendering Path.

**Conteúdo Acessibilidade**: WCAG 2.1 AA, ARIA, navegação por teclado, screen readers, contraste, formulários acessíveis, testes automatizados de acessibilidade.

**Prática**: auditar e otimizar o projeto, corrigir problemas de performance e acessibilidade.

**Projeto**: portfólio com performance acima de 90 no Lighthouse e acessibilidade AA.

### 3.10 Fase 9: Arquitetura e Design Systems

**Objetivo**: projetar sistemas escaláveis.

**Conteúdo**: atomic design, component-driven development, design systems (design tokens, Storybook), micro-frontends (Module Federation), monorepos (Turborepo, Nx), SSR/SSG (Next.js, Astro), padrões de renderização.

**Prática**: criar um design system com componentes reutilizáveis e documentados.

**Projeto**: design system com Storybook, temas, e documentação.

### 3.11 Fase 10: Segurança e Produção

**Objetivo**: entregar software seguro e pronto para produção.

**Conteúdo Segurança**: XSS, CSRF, CSP, CORS, sanitização, gestão de tokens, OWASP Top 10.

**Conteúdo Produção**: Docker para desenvolvimento, CI/CD (GitHub Actions), deploy (Vercel, Netlify), monitoramento (Sentry), logs, feature flags.

**Prática**: implementar segurança no projeto, configurar pipeline de deploy, adicionar monitoramento.

**Projeto**: aplicação em produção com segurança, CI/CD e monitoramento.

### 3.12 Fase 11: Projeto Grande e Portfólio

**Objetivo**: juntar tudo em um projeto de verdade.

**Conteúdo**: escolher um problema real e construir uma solução completa. Pode ser em grupo ou individual. Precisa ter: autenticação, banco de dados (via API), testes, documentação, deploy, acessibilidade, performance.

**Prática**: construir o projeto do zero com tudo que aprendeu.

**Projeto**: marketplace, sistema de agendamento, CRM, plataforma de conteúdo, dashboard analítico.

### 3.13 Fase 12: Evolução até referência

**Objetivo**: consolidar como referência técnica.

**Conteúdo**: revisar fundamentos toda semana, aprender um tema novo por ciclo, refatorar projetos existentes, ler código de projetos open-source (React, Next.js, Vite, TanStack Query), participar de code reviews, escrever documentação, mentorar outros desenvolvedores, contribuir com open-source.

**Meta**: ser a pessoa que outros procuram quando tem dúvidas de front-end.

---

## Parte 4: Projetos práticos — o que construir

Estudar sem construir é como treinar sem jogar. Aqui estão projetos que evoluem em complexidade e consolidam cada fase do aprendizado.

**Iniciante**: site pessoal, landing page, formulário de contato, portfólio, clone de interface (Google, YouTube, Twitter).

**Intermediário**: aplicação com API (clima, filmes, receitas, GitHub), dashboard com gráficos, e-commerce simples, blog com CMS, aplicação de tarefas com persistência.

**Avançado**: plataforma de cursos, marketplace, sistema de agendamento, CRM, rede social simplificada, ferramenta de colaboração em tempo real, design system completo com Storybook.

Cada projeto deve ser feito com qualidade: responsivo, acessível, testado, versionado no GitHub e com deploy.

---

## Parte 5: Recursos e Bibliografia — onde buscar

Nenhum guia substitui a documentação oficial. Use estes recursos como referência durante toda sua jornada.

**Documentação oficial**: MDN Web Docs (a bíblia do desenvolvedor web), React.dev, Next.js Docs, Vue.js Docs, TypeScript Handbook, web.dev (Google).

**Cursos gratuitos**: freeCodeCamp (currículo completo e estruturado), The Odin Project (projeto-driven), JavaScript30 (Wes Bos, 30 desafios de JS puro).

**Plataformas de prática**: Frontend Mentor (desafios de HTML/CSS/JS), Codewars (desafios de lógica), LeetCode (algoritmos e estruturas de dados).

**Leitura técnica**: Smashing Magazine, CSS-Tricks, web.dev, Overreacted (Dan Abramov), Josh W Comeau.

**Roadmaps**: roadmap.sh/frontend — guia visual para navegar pelos tópicos.

**Ferramentas**: Chrome DevTools, Lighthouse, Figma, Postman/Insomnia, VS Code, Git, Vite, Playwright, Storybook.

---

> *"O mestre não é aquele que estudou tudo uma vez, mas aquele que revisita o básico mil vezes, cada vez enxergando uma camada mais profunda."*
