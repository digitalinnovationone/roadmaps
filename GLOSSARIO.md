# 📖 Explicando Termos Estranhos Com Coisas Que Você Conhece

Às vezes a gente ouve palavras estranhas em programação. Aqui estão essas palavras traduzidas para o português que faz sentido.

---

## A

### API
**Palavra que você vai ouvir:** "Vamos usar a API do Google"

**O que realmente é:** Uma forma de comunicação entre programas.

**Analogy:** Imagina que você é gerente de um restaurante e quer saber o cardápio de outro restaurante. Você não entra lá dentro, você liga pra eles e diz "qual é o menu?" Eles mandam uma lista. Isso é uma API - um jeito padronizado de dois programas conversarem.

**Exemplo real:** Quando você coloca seu endereço no Google Maps no site de delivery, o site tá usando a API do Google Maps. Ele pede ao Google "qual é o mapa desse lugar?" e o Google manda de volta.

---

## B

### Backend
**Palavra que você vai ouvir:** "Vamos contratar um backend developer"

**O que realmente é:** A parte que ninguém vê, mas faz tudo funcionar.

**Analogy:** Tipo a cozinha de um restaurante. Você (cliente) não vê. Você só come. Mas se a comida tá boa, é porque a cozinha é boa.

**Exemplo real:** Quando você clica "comprar" no site, o Backend:
1. Recebe seu pedido
2. Verifica se tem dinheiro na sua conta
3. Verifica se tem o produto em estoque
4. Tira do estoque
5. Manda pra você

Você só vê "compra confirmada". Todo o resto é Backend.

---

## C

### CSS
**Palavra que você vai ouvir:** "Vamos fazer o CSS deste botão"

**O que realmente é:** O código que deixa as coisas bonitas.

**Analogy:** Tipo escolher a cor, tamanho e tipo de letra. Se HTML é a parede, CSS é a tinta.

**Exemplo real:**
```css
button {
  background-color: blue;     /* azul */
  font-size: 18px;            /* letra grande */
  padding: 10px;              /* espaço dentro */
}
```

Isso deixa o botão azul, com letra grande e com espaço.

---

## D

### Database / Banco de Dados
**Palavra que você vai ouvir:** "Vamos guardar isso no banco de dados"

**O que realmente é:** Um lugar super organizado pra guardar informações.

**Analogy:** Tipo uma biblioteca. Tem o livro de clientes, livro de produtos, livro de pedidos. Tudo organizadinho. Você quer saber quantas camisetas azuis tem? Você abre o livro de produtos e procura.

**Exemplo real:** Quando você faz login no site:
- O site procura no banco de dados: "tem alguém com esse email?"
- Se tiver, ele valida a senha
- Se for correta, ele deixa você entrar

---

## E

### Element / Elemento
**Palavra que você vai ouvir:** "Vamos selecionar esse elemento"

**O que realmente é:** Um "negócio" individual na página.

**Analogy:** Num texto, cada palavra é um elemento. Na página, cada botão, cada imagem, cada texto é um elemento.

**Exemplo real:**
```html
<button>Clique</button>  ← isso é um elemento
```

---

## F

### Frontend
**Palavra que você vai ouvir:** "Você é frontend ou backend?"

**O que realmente é:** A parte que VOCÊ VÊ e usa.

**Analogy:** Se Backend é a cozinha, Frontend é a sala do restaurante. É onde você senta e come.

**Exemplo real:** Quando você abre o Instagram:
- As cores lindas = Frontend
- O feed scrollável = Frontend
- O botão de like = Frontend

Tudo que você vê e clica é Frontend.

---

## H

### HTML
**Palavra que você vai ouvir:** "Vamos escrever o HTML"

**O que realmente é:** O código que diz o que existe.

**Analogy:** Se você quer construir uma casa, HTML é o "desenho do que tem onde". "Aqui tem uma porta, aqui tem uma janela, aqui tem um banheiro."

**Exemplo real:**
```html
<button>Clique</button>
```

Isso diz "aqui tem um botão". Só isso.

---

## I

### ID
**Palavra que você vai ouvir:** "Selecione o elemento com ID 'meuBotao'"

**O que realmente é:** Um nome único para uma coisa.

**Analogy:** Como um CPF. Cada pessoa tem um CPF único. Cada elemento pode ter um ID único.

**Exemplo real:**
```html
<button id="botaoAzul">Clique</button>
```

"botaoAzul" é o ID. É o nome desse botão específico.

---

## J

### JavaScript
**Palavra que você vai ouvir:** "Vamos programar em JavaScript"

**O que realmente é:** O código que faz coisas ACONTECEREM.

