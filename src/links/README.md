# Links Module

Модуль для централизованного управления всеми внешними ссылками с поддержкой переменных окружения.

## Структура

```
links/
├── README.md                    # Документация модуля
├── context.md                   # Контекст модуля
├── index.ts                     # Экспорты
├── types.ts                     # TypeScript типы
├── useLinks.ts                  # Основной хук
├── useFooterContent.ts          # Хук для контента футера
├── useFooterSectionContent.ts   # Хук для секции футера
├── linksConfig.ts               # Конфигурация ссылок
└── __tests__/                   # Тесты
    └── useLinks.test.ts
```

## Переменные окружения

### Основные ссылки
```env
REACT_APP_TELEGRAM_LINK=https://t.me/cosmofusiondao
REACT_APP_X_LINK=https://x.com/cosmofusiondao
REACT_APP_DISCORD_LINK=https://discord.gg/cosmofusiondao
REACT_APP_GALXE_LINK=https://galxe.com/cosmofusiondao
REACT_APP_DOCS_LINK=https://substack.com/@cosmofusiondao
REACT_APP_GITHUB_LINK=https://github.com/AiStockSearch/CosmosAI.git
REACT_APP_WORK_EMAIL=mustreetsworkspace@gmail.com
```

### Дополнительные ссылки
```env
REACT_APP_PRIVACY_POLICY_LINK=
REACT_APP_WORK_WITH_US_LINK=
REACT_APP_CONTACT_US_LINK=
REACT_APP_GET_STARTED_LINK=#getting-started
REACT_APP_PARTNERS_LINK=
REACT_APP_ABOUT_US_LINK=
REACT_APP_MEDIA_EVENTS_LINK=https://galxe.com/zkcloud
```

### Покупки и NFT
```env
REACT_APP_OPENSEA_LINK=https://opensea.io/collection/cosmos-nft
REACT_APP_NFT_LINK=https://stargaze.zone/collections/cosmos-nft
REACT_APP_BRIDGE_LINK=https://app.squidrouter.com/bridge?from=ETH&to=ATOM
REACT_APP_TANGEM_ORDER_LINK=https://tangem.com/en/order/
```

### Дополнительные ссылки
```env
REACT_APP_GEVULOT_LABS_LINK=
REACT_APP_EXPLORER_LINK=
REACT_APP_BLOG_LINK=#dialogbook
REACT_APP_NODE_RENTAL_LINK=
REACT_APP_WHITEPAPER_LINK=https://whitepaper.cosmos.network/
REACT_APP_DISCLAIMER_LINK=
REACT_APP_SUBSTACK_LINK=https://substack.com/@cosmofusiondao
REACT_APP_MINT_SCAN_LINK=https://www.mintscan.io/cosmos
```

## Использование

### Базовое использование

```typescript
import { useLinks } from '../links';

const MyComponent = () => {
  const { links, getLink, isConfigured } = useLinks();

  // Получить конкретную ссылку
  const telegramLink = getLink('telegram');
  
  // Использовать все ссылки
  const { telegram, x, discord } = links;

  return (
    <div>
      <a href={telegramLink}>Telegram</a>
      <a href={links.x}>X</a>
      <a href={links.discord}>Discord</a>
    </div>
  );
};
```

### Использование в футере

```typescript
import { useFooterContent, useFooterSectionContent } from '../links';

const Footer = () => {
  const footerSection = useFooterSectionContent();
  const footerContent = useFooterContent();

  return (
    <div>
      <HeroBlock
        title={footerSection.title}
        buttonLink={footerSection.buttonLink}
        buttonLink2={footerSection.buttonLink2}
      />
      <SocialButton links={footerContent.socialLinks} />
    </div>
  );
};
```

## API

### useLinks()

Возвращает объект с ссылками и методами:

```typescript
interface UseLinksReturn {
  links: LinksConfig;
  getLink: (key: LinkKey) => string;
  isConfigured: boolean;
}
```

### useFooterContent()

Возвращает структурированный контент для футера:

```typescript
interface FooterLinks {
  links: LinkItem[];
  linksTitle: string;
  purchase: LinkItem[];
  purchaseTitle: string;
  more: LinkItem[];
  moreTitle: string;
  socialLinks: LinkItem[];
}
```

### useFooterSectionContent()

Возвращает контент секции футера с кнопками:

```typescript
{
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonText2: string;
  buttonLink2: string;
  // ... другие поля
}
```

## Типы ссылок

```typescript
type LinkKey = 
  | 'telegram' | 'x' | 'discord' | 'galxe'
  | 'docs' | 'github' | 'workEmail' | 'privacyPolicy'
  | 'workWithUs' | 'contactUs' | 'getStarted' | 'partners'
  | 'aboutUs' | 'mediaAndEvents' | 'opensea' | 'nft'
  | 'bridge' | 'tangemOrder' | 'gevulotLabs' | 'explorer'
  | 'blog' | 'nodeRental' | 'whitepaper' | 'disclaimer'
  | 'backToTop' | 'substack' | 'mintscan';
```

## Fallback значения

Все ссылки имеют fallback значения, которые используются, если переменная окружения не установлена:

- Telegram: `https://t.me/cosmofusiondao`
- X: `https://x.com/cosmofusiondao`
- Discord: `https://discord.gg/cosmofusiondao`
- Galxe: `https://galxe.com/cosmofusiondao`
- И другие...

## Тестирование

```bash
npm test -- --testPathPattern=useLinks.test.ts
```

## Преимущества

- **Централизованное управление** - все ссылки в одном месте
- **Поддержка переменных окружения** - легко настраивать для разных сред
- **Fallback значения** - приложение работает даже без настроенных переменных
- **Типизация** - полная поддержка TypeScript
- **Переиспользуемость** - хуки можно использовать в любом компоненте
- **Тестируемость** - изолированные тесты с моками 