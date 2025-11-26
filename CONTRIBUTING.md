# 🤝 Como Contribuir (Para Iniciantes e Experientes)

Obrigado por querer contribuir com o Roadmaps DIO! Este projeto foi feito para **TODOS**, então sua ajuda é muito bem-vinda! 💪

---

## ⭐ Como Este Projeto É Pensado

Este projeto prioriza:
- ✅ **Acessibilidade** - Funciona para pessoas neurodivergentes
- ✅ **Aprendizado Prático** - Aprende fazendo, não lendo
- ✅ **Linguagem Simples** - Sem jargão técnico desnecessário
- ✅ **Exemplos Reais** - Código que funciona e pode rodar
- ✅ **Inclusão** - Múltiplos estilos de aprendizado

**Antes de contribuir:** Leia [GUIA_INICIANTES.md](GUIA_INICIANTES.md) para entender a filosofia do projeto.

---

## 🎯 Tipos de Contribuição (Não Precisa de Código!)

### 1. 📖 Melhorias na Documentação

**Você NÃO precisa saber programar para fazer isso!**

- Leu um guia e não entendeu? Sugira melhorias!
- Encontrou uma palavra técnica sem explicação? Adicione ao Glossário!
- Tem uma analogia melhor? Sugira!
- Encontrou um erro de digitação? Corrija!

**Como fazer:**
1. Abra uma Issue ou Discussion
2. Descreva o que está confuso/errado
3. Sugestões de melhoria são bem-vindas!

### 2. 🎮 Novos Projetos Práticos

Tem uma ideia de projeto legal que iniciantes podem fazer?

**Requisitos:**
- ⏱️ Máximo 30 minutos
- 📱 Sem dependências complicadas (HTML/CSS/JS puro)
- 👨‍💻 Passo-a-passo MUITO claro
- 🎯 Um conceito por projeto
- ✨ Resultado visível e satisfatório

**Exemplo bom:** Cronômetro com botões Start/Stop  
**Exemplo ruim:** Framework inteiro em 30 min

### 3. ♿ Acessibilidade

- Teste com leitores de tela
- Teste contraste de cores
- Teste com teclado apenas
- Sugira melhorias de acessibilidade

### 4. 🌍 Tradução

- Traduzir para outro idioma
- Adaptar exemplos para contextos locais

### 5. 🐛 Relatórios de Bugs

Encontrou algo que não funciona?

1. Abra uma Issue descrevendo:
   - O que você tentou fazer
   - O que esperava que acontecesse
   - O que aconteceu na realidade
   - Seu navegador e SO

### 6. ⚡ Melhorias no Código

Se você sabe programar e quer otimizar/melhorar o código:
- Abra uma Issue ANTES de fazer PR (discuta a ideia)
- Garanta que não quebra acessibilidade
- Adicione comentários explicativos

---

## 🚀 Seu Primeiro Contribuição (Passo a Passo)

### Passo 1: Fork do Repositório

1. Acesse: https://github.com/digitalinnovationone/roadmaps
2. Clique em **"Fork"** no canto superior direito
3. Isso cria uma cópia do projeto na sua conta

### Passo 2: Clone Para Seu Computador

```bash
git clone https://github.com/SEU_USUARIO/roadmaps.git
cd roadmaps
```

### Passo 3: Crie Uma Branch (Para Sua Contribuição)

```bash
git checkout -b minha-contribuicao
# Exemplo: git checkout -b docs/melhorar-glossario
```

**Nomes bons de branch:**
- `docs/adicionar-recurso-novo`
- `feat/novo-projeto-pratico`
- `fix/corrigir-typo`
- `a11y/melhorar-acessibilidade` (a11y = "accessibility")

### Passo 4: Faça Suas Alterações

Edite os arquivos que quer melhorar. Sugestões:
- Abra no VS Code
- Ou até no Bloco de Notas mesmo!
- O importante é o conteúdo, não a ferramenta

### Passo 5: Commit (Salve Suas Alterações)

```bash
git add .
git commit -m "docs: melhorar explicações no glossário"
```

**Mensagens boas de commit:**
- ✅ `docs: adicionar novo projeto de calculadora`
- ✅ `fix: corrigir link quebrado`
- ✅ `a11y: melhorar contraste de cores`
- ❌ `alterações`
- ❌ `fix`
- ❌ `atualizações`

### Passo 6: Push (Envie Para O GitHub)

```bash
git push origin minha-contribuicao
```

### Passo 7: Abra Um Pull Request (PR)

1. Acesse seu fork no GitHub
2. Você verá um botão **"Compare & Pull Request"**
3. Clique nele
4. Preencha o título e descrição
5. Clique em **"Create Pull Request"**

