# Site institucional — Tariane (Psicóloga)

Projeto do bootcamp de Desenvolvimento de Sistemas Web Avançados Front-End: site
institucional de página única para a psicóloga Tariane (CRP 06/138426),
construído com **HTML5, CSS3 e JavaScript puro**, sem frameworks ou bibliotecas.

Prioridade do projeto: **acessibilidade (WCAG 2.1 nível AA)**.

## Estrutura do projeto

```
projeto-psicoTariane/
├── index.html
├── assets/
│   ├── css/
│   │   ├── reset.css        # normalização entre navegadores
│   │   ├── variables.css    # tokens de cor, tipografia e espaçamento
│   │   └── style.css        # estilos do site
│   ├── js/
│   │   └── main.js          # menu mobile, acordeão do FAQ, carrossel do
│   │                        # consultório, destaque de seção ativa,
│   │                        # botão "Agende uma sessão", ano no rodapé
│   ├── img/                 # fotos e ícones
│   └── instagram/           # miniaturas reais das postagens do Instagram
```

## Seções do site

Ordem de navegação: **Sobre → Atuação e Formação → FAQ → Localização → Contato**
(a seção de Contato foi intencionalmente movida para o final da página).

- **Sobre** — biografia real da Tariane, com foto.
- **Atuação e Formação** — cards de Formação, Atuação, Especializações e
  Reconhecimento acadêmico.
- **FAQ (Perguntas Frequentes)** — 10 perguntas reais em acordeão acessível
  (`<details>`/`<summary>`), com fechamento automático da pergunta anterior
  ao abrir outra; a primeira pergunta vem aberta por padrão.
- **Localização** — endereço, aviso de atendimento somente com agendamento,
  mapa do Google embutido (iframe) com link "Abrir no Google Maps", e
  carrossel "Conheça nosso espaço" com fotos reais do consultório e setas de
  navegação.
- **Contato** — telefone com ícone oficial do WhatsApp (verde, à direita do
  número), e-mail, botão "Falar pelo WhatsApp" e card de Instagram com
  miniaturas reais de postagens, cada uma linkando para o post original.

O botão "Agende uma sessão", fixo no menu, abre o WhatsApp
(`https://wa.me/5514988092529`) em uma nova aba e, ao mesmo tempo, rola a
página até a seção Contato.

## Identidade visual

- Cores: branco `#FFFFFF`, terracota `#AF774D`, cinza-amarronzado `#5B554F`
- Fonte: [IBM Plex Serif](https://fonts.google.com/specimen/IBM+Plex+Serif) (Google Fonts)

### Decisão de contraste (WCAG 1.4.3)

- `#5B554F` sobre branco → **~7,35:1** — usada como cor padrão de texto e de
  botões/elementos interativos.
- `#AF774D` (terracota) sobre branco → **~3,77:1** — passa apenas para texto
  grande (títulos ≥ 24px) e elementos gráficos; nunca em parágrafos ou texto
  pequeno de botão.
- `#9C6640` (`--terracota-escuro`) sobre branco → **~4,79:1** — variação mais
  escura do terracota, usada nos estados hover/focus de botões e links de
  texto normal, que com o terracota puro cairiam abaixo do mínimo AA.
- `--terracota-claro` (terracota a 40% de opacidade) — uso puramente
  decorativo (traços, arcos), nunca em texto.

## Recursos de acessibilidade implementados

- HTML5 semântico (`header`, `nav`, `main`, `section`, `footer`) com `lang="pt-BR"`.
- Link "Pular para o conteúdo principal" (skip link).
- Landmarks com `aria-label`/`aria-labelledby` em navegação e seções.
- Menu mobile com `aria-expanded`, `aria-controls`, fechamento por `Esc` e
  retorno de foco ao botão.
- `aria-current="true"` no item de menu da seção visível (via `IntersectionObserver`).
- - Acordeão do FAQ com `<details>`/`<summary>` nativos (navegável por teclado
  e leitor de tela sem ARIA extra), com fechamento exclusivo via JavaScript.
- Setas de navegação do carrossel implementadas como `<button>` com
  `aria-label` descritivo, operáveis por teclado.
- Indicadores de foco visíveis (`:focus-visible`) em todos os elementos interativos.
- Texto alternativo (`alt`) obrigatório em todas as imagens de conteúdo.
- Respeito a `prefers-reduced-motion` (desativa animações/scroll suave e o
  auto-avanço do carrossel de fotos do consultório — nesse caso a troca de
  foto só acontece pelo clique nos indicadores).
- Links não dependem apenas de cor para se distinguir do texto (sublinhado).

## Conteúdo

Todo o conteúdo textual (biografia, formação, especialidades, FAQ e dados de
contato) é real, fornecido pela própria Tariane e revisado com ela em duas
rodadas de feedback via WhatsApp antes da publicação. Não há mais conteúdo
pendente ou placeholders no HTML.

A seção Contato não tem formulário: traz telefone, e-mail e botão direto de
WhatsApp, além de um card de Instagram com miniaturas reais das postagens da
Tariane — sem integração automática via API (o que exigiria configuração
adicional fora do escopo atual), mas com links reais para cada post.

## Como rodar localmente

Não há build — basta abrir `index.html` no navegador, ou usar uma extensão
tipo "Live Server" no VS Code para recarregamento automático.]

## Publicação

Site publicado via GitHub Pages: https://mat-ernandes.github.io/projeto-psicoTariane/
posteriormente será hospedado.

## Autor

Mateus Ernandes da Cunha — projeto desenvolvido para a psicóloga Tariane
Oliveira (CRP 06/138426), como parte do Bootcamp Extensionista.
