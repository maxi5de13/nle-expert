const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação de estilo servidor.",
        "Um formato de documento para apresentação de páginas web.",
        "Uma linguagem de programação de alto nível.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o significado de 'DOM' em JavaScript?",
      respostas: [
        "Documento de Objeto de Modelo",
        "Distribuição de Objetos Móveis",
        "Modelo de Objeto do Documento",
      ],
      correta: 2
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "var nomeVariavel;",
        "variavel = nomeVariavel;",
        "declare nomeVariavel;",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado que representa um único valor.",
        "Uma estrutura de controle de fluxo.",
        "Uma coleção ordenada de valores.",
      ],
      correta: 2
    },
    {
      pergunta: "Como se escreve um comentário de linha em JavaScript?",
      respostas: [
        "// Comentário aqui",
        "/* Comentário aqui */",
        "-- Comentário aqui",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Compara dois valores para igualdade sem considerar o tipo.",
        "Atribui um valor a uma variável.",
        "Concatena duas strings.",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Uma instrução de loop.",
        "Um tipo de dado para armazenar informações.",
        "Um bloco de código reutilizável que realiza uma tarefa específica.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "'let' é usado para variáveis que não mudarão de valor, enquanto 'const' é para variáveis mutáveis.",
        "'let' é usado para variáveis mutáveis, enquanto 'const' é para variáveis imutáveis.",
        "Não há diferença, ambos são usados da mesma maneira.",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Uma técnica de otimização de código.",
        "A elevação física de um elemento HTML na página.",
        "A elevação de declarações de variáveis e funções durante a fase de compilação.",
      ],
      correta: 2
    },
    {
      pergunta: "Como se usa o operador ternário em JavaScript?",
      respostas: [
        "if (condição) { resultadoA } else { resultadoB }",
        "condição ? resultadoA : resultadoB",
        "switch (condição) { case resultadoA: break; case resultadoB: break; }",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  //loop ou laco de repeticao
  for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta //true
      
      corretas.delete(item)
      if(estaCorreta) {
       corretas.add(item)
  
      }
  
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  // coloca na tela
  quiz.appendChild(quizItem)
  }
  