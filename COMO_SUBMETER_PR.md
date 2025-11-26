# 🎯 Como Submeter Seu Trabalho Como PR

Você criou uma contribuição incrível! Agora vou te guiar passo a passo para submeter como Pull Request (PR) no repositório oficial da DIO.

---

## ✅ Antes de Começar - Checklist

- [ ] Você fez um fork do repositório? (Se não, ainda dá tempo!)
- [ ] Seus arquivos estão salvos localmente?
- [ ] Você leu os seus próprios textos? (Tira dúvidas?)
- [ ] Os exemplos de código funcionam?

---

## 📋 Passo 1: Prepare Seus Arquivos

Seus arquivos estão em: `/workspaces/roadmaps/`

**Arquivos que você criou:**
```
✅ GUIA_INICIANTES.md
✅ GLOSSARIO.md
✅ ACESSIBILIDADE.md
✅ PROJETOS_PRATICOS.md
✅ RECURSOS_PRATICOS.md
✅ CONTRIBUTING.md (atualizado)
✅ README.md (atualizado)
```

---

## 🔧 Passo 2: Configure Seu Git

Se é sua primeira vez, configure seus dados:

```bash
git config --global user.name "Seu Nome Aqui"
git config --global user.email "seu.email@example.com"
```

---

## 📤 Passo 3: Envie Para Seu Fork

### 3.1 - Verifique se você está no repositório certo:

```bash
cd /workspaces/roadmaps
pwd
# Deve mostrar: /workspaces/roadmaps
```

### 3.2 - Verifique o status:

```bash
git status
```

Você deve ver algo como:
```
On branch main
Untracked files:
  ACESSIBILIDADE.md
  GLOSSARIO.md
  GUIA_INICIANTES.md
  ...
```

### 3.3 - Adicione todos os arquivos:

```bash
git add .
```

### 3.4 - Faça um commit:

```bash
git commit -m "docs: adicionar guias de acessibilidade e projetos práticos para iniciantes

- Adicionar GUIA_INICIANTES.md com linguagem leiga e sem jargão
- Adicionar GLOSSARIO.md com 40+ termos explicados
- Adicionar ACESSIBILIDADE.md com suporte a TDAH, autismo, dislexia
- Adicionar PROJETOS_PRATICOS.md com 6 projetos executáveis
- Adicionar RECURSOS_PRATICOS.md com cursos e ferramentas
- Atualizar README.md com links aos novos guias
- Atualizar CONTRIBUTING.md para ser amigável a iniciantes

Foco em acessibilidade para neurodivergentes e aprendizado prático."
```

### 3.5 - Envie para seu fork:

```bash
git push origin main
```

Se der erro sobre "não existe upstream", faça:

```bash
git push --set-upstream origin main
```

---

## 🌐 Passo 4: Abra o Pull Request no GitHub

### 4.1 - Acesse seu fork no GitHub:

```
https://github.com/SEU_USUARIO/roadmaps
```

### 4.2 - Você verá um botão amarelo assim:

```
[Compare & Pull Request]
```

Clique nele!

### 4.3 - Preencha o PR:

**Título:**
```
docs: adicionar guias de acessibilidade para iniciantes e neurodivergentes
```

**Descrição:**
```markdown
## Descrição

Este PR adiciona uma estrutura completa de documentação focada em:
- Acessibilidade para pessoas neurodivergentes (TDAH, autismo, dislexia)
- Aprendizado prático em vez de teórico
- Linguagem simples sem jargão técnico desnecessário

## Arquivos Adicionados

- **GUIA_INICIANTES.md** - Para quem não sabe nada de programação
- **GLOSSARIO.md** - 40+ termos técnicos explicados com analogias
- **ACESSIBILIDADE.md** - Guias específicas para TDAH, autismo, dislexia, daltonismo
- **PROJETOS_PRATICOS.md** - 6 projetos passo-a-passo (5-30 minutos cada)
- **RECURSOS_PRATICOS.md** - Cursos, ferramentas, comunidades e roadmap
- **CONTRIBUTING.md** - Atualizado para ser amigável a iniciantes

## Atualizações

- **README.md** - Adicionado seção "Comece Por Aqui" e "Acessibilidade e Neurodiversidade"

## Motivação

Muitos iniciantes em programação se sentem perdidos com documentação técnica demais.
Este projeto foi pensado especialmente para:

- ✅ Pessoas com TDAH (projetos curtos, visuais)
- ✅ Pessoas no espectro do autismo (estrutura clara)
- ✅ Pessoas com dislexia (opções de acessibilidade)
- ✅ Pessoas com daltonismo (paletas seguras)
- ✅ Pessoas com diferentes estilos de aprendizado

## Como Testei

- [x] Testei os exemplos de código no navegador
- [x] Verifiquei a clareza da linguagem
- [x] Chequei erros de digitação
- [x] Validei os links
- [x] Revisei para garantir que está sem jargão técnico

## Checklist

- [x] Segue o estilo do projeto
- [x] Sem jargão técnico desnecessário
- [x] Exemplos práticos inclusos
- [x] Acessível para neurodivergentes
- [x] Sem quebra de funcionalidades existentes
```