**Modelo de descrição:**

```markdown
## O que foi alterado?
[Descreva o que você fez]

## Por que?
[Por que essa mudança é importante?]

## Checklist
- [ ] Testei as alterações
- [ ] Adicionei exemplos se relevante
- [ ] Sem erros de digitação
```

---

## 📋 Checklist Para Contribuições

Antes de enviar seu PR, verifique:

- [ ] **Linguagem simples** - Alguém sem experiência entenderia?
- [ ] **Sem jargão desnecessário** - Ou está explicado no Glossário?
- [ ] **Exemplos práticos** - Tem código funcional?
- [ ] **Testado** - Você testou no navegador?
- [ ] **Acessível** - Funciona com teclado? Contraste OK?
- [ ] **Sem erros de digitação** - Releu tudo?
- [ ] **Sem quebra de coisas** - Seus exemplos funcionam?

---

## 🎓 Boas Práticas

### Para Documentação

```markdown
❌ Ruim:
"Quando você usa addEventListener, o código é acionado"

✅ Bom:
"addEventListener faz algo acontecer quando o usuário interage. 
Exemplo: quando você clica um botão, você quer algo mudar."
```

### Para Código

```javascript
❌ Ruim:
var x = document.getElementById('btn');
x.addEventListener('click', function() {
  x.style.backgroundColor = 'red';
});

✅ Bom:
// Seleciona o botão
var botao = document.getElementById('btn');

// Adiciona uma ação quando o botão é clicado
botao.addEventListener('click', function() {
  // Muda a cor de fundo para vermelho
  botao.style.backgroundColor = 'red';
});
```

### Para Projetos Práticos

```markdown
❌ Ruim:
"Crie um HTTP request usando fetch..."

✅ Bom:
1. Abra arquivo novo.html
2. Cole este código:
[CÓDIGO AQUI]
3. Salve e abra no navegador
4. Clique no botão
5. Agora tente mudar X para Y..."
```

---

## 💬 Precisa de Ajuda Para Contribuir?

1. **Confuso com Git?** Abra uma Discussion! Te ajudamos.
2. **Não sabe se sua ideia é boa?** Abra uma Issue! Discutimos juntos.
3. **Seu PR foi recusado?** Normal! Leia os comentários e tente novamente.

---

## 🏆 Seu Primeiro PR Será Especial

Se este é seu primeiro PR em open-source:

1. ✨ Pode ser pequeno! Uma linha conta!
2. 🎉 Vamos celebrar com você!
3. 📚 Te ajudamos se tiver dúvida
4. 💪 Você merecia!

**Toda contribuição importa. Obrigado por estar aqui!** ❤️

---

## 📚 Recursos Para Aprender Git

Se você é novo em Git:

- **[Git para Iniciantes](https://git-scm.com/book/pt-BR/v2)** - Oficial, em português
- **[GitHub Skills](https://skills.github.com/)** - Aprenda interativamente
- **[Oh Shit, Git!](https://ohshitgit.com/)** - Soluções para problemas comuns

---

## 🎯 Ideias de Contribuição Para Começar

Aqui estão ideias faceis para seu primeiro PR:

- [ ] Melhorar explicação de um conceito no GLOSSARIO.md
- [ ] Adicionar um novo projeto prático (máx 20 min)
- [ ] Corrigir um erro de digitação
- [ ] Sugerir recursos adicionais em RECURSOS_PRATICOS.md
- [ ] Melhorar um exemplo de código
- [ ] Adicionar uma analogia nova para um conceito

**Quer ideias específicas?** Abra uma Discussion dizendo seus interesses!

---

## 👥 Comunidade

- 💬 [GitHub Discussions](https://github.com/digitalinnovationone/roadmaps/discussions) - Pergunte aqui
- 🐛 [Issues](https://github.com/digitalinnovationone/roadmaps/issues) - Reporte bugs
- 📱 [Discord DIO](https://discord.gg/dio) - Chat em tempo real
- 📚 [Projeto DIO](https://dio.me) - Site oficial

---

## 📜 Código de Conduta

Nossos valores:

- ✅ **Respeito** - Todos são bem-vindos
- ✅ **Inclusão** - Valorizamos diversidade
- ✅ **Paciência** - Estamos aqui para aprender
- ✅ **Positivo** - Crítica construtiva sempre
- ❌ **Sem discriminação** - De qualquer tipo
- ❌ **Sem spam**
- ❌ **Sem assédio**

Se alguém violar, reporte aos mantedores.

---

**Pronto para contribuir? Bora lá! 🚀**

Estamos esperando por você! ❤️