**Analogy:** HTML é a estrutura, CSS é a beleza, JavaScript é o que REAGE. Tipo um robô que ouve e age.

**Exemplo real:**
```javascript
botao.addEventListener('click', function() {
  alert('Você clicou!');
});
```

Quando alguém clica no botão, um alerta aparece.

---

## L

### Library / Biblioteca
**Palavra que você vai ouvir:** "Vamos usar a biblioteca React"

**O que realmente é:** Código pronto que outras pessoas fizeram que você pode usar.

**Analogy:** Tipo uma biblioteca de verdade. Em vez de escrever seu próprio livro, você pega um livro já escrito e lê.

**Exemplo real:** React é uma biblioteca que alguém criou para fazer desenvolvimento mais fácil. Você não precisa reinventar a roda.

---

## M

### Método
**Palavra que você vai ouvir:** "Vamos usar o método addEventListener"

**O que realmente é:** Uma ação que você pode fazer com algo.

**Analogy:** Tipo um botão no controle remoto. Cada botão faz algo diferente.

**Exemplo real:**
```javascript
botao.addEventListener('click', function() {
  // fazer algo
});
```

`addEventListener` é um método. É uma ação.

---

## P

### Propriedade
**Palavra que você vai ouvir:** "Vamos mudar a propriedade de cor"

**O que realmente é:** Uma característica de algo.

**Analogy:** Uma pessoa tem propriedades: altura, cor de cabelo, idade. Um elemento tem propriedades: cor, tamanho, posição.

**Exemplo real:**
```css
button {
  background-color: blue;  ← propriedade
  font-size: 18px;         ← propriedade
}
```

---

## R

### React
**Palavra que você vai ouvir:** "Vamos aprender React"

**O que realmente é:** Um kit pronto que facilita fazer páginas interativas.

**Analogy:** Tipo um LEGO. Você não constrói do zero, você usa peças prontas.

**Exemplo real:** Em vez de escrever 100 linhas de JavaScript, você escreve 5 linhas de React e pronto.

---

## S

### State / Estado
**Palavra que você vai ouvir:** "Vamos salvar no state"

**O que realmente é:** A situação atual de algo.

**Analogy:** Tipo a comida num restaurante. Ela pode estar "crua", "cozinhando" ou "pronta". Esse é o estado.

**Exemplo real:**
- Estado "logado" = você entrou no site
- Estado "deslogado" = você saiu
- Estado "carregando" = o site tá buscando dados

---

## U

### UI / UX

#### UI (User Interface)
**O que realmente é:** A aparência de um programa.

**Analogy:** Se o programa fosse uma pessoa, UI seria a roupa.

#### UX (User Experience)
**O que realmente é:** Como a pessoa se sente usando.

**Analogy:** Se UI é a roupa, UX é como você se sente usando essa roupa. Confortável? Apertada? Bonita?

---

## V

### Variável
**Palavra que você vai ouvir:** "Vamos criar uma variável"

**O que realmente é:** Um pote que guarda informação.

**Analogy:** Tipo uma gaveta. Você coloca algo ali pra guardar.

**Exemplo real:**
```javascript
var nome = "João";
```

`nome` é uma variável. Dentro dela tá guardado "João".

---

## W

### Web / Website
**Palavra que você vai ouvir:** "Vamos fazer um website"

**O que realmente é:** Uma página que você acessa no navegador.

**Analogy:** É a loja online. Tipo se uma loja física é uma loja, uma loja online é um website.

---

## 🎯 Frase Que Faz Tudo Fazer Sentido

**"Programação é só contar uma história pro computador"**

- HTML = "aqui tem um botão"
- CSS = "o botão é azul"
- JavaScript = "quando clicam, fica vermelho"

Pronto! Você programou.

---

## 💡 Se Vir Uma Palavra Estranha

**Regra de Ouro:**
1. Googla: "o que significa [palavra] em programação"
2. Procura em português
3. Se ainda não entender, relaciona com algo que você conhece

Exemplo: "variável" parece estranho, mas é só um "pote pra guardar informação". Pronto, entendeu.

---

**Não existe pergunta boba. Essas palavras foram inventadas por humanos, e são estranhas porque foram traduzidas do inglês! 🚀**

---

## A

### Algoritmo
**O que é?** Uma receita de bolo, mas para o computador.

**Explicação:** Assim como uma receita diz "primeiro misture os ingredientes, depois coloque no forno", um algoritmo diz "primeiro faça isso, depois faça aquilo".

**Exemplo:** Um algoritmo para clicar num botão poderia ser:
1. Espera o usuário clicar
2. Muda a cor do botão
3. Mostra uma mensagem

