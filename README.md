# Área de Links — Nelson Souza

Página pessoal de links criada para apresentar, em um único endereço, meu trabalho como desenvolvedor, meus projetos, canais de contato e materiais gratuitos.

## Objetivo

O site funciona como uma página profissional de “link na bio” para dois públicos:

- recrutadores e empresas, com acesso aos projetos voltados à carreira;
- clientes, parceiros e visitantes, com acesso ao portfólio, contatos e projetos independentes.

O conteúdo está organizado em cinco áreas: projetos para carreira, portfólio de desenvolvimento, contatos, projetos profissionais/acadêmicos e conteúdos gratuitos.

## Tecnologias

- HTML semântico, escrito nos componentes React;
- CSS puro para layout, responsividade e animações;
- TypeScript para tipagem e organização dos dados;
- React para criação dos componentes;
- Next.js apenas como estrutura de execução, rotas e otimização de imagens.

Não há banco de dados, autenticação ou estado no navegador. A página é estática, leve e simples de manter.

## Estrutura principal

```text
app/
├── globals.css          # Cores, componentes visuais e responsividade
├── layout.tsx           # Idioma, fonte e metadados do site
├── page.tsx             # Página inicial e links principais
└── portfolio/
    └── page.tsx         # Projetos profissionais e acadêmicos
public/
└── logo-nelson.png      # Logo usada no perfil
tests/
└── rendered-html.test.mjs
```

## Como executar

É necessário ter o Node.js 22.13 ou superior instalado.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

Para publicação, defina `NEXT_PUBLIC_SITE_URL` com o endereço final do site. Essa variável garante que a imagem de compartilhamento use uma URL absoluta correta.

## Validação

```bash
npm run build
npm test
```

O primeiro comando cria a versão de produção. O segundo também confere se os textos e links essenciais estão presentes.

## Como editar os links

Abra `app/page.tsx`. No começo do arquivo estão três constantes fáceis de localizar:

- `CONTACT_LINKS`: endereços oficiais, incluindo o e-mail `nelsonsouza0328@gmail.com`;
- `FEATURED_LINKS`: áreas e projetos em destaque;
- `CONTACTS`: cartões da seção de contato.

Cada cartão segue o tipo `LinkItem`. Para incluir outro, copie um objeto existente e altere título, descrição, endereço e ícone.

## Como personalizar o visual

As cores ficam nas variáveis do início de `app/globals.css`. Alterar uma variável atualiza a identidade visual de toda a página. Os blocos do CSS estão comentados por responsabilidade e os componentes têm nomes descritivos.

## Próximos conteúdos

- substituir os cartões “Em preparação” por projetos reais;
- incluir contexto, tecnologias e resultados em cada estudo de caso;
- cadastrar dicas, cursos, livros e materiais gratuitos;
- revisar os links sempre que um perfil mudar.
