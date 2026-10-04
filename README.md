# Base de Conhecimento de TI

Página web com problemas comuns de suporte técnico, com busca e filtro por categoria (rede, hardware e Windows). Cada problema mostra um passo a passo de solução.

🔗 **Demo:** https://github.com/Jnpy3

## Funcionalidades

- Busca por palavra no título e nos passos, ignorando acentos e maiúsculas
- Filtro por categoria, com botões criados automaticamente a partir dos dados
- Contador de resultados
- Tema escuro e layout responsivo (funciona no celular)

## Tecnologias

- HTML5
- CSS3 (variáveis CSS, flexbox e media queries)
- JavaScript puro (manipulação do DOM, `filter`, `forEach`, eventos)

## Como executar

1. Baixe ou clone o repositório
2. Abra o arquivo `index.html` no navegador

## Como adicionar um problema

Edite o array `problemas` no arquivo `script.js`:

    {
        titulo: "Nome do problema",
        categoria: "rede",
        passos: ["Passo 1", "Passo 2"]
    }

## Próximas melhorias

- Botão para alternar tema claro e escuro
- Botão para copiar comandos
- Formulário para cadastrar novos problemas

## Autor

Seu Nome - [LinkedIn](https://www.linkedin.com/feed/) - [GitHub](https://github.com/Jnpy3)