---

## B

### Backend
**O que é?** A cozinha de um restaurante.

**Explicação:** Você não vê a cozinha (fica atrás), mas ela faz toda a comida aparecer. No computador, o backend é tudo que fica "escondido" no servidor fazendo as coisas funcionarem. Você só vê o resultado na tela.

**Exemplo:** Quando você faz login num site, o backend verifica se sua senha está correta (você não vê isso acontecendo).

### Botão (Button)
**O que é?** Um quadrado/retângulo clicável na tela.

**Explicação:** Igual um botão de verdade - você clica e algo acontece!

**Exemplo:**
```html
<button>Clique aqui</button>
```

---

## C

### Código
**O que é?** Instruções que você escreve em um idioma que o computador entende.

**Explicação:** Assim como você fala português com pessoas, você fala HTML, CSS ou JavaScript com o computador.

**Exemplo:**
```javascript
alert('Olá!');
```

### Console
**O que é?** Uma "caixa de mensagens" do navegador.

**Explicação:** É onde o navegador fala com você. Se algo der errado, ele escreve ali! Também é onde você pode testar código rápido.

**Como abrir?** Clique com botão direito → Inspecionar → Aba "Console"

### CSS (Cascading Style Sheets)
**O que é?** A "roupa" do HTML.

**Explicação:** HTML diz o QUÊ mostrar. CSS diz COMO fazer parecer bonito. Define cores, tamanhos, posições, fontes.

**Exemplo:**
```css
button {
  background-color: blue;
  color: white;
}
```

---

## D

### Debug/Debugar
**O que é?** Encontrar e corrigir erros no código.

**Explicação:** Assim como um médico diagnostica uma doença, um debugador diagnostica o que está errado no código.

**Como fazer?** Abra o Console (F12) e procure por mensagens vermelhas.

### DOM (Document Object Model)
**O que é?** A "árvore" de tudo que está na página.

**Explicação:** Pense na página como uma árvore. A raiz é o HTML, os galhos são as seções, as folhas são os botões, textos, etc. JavaScript usa isso para navegar e mudar coisas.

---

## E

### Elemento
**O que é?** Uma "coisa" na página: botão, texto, imagem, etc.

**Explicação:** Tudo que você vê é um elemento HTML.

**Exemplo:**
```html
<button>Sou um elemento</button>
<p>Eu também sou!</p>
```

### Evento
**O que é?** Algo que acontece na página, como um clique.

**Explicação:** Quando você clica, digita, movimenta o mouse - são eventos! O código pode "ouvir" esses eventos e reagir.

**Exemplo:**
```javascript
button.addEventListener('click', function() {
  alert('Você clicou!');
});
```

---

## F

### Framework
**O que é?** Uma "caixa de ferramentas" já pronta.

**Explicação:** Em vez de construir tudo do zero, você usa ferramentas que alguém já criou. Economiza tempo!

**Exemplo:** React é um framework JavaScript - é um conjunto de ferramentas para construir páginas interativas.

### Frontend
**O que é?** O que você VÊ na tela.

**Explicação:** Tudo que é visível e com o qual você interage é frontend. É HTML, CSS e JavaScript trabalhando juntos.

**Exemplo:** Um botão azul com texto branco é frontend.

---

## G

### Git/GitHub
**O que é?** Um sistema para guardar versões do seu código.

**Explicação:** Assim como você salva versões diferentes de um arquivo Word, Git salva versões diferentes do seu código. GitHub é um site onde você coloca seu código.

**Exemplo:** Você escreve um botão, salva. Depois alterar ele. Git guarda as duas versões, então você pode voltar atrás se quiser.

---

## H

### HTML (HyperText Markup Language)
**O que é?** O "esqueleto" de uma página web.

**Explicação:** HTML diz "aqui vai um título", "aqui vai um botão", "aqui vai uma imagem". Sem HTML, não há página.

**Exemplo:**
```html
<button>Clique</button>
```

---

## I

### ID
**O que é?** Um nome único para um elemento.

**Explicação:** Como um CPF - cada elemento tem um ID único que o identifica.

**Exemplo:**
```html
<button id="meuBotao">Clique</button>
```

### Inspecionador
**O que é?** Uma ferramenta para ver e editar o código de uma página.

**Explicação:** Como se você pudesse "ver por trás" de uma página web.

**Como abrir?** F12 ou Clique direito → Inspecionar

---

## J

### JavaScript
**O que é?** O "cérebro" que faz coisas acontecerem.

**Explicação:** HTML é o esqueleto, CSS é a roupa, JavaScript é o cérebro que controla tudo. Quando você clica, JavaScript reage!

