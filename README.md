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
│   │   └── main.js          # menu mobile, carrossel de fotos do consultório,
│   │                        # destaque de seção ativa, ano no rodapé
│   └── img/                 # fotos e ícones
└── docs/
    └── conteudo.md          # rascunho do conteúdo real antes de ir para o HTML
```

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
- Indicadores de foco visíveis (`:focus-visible`) em todos os elementos interativos.
- Texto alternativo (`alt`) obrigatório em todas as imagens de conteúdo.
- Respeito a `prefers-reduced-motion` (desativa animações/scroll suave e o
  auto-avanço do carrossel de fotos do consultório — nesse caso a troca de
  foto só acontece pelo clique nos indicadores).
- Links não dependem apenas de cor para se distinguir do texto (sublinhado).

## Conteúdo

Todo o conteúdo textual (biografia, currículo, especialidades e dados de
contato) é real, fornecido pela própria Tariane. Enquanto o material não é
inserido, o HTML traz marcadores `[CONTEÚDO PENDENTE: ...]` no lugar do texto
final — ver [`docs/conteudo.md`](docs/conteudo.md).

A seção Contato não tem mais formulário: agora traz telefone/e-mail/endereço
diretos e dois botões ("Falar pelo WhatsApp" / "Ver Instagram") ao lado de um
carrossel com fotos do consultório. Os links desses dois botões ainda estão
como placeholder (`LINK-WHATSAPP-AQUI` / `LINK-INSTAGRAM-AQUI`) — falta
substituir pelos links reais antes de publicar.

## Como rodar localmente

Não há build — basta abrir `index.html` no navegador, ou usar uma extensão
tipo "Live Server" no VS Code para recarregamento automático.

## Autor

Mateus Ernandes — projeto desenvolvido para a psicóloga Tariane (CRP 06/138426).