### 4.4 - Clique em **"Create Pull Request"**

---

## ⏳ Agora É Só Esperar!

1. **Os mantedores vão revisar** - Pode levar dias ou semanas
2. **Podem pedir mudanças** - Isso é NORMAL! Não é rejeição!
3. **Se pedirem ajustes:**
   - Edite os arquivos localmente
   - Faça um novo commit
   - Faça `git push origin main`
   - O PR é automaticamente atualizado!

---

## 💬 Se Rejeitarem (Não Desista!)

### Razões comuns e como resolver:

❌ **"Falta de alinhamento com o projeto"**  
✅ Solução: Atualize conforme feedback e resubmita

❌ **"Conteúdo duplicado"**  
✅ Solução: Revise o que já existe e encontre ângulo diferente

❌ **"Não segue padrão de contribuição"**  
✅ Solução: Releia CONTRIBUTING.md e ajuste

---

## 🎉 Se For Aceito!

Quando seu PR for mergeado:

1. **Você está em produção!** 🚀
2. **Seu nome aparece como contributor** 
3. **Seus guias ajudam iniciantes em todo o mundo** ❤️
4. **Você ganhou experiência real de contribuição**

---

## 🆘 Problemas Comuns

### "Não consigo fazer push"

```bash
# Primeiro, verifique a remote:
git remote -v

# Se não mostra nada ou está errado, configure:
git remote add origin https://github.com/SEU_USUARIO/roadmaps.git

# Ou se já existe, atualize:
git remote set-url origin https://github.com/SEU_USUARIO/roadmaps.git
```

### "Disse que tenho conflitos"

```bash
# Primeiro, puxe as atualizações mais recentes:
git pull origin main

# Se houver conflitos, você vai ver:
# <<<<<<< HEAD
# seu código
# =======
# código novo
# >>>>>>> origin/main

# Resolva manualmente editando o arquivo
# Depois:
git add .
git commit -m "fix: resolver conflitos"
git push origin main
```

### "Quero voltar atrás"

```bash
# Se ainda não fez push:
git reset HEAD~1  # Volta 1 commit
git reset --hard HEAD~1  # Volta e deleta mudanças

# Se já fez push, crie um revert:
git revert HEAD  # Cria um novo commit desfazendo o anterior
```

---

## 📞 Precisa de Ajuda?

1. **Procure a documentação** - Stack Overflow, GitHub Docs
2. **Abra uma Issue/Discussion** no repositório
3. **Pergunte em comunidades** - Discord DIO, Reddit r/github, etc
4. **Procure por tutoriais** - YouTube "Git for beginners"

---

## ✨ Próximas Contribuições

Depois que seu PR for aceito, você pode:

- [ ] Fazer traduções para outros idiomas
- [ ] Adicionar mais projetos práticos
- [ ] Criar vídeos tutoriais
- [ ] Revisar PRs de outros iniciantes
- [ ] Ser mantedor/a do projeto!

---

## 🎓 O Que Você Aprendeu

Ao fazer essa contribuição, você pratiou:

✅ Git (clone, add, commit, push, PR)  
✅ Documentação (escrever em Markdown)  
✅ Open Source (como funciona contribuição)  
✅ Comunicação (descrever mudanças)  
✅ Feedback (aceitar revisões)  

**Essas habilidades são MUITO valorizadas em qualquer empresa!**

---

## 🏆 Seu Checklist Final

- [ ] Fiz fork do repositório
- [ ] Adicionei meus arquivos
- [ ] Testei tudo
- [ ] Fiz commit com mensagem descritiva
- [ ] Fiz push para meu fork
- [ ] Abri o PR com descrição completa
- [ ] Linkei no campo de entrega da DIO

---

## 🚀 Bora Submeter?

**Você está pronto!** Sua contribuição é INCRÍVEL e vai ajudar muita gente. 

Se tiver dúvidas, lembre-se:
> **Não tem pergunta boba. Todo desenvolvedor começou assim.** 💪

**Boa sorte! 🎉**