**Exemplo:**
```javascript
alert('Olá!');
```

---

## L

### Loop
**O que é?** Repetir algo várias vezes.

**Explicação:** Assim como você repete "lá lá lá" várias vezes, um loop repete código várias vezes.

**Exemplo:**
```javascript
for (let i = 0; i < 5; i++) {
  console.log('Repetição ' + i);
}
```

Isso escreve "Repetição" 5 vezes.

---

## M

### Método
**O que é?** Uma ação que você pode fazer com algo.

**Explicação:** Como um botão no controle remoto. Cada botão faz algo diferente.

**Exemplo:** `alert()` é um método que mostra uma caixa de mensagem.

---

## P

### Pixel
**O que é?** O ponto colorido mais pequenino da tela.

**Explicação:** Tudo que você vê na tela é feito de milhões de pixels. Se você aumentar o zoom muito, consegue ver eles.

### Propriedade
**O que é?** Uma característica de algo.

**Explicação:** Assim como uma pessoa tem características (altura, cor de cabelo), elementos têm propriedades (cor, tamanho, posição).

**Exemplo:**
```css
button {
  background-color: blue;  /* propriedade */
  font-size: 16px;         /* propriedade */
}
```

---

## R

### Responsivo
**O que é?** Uma página que se adapta a diferentes tamanhos de tela.

**Explicação:** Uma página responsiva fica bonita no computador, no tablet e no celular. Ela responde e se ajusta!

### Reutilizável
**O que é?** Código que você pode usar em múltiplos lugares.

**Explicação:** Em vez de escrever o mesmo código várias vezes, você escreve uma vez e usa em vários lugares.

---

## S

### Seletor
**O que é?** Uma forma de "selecionar" elementos para estilizar.

**Explicação:** É como dizer "eu quero mudar a cor de TODOS os botões" ou "eu quero mudar apenas o botão com ID igual a meuBotao".

**Exemplo:**
```css
button { }           /* seleciona TODOS os botões */
#meuBotao { }        /* seleciona apenas o elemento com ID meuBotao */
.vermelho { }        /* seleciona todos com classe "vermelho" */
```

### String
**O que é?** Uma sequência de letras, números ou símbolos.

**Explicação:** É texto! Quando você coloca algo entre aspas, é uma string.

**Exemplo:**
```javascript
"Olá, mundo!"
'Esto es un texto'
"12345"
```

---

## T

### Tag
**O que é?** Um código HTML que marca o início e fim de algo.

**Explicação:** Tags são como embrulhos. Você "embrulha" conteúdo com tags.

**Exemplo:**
```html
<button>Sou um botão</button>
```
`<button>` é a tag de abertura, `</button>` é a tag de fechamento.

### Terminal
**O que é?** Uma "caixa preta" onde você escreve comandos para o computador.

**Explicação:** É um jeito antigo (mas poderoso!) de usar o computador. Em vez de clicar botões, você escreve palavras.

**Onde?** Windows: PowerShell ou CMD. Mac/Linux: Terminal.

---

## U

### UI (User Interface)
**O que é?** A forma como um programa se parece e funciona.

**Explicação:** Tudo que você vê e clica é a UI. Botões, cores, layout - tudo!

### UX (User Experience)
**O que é?** A experiência de usar um programa.

**Explicação:** UI é "o que você vê", UX é "como você se sente usando". Uma boa UX faz você se sentir feliz e confortável.

---

## V

### Variável
**O que é?** Um "pote" onde você guarda informações.

**Explicação:** Assim como você guarda dinheiro numa carteira, você guarda dados numa variável.

**Exemplo:**
```javascript
var nome = "João";
var idade = 25;
```

---

## W

### Web
**O que é?** A internet, especialmente os sites que você visita no navegador.

**Explicação:** É o "tecido" que conecta computadores. World Wide Web = a rede mundial.

### Widget
**O que é?** Um pequeno programa ou componente.

**Explicação:** Como um aplicativo pequeno. Um botão pode ser considerado um widget.

---

## X

### XML
**O que é?** Um formato para organizar dados.

**Explicação:** HTML é tipo XML, mas é mais específico para páginas web.

---

## Z

### Zoom
**O que é?** Aumentar ou diminuir o tamanho de algo.

**Explicação:** Quando você faz Ctrl+Mais para aumentar a página ou Ctrl+Menos para diminuir, está fazendo zoom.

---

## 💡 Dica

Se uma palavra não está aqui ou você ainda não entende, **faça uma pergunta!** Abra uma Discussion neste repositório e alguém vai te ajudar!

Lembre-se: **não tem pergunta boba, toda pergunta é válida!** 🚀
