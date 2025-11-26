# 🎮 Projetos Práticos - Aprenda Fazendo!

**REGRA DE OURO: Não leia muito, apenas FAÇA! Você aprende fazendo, não lendo. Se não entender, toque, mude, quebre e conserte!**

---

## Como Usar Este Guia

1. **Escolha um projeto** (comece pelo #1)
2. **Copie o código** (colar é OK!)
3. **Salve em um arquivo `.html`**
4. **Abra no navegador**
5. **Brinque com o código** - altere cores, números, textos
6. **Não funciona?** Vai à aba Console (F12) e leia a mensagem vermelha

---

## ⏱️ Tempo Estimado

- ⭐ **Fácil (5-10 min)**: Ideal se você tem TDAH ou quer comece rápido
- ⭐⭐ **Médio (15-20 min)**: Um pouco mais desafiador
- ⭐⭐⭐ **Difícil (30+ min)**: Para quando você quer algo mais complexo

---

# 📝 Projetos

## Projeto 1: Seu Primeiro Botão Mágico ⭐

**Tempo:** 5 minutos  
**O que aprende:** HTML + CSS + JavaScript básico  
**Resultado:** Um botão que muda de cor quando clicado

### Passo 1: Crie o arquivo
1. Abra um editor de texto (Notepad, VS Code, etc)
2. Cole o código abaixo:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Meu Primeiro Botão</title>
  <style>
    button {
      background-color: blue;
      color: white;
      padding: 15px 32px;
      text-align: center;
      font-size: 18px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
    }
    
    button:hover {
      background-color: darkblue;
    }
  </style>
</head>
<body>
  <h1>Meu Primeiro Botão Mágico</h1>
  <button id="botao">Clique em mim!</button>

  <script>
    var botao = document.getElementById('botao');
    
    botao.addEventListener('click', function() {
      this.style.backgroundColor = 'red';
    });
  </script>
</body>
</html>
```

3. Salve como `projeto1.html`
4. Abra o arquivo no navegador

### Passo 2: Brinque com o código!

Tente alterar:
- `backgroundColor = 'red'` → mude para `'green'`, `'purple'`, `'yellow'`
- `padding: 15px 32px` → mude para `20px 50px` (fica maior)
- `font-size: 18px` → mude para `24px` ou `30px`

### Desafio Bônus
Faça o botão voltar à cor azul quando você sair com o mouse? (dica: use `mouseleave`)

---

## Projeto 2: Show/Hide - Mostra e Esconde ⭐

**Tempo:** 10 minutos  
**O que aprende:** Manipular elementos com JavaScript  
**Resultado:** Um botão que mostra/esconde um texto

### O Código

```html
<!DOCTYPE html>
<html>
<head>
  <title>Show/Hide</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: 50px auto;
    }
    
    button {
      background-color: #4CAF50;
      color: white;
      padding: 12px 24px;
      font-size: 16px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
    }
    
    button:hover {
      background-color: #45a049;
    }
    
    .mensagem {
      margin-top: 20px;
      padding: 15px;
      background-color: #f0f0f0;
      border-left: 4px solid #4CAF50;
      font-size: 18px;
      display: none;
    }
  </style>
</head>
<body>
  <h1>Show/Hide - Mostra e Esconde</h1>
  <button id="botaoToggle">Mostrar Mensagem</button>
  
  <div class="mensagem" id="mensagem">
    🎉 Olá! Eu era invisível, mas agora sou visível!
    <br>
    Clique no botão novamente para me esconder.
  </div>

  <script>
    var botao = document.getElementById('botaoToggle');
    var mensagem = document.getElementById('mensagem');
    var estaVisivel = false;
    
    botao.addEventListener('click', function() {
      if (estaVisivel) {
        mensagem.style.display = 'none';
        botao.textContent = 'Mostrar Mensagem';
        estaVisivel = false;
      } else {
        mensagem.style.display = 'block';
        botao.textContent = 'Esconder Mensagem';
        estaVisivel = true;
      }
    });
  </script>
</body>
</html>
```

### Brinque com Isto
- Mude a cor de fundo da mensagem
- Altere o texto dentro de `<div class="mensagem">`
- Tente adicionar mais uma mensagem com outro botão

---

## Projeto 3: Contador de Cliques ⭐⭐

**Tempo:** 10 minutos  
**O que aprende:** Variáveis, atualizar texto  
**Resultado:** Um contador que aumenta cada vez que você clica

### O Código

```html
<!DOCTYPE html>
<html>
<head>
  <title>Contador</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 50px;
    }
    
    .contador {
      font-size: 48px;
      font-weight: bold;
      color: #2196F3;
      margin: 30px;
    }
    
    button {
      background-color: #2196F3;
      color: white;
      padding: 12px 24px;
      font-size: 18px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      margin: 10px;
    }
    
    button:hover {
      background-color: #0b7dda;
    }
    
    .botao-resetar {
      background-color: #f44336;
    }
    
    .botao-resetar:hover {
      background-color: #da190b;
    }
  </style>
</head>
<body>
  <h1>Contador de Cliques</h1>
  <div class="contador" id="numero">0</div>
  
  <button id="botaoSomar">Adicionar 1</button>
  <button class="botao-resetar" id="botaoResetar">Resetar</button>

  <script>
    var contador = 0;
    var botaoSomar = document.getElementById('botaoSomar');
    var botaoResetar = document.getElementById('botaoResetar');
    var numeroDisplay = document.getElementById('numero');
    
    botaoSomar.addEventListener('click', function() {
      contador = contador + 1;
      numeroDisplay.textContent = contador;
    });
    
    botaoResetar.addEventListener('click', function() {
      contador = 0;
      numeroDisplay.textContent = contador;
    });
  </script>
</body>
</html>
```

### Desafios
1. Adicione um botão que DIMINUI 1 em vez de aumentar
2. Mude para aumentar de 5 em 5 em vez de 1 em 1
3. Adicione um som quando o botão é clicado (Google: "HTML audio")

---

## Projeto 4: Quiz Interativo ⭐⭐

**Tempo:** 15 minutos  
**O que aprende:** Condicional IF/ELSE, feedback visual  
**Resultado:** Um pequeno quiz com pontuação

### O Código

```html
<!DOCTYPE html>
<html>
<head>
  <title>Quiz Mini</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: 50px auto;
      background-color: #f5f5f5;
      padding: 20px;
    }
    
    .quiz-container {
      background-color: white;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    h1 {
      color: #333;
    }
    
    .pergunta {
      font-size: 18px;
      margin: 20px 0;
      font-weight: bold;
    }
    
    button {
      background-color: #4CAF50;
      color: white;
      padding: 10px 20px;
      margin: 5px;
      font-size: 16px;
      cursor: pointer;
      border: none;
      border-radius: 4px;
    }
    
    button:hover {
      background-color: #45a049;
    }
    
    .resultado {
      margin-top: 20px;
      padding: 15px;
      border-radius: 4px;
      display: none;
    }
    
    .correto {
      background-color: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }
    
    .errado {
      background-color: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }
    
    .pontuacao {
      font-size: 24px;
      font-weight: bold;
      color: #2196F3;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <div class="quiz-container">
    <h1>🎯 Quiz Mini</h1>
    <div id="quizConteudo">
      <div id="pergunta1">
        <div class="pergunta">Qual é a capital da França?</div>
        <button onclick="responder1('Paris')">Paris</button>
        <button onclick="responder1('Londres')">Londres</button>
        <button onclick="responder1('Berlim')">Berlim</button>
      </div>
    </div>
    
    <div class="resultado" id="resultado"></div>
    <div class="pontuacao" id="pontuacao"></div>
    <button onclick="recomecar()" id="botaoRecomecar" style="display:none;">Recomeçar Quiz</button>
  </div>

  <script>
    var pontos = 0;
    var perguntasRespondidas = 0;
    
    function responder1(resposta) {
      perguntasRespondidas++;
      var resultadoDiv = document.getElementById('resultado');
      var quizConteudo = document.getElementById('quizConteudo');
      
      if (resposta === 'Paris') {
        resultadoDiv.className = 'resultado correto';
        resultadoDiv.innerHTML = '✅ Correto! Paris é a capital da França!';
        pontos++;
      } else {
        resultadoDiv.className = 'resultado errado';
        resultadoDiv.innerHTML = '❌ Errado! A resposta correta é Paris.';
      }
      
      resultadoDiv.style.display = 'block';
      quizConteudo.style.display = 'none';
      
      document.getElementById('pontuacao').textContent = 'Pontos: ' + pontos + '/' + perguntasRespondidas;
      document.getElementById('botaoRecomecar').style.display = 'block';
    }
    
    function recomecar() {
      pontos = 0;
      perguntasRespondidas = 0;
      document.getElementById('quizConteudo').style.display = 'block';
      document.getElementById('resultado').style.display = 'none';
      document.getElementById('pontuacao').textContent = '';
      document.getElementById('botaoRecomecar').style.display = 'none';
    }
  </script>
</body>
</html>
```

### Desafios
1. Adicione mais perguntas
2. Calcule porcentagem de acertos no final
3. Altere as cores para um tema diferente

---

## Projeto 5: Gerador de Cores Aleatórias ⭐⭐

**Tempo:** 15 minutos  
**O que aprende:** Função Math.random(), Array, cores HEX  
**Resultado:** Clique para gerar uma cor aleatória

### O Código

```html
<!DOCTYPE html>
<html>
<head>
  <title>Gerador de Cores</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f0f0f0;
      transition: background-color 0.3s;
    }
    
    .container {
      text-align: center;
      background-color: white;
      padding: 50px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    h1 {
      margin-top: 0;
    }
    
    .cor-display {
      font-size: 48px;
      font-weight: bold;
      margin: 30px 0;
      color: #333;
      letter-spacing: 2px;
    }
    
    button {
      background-color: #2196F3;
      color: white;
      padding: 15px 30px;
      font-size: 18px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
    }
    
    button:hover {
      background-color: #0b7dda;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 Gerador de Cores</h1>
    <div class="cor-display" id="corDisplay">#FF5733</div>
    <button onclick="gerarCor()">Gerar Nova Cor</button>
  </div>

  <script>
    function gerarCor() {
      // Gera um número aleatório de 0 a 16777215
      var numeroAleatorio = Math.floor(Math.random() * 16777215);
      
      // Converte para formato HEX
      var corHex = '#' + numeroAleatorio.toString(16).toUpperCase().padStart(6, '0');
      
      // Atualiza a cor de fundo
      document.body.style.backgroundColor = corHex;
      
      // Exibe o código da cor
      document.getElementById('corDisplay').textContent = corHex;
    }
    
    // Gera uma cor quando a página carrega
    gerarCor();
  </script>
</body>
</html>
```

### Brinque Com Isto
1. Adicione um botão para copiar a cor para a área de transferência
2. Adicione um RGB display além do HEX
3. Faça o texto mudar de cor (branco/preto) dependendo da cor de fundo

---

## Projeto 6: To-Do List Simples ⭐⭐⭐

**Tempo:** 25 minutos  
**O que aprende:** Array, adicionar/remover itens, DOM manipulation  
**Resultado:** Uma lista de tarefas funcional

### O Código

```html
<!DOCTYPE html>
<html>
<head>
  <title>To-Do List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 500px;
      margin: 50px auto;
      background-color: #f5f5f5;
      padding: 20px;
    }
    
    .container {
      background-color: white;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    h1 {
      color: #333;
      text-align: center;
    }
    
    .input-container {
      display: flex;
      margin-bottom: 20px;
    }
    
    input {
      flex: 1;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ddd;
      border-radius: 4px 0 0 4px;
    }
    
    button {
      background-color: #4CAF50;
      color: white;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      border: none;
      border-radius: 0 4px 4px 0;
    }
    
    button:hover {
      background-color: #45a049;
    }
    
    ul {
      list-style-type: none;
      padding: 0;
    }
    
    li {
      background-color: #f9f9f9;
      padding: 15px;
      margin: 10px 0;
      border-left: 4px solid #4CAF50;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .btn-deletar {
      background-color: #f44336;
      padding: 5px 10px;
      font-size: 14px;
    }
    
    .btn-deletar:hover {
      background-color: #da190b;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📝 Minha To-Do List</h1>
    
    <div class="input-container">
      <input type="text" id="novatarefa" placeholder="Digite uma nova tarefa...">
      <button onclick="adicionarTarefa()">Adicionar</button>
    </div>
    
    <ul id="lista"></ul>
  </div>

  <script>
    var tarefas = [];
    
    function adicionarTarefa() {
      var input = document.getElementById('novatarefa');
      var textoDaTarefa = input.value;
      
      if (textoDaTarefa.trim() === '') {
        alert('Digite uma tarefa!');
        return;
      }
      
      tarefas.push(textoDaTarefa);
      input.value = '';
      atualizarLista();
    }
    
    function removerTarefa(index) {
      tarefas.splice(index, 1);
      atualizarLista();
    }
    
    function atualizarLista() {
      var lista = document.getElementById('lista');
      lista.innerHTML = '';
      
      for (var i = 0; i < tarefas.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = tarefas[i] + '<button class="btn-deletar" onclick="removerTarefa(' + i + ')">Deletar</button>';
        lista.appendChild(li);
      }
    }
    
    // Permite digitar Enter em vez de clicar no botão
    document.getElementById('novatarefa').addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        adicionarTarefa();
      }
    });
  </script>
</body>
</html>
```

---

## 🏆 Próximas Ideias De Projetos

Você aprendeu bastante? Agora tente criar:

- ⭐ **Calculadora simples** (adicionar, subtrair, multiplicar, dividir)
- ⭐⭐ **Galeria de imagens com botões Anterior/Próximo**
- ⭐⭐ **Memorização (jogo da memória com cores)**
- ⭐⭐⭐ **Temporizador/Cronômetro**
- ⭐⭐⭐ **Validador de formulário (nome, email, etc)**

---

## 💡 Dicas Para Conseguir Sucesso

1. **Comece copiando** - Não tem problema! Isso é normal.
2. **Altere pequenas coisas** - Cores, números, textos.
3. **Quebre o código** - Remova partes e veja o que acontece.
4. **Use Console (F12)** - Leia as mensagens de erro.
5. **Não desista** - Erros são BONS! Te ensinam!

---

## 🆘 Preso Em Um Projeto?

1. Abra o **Console (F12)**
2. Procure por mensagens **vermelhas**
3. Leia o que ela diz - geralmente aponta o erro
4. Google: copie a mensagem de erro
5. Abra uma **Discussion** aqui no repositório!

---

**Lembre-se: Todo programador começou assim. Bora codar!** 🚀
