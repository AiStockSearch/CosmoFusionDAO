# CosmoFusion DAO — Web Landing

A modern React landing page for CosmoFusion DAO, built with React 19, TypeScript, and Tailwind CSS. Features include localization (EN/RU), responsive design, smooth animations, SEO optimization, PWA capabilities, accessibility, centralized links, and memory bank for AI development.

---

## Project Structure

```
src/
├── components/           # UI components (feature-based structure)
│   ├── hero.section.tsx
│   ├── problem.sections.tsx
│   ├── reflection.sections.tsx
│   ├── getting.started.tsx
│   ├── cases.work.tsx
│   ├── privacy.policy.tsx
│   ├── footer.*.tsx     # Footer components
│   ├── comp.*.tsx       # Reusable components
│   └── __tests__/       # Unit tests
├── content/             # Content and translations
│   ├── *En.tsx         # English content
│   ├── *Ru.tsx         # Russian content
│   ├── links.ts         # Centralized links
│   └── sectionSeo.json  # SEO metadata
├── hooks/               # Custom React hooks
│   ├── useLocale.ts
│   ├── useSectionContent.ts
│   └── useUnifiedTranslations.ts
├── analytics/           # Analytics integration
│   ├── eventCenter.ts   # Universal event center
│   ├── eventTypes.ts    # Event types and categories
│   ├── eventMap.ts      # Event mapping
│   └── scenarios/       # Event scenarios
├── shared/
│   └── memory-bank/     # AI development context
├── sections/            # Page sections
├── contexts/            # React contexts
├── locales/             # Translation files
├── links/               # Link management
├── telegram-bot/        # Telegram integration
├── types/               # TypeScript types
└── utils/               # Utility functions
```

## Technologies

- **React 19** — Main framework
- **TypeScript** — Strict typing
- **Tailwind CSS** — Utility-first CSS framework
- **PostCSS** — CSS processing
- **Jest + RTL** — Testing framework
- **react-helmet-async** — SEO and meta tags
- **Framer Motion** — Animations
- **PWA** — Progressive Web App features
- **Sentry** — Error tracking and monitoring

## Key Features

### Localization
- Automatic language detection (browser/geo)
- Language switcher (EN/RU)
- All sections and alt-texts are localized
- Translation files: `src/locales/en.json`, `src/locales/ru.json`

### Analytics Integration
- Universal event center supporting multiple platforms
- Event scenarios for different sections
- Automatic session tracking
- Error tracking with Sentry

### SEO & OpenGraph
- Dynamic title, description, and og/tw tags via Helmet
- Section-specific SEO data in `src/content/sectionSeo.json`
- Optimized for search engines

### Accessibility
- ARIA labels for interactive elements
- Keyboard navigation support
- Responsive design for all devices
- Semantic HTML structure

### PWA Features
- Service worker for offline functionality
- Web app manifest
- Installable on mobile devices
- Offline fallback page

## Getting Started

### Prerequisites
- Node.js 18+ 
- Yarn or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd cosmofusion-dao-web

# Install dependencies
yarn install

# Start development server
yarn start

# Run tests
yarn test

# Build for production
yarn build
```

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_TELEGRAM_HTTP_API=your_telegram_bot_token
REACT_APP_TELEGRAM_CHAT_ID=your_chat_id
```

## Development

### Content Updates

1. **Translations**: Update `src/locales/en.json` and `src/locales/ru.json`
2. **Links**: Modify `src/content/links.ts` for centralized link management
3. **SEO**: Update `src/content/sectionSeo.json` for section-specific SEO
4. **Content**: Edit content files in `src/content/` directory

### Component Development

Components follow a feature-based structure:

```tsx
// Example component structure
<div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-200">
  <h2 className="text-3xl font-bold text-primary-600">Title</h2>
</div>
```

### Custom Colors

- `primary-600` — Main blue color
- `secondary-600` — Secondary purple color

### Animations

- `animate-fade-in` — Smooth fade-in animation
- `animate-slide-up` — Slide-up animation

## Testing

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test --watch

# Generate test coverage
yarn test --coverage
```

Tests are located in `src/components/__tests__/` and follow Jest + React Testing Library patterns.

## Deployment

### GitHub Pages

1. Ensure `homepage` field in `package.json` is correct
2. Run deployment:

```bash
yarn deploy
```

### Other Platforms

```bash
# Build for production
yarn build

# The build folder contains deployable files
```

## Analytics

The project includes a comprehensive analytics system:

- **Event Center**: Universal event logging (`src/analytics/eventCenter.ts`)
- **Event Scenarios**: Predefined event patterns (`src/analytics/scenarios/`)
- **Multiple Platforms**: Support for Amplitude, Firebase, Sentry
- **Session Tracking**: Automatic session management

### Adding Analytics Events

```typescript
import { eventCenter } from './analytics/eventCenter';

// Log an event
eventCenter.logEvent({
  category: 'click',
  name: 'button_click',
  value: { button: 'subscribe' }
}, ['amplitude', 'sentry']);
```

## Memory Bank

The memory bank (`src/shared/memory-bank/`) is used exclusively for AI development context:

- Stores technical context for Cursor/AI interaction
- Does not contain user data or business logic
- Used only during development process

## Telegram Integration

The project includes Telegram bot integration for form submissions:

- Automatic message formatting
- Error handling and logging
- Analytics integration
- Configurable via environment variables

## Performance

- Optimized images (WebP format)
- Lazy loading for components
- Code splitting with React.lazy
- PWA caching strategies
- Bundle size optimization

## Security

- **Automated Security Scanning**: Snyk integration for vulnerability detection
- **GitHub Security Tab**: Automatic upload of security findings
- **Dependency Auditing**: npm/yarn audit integration
- **Container Scanning**: Trivy for Docker image security
- **Input validation with TypeScript**
- **Secure environment variable handling**
- **HTTPS enforcement**
- **Content Security Policy**
- **XSS protection**

### Security Workflows

The project includes automated security workflows:

- **Dev Branch**: Basic security checks with critical vulnerability detection
- **Main/Master Branch**: Comprehensive security scanning with high severity threshold

See [SECURITY_SETUP.md](./SECURITY_SETUP.md) for detailed configuration instructions.

## Contributing

1. Follow the existing code structure
2. Add tests for new components
3. Update documentation as needed
4. Ensure accessibility compliance
5. Test on multiple devices

## License

This project is private and proprietary.

---

**For questions and improvements:**

- For section expansion — add keys to JSON files
- For new SVG/icons — place in `src/assets/svg/`
- For accessibility — check ARIA labels and focus management
- For custom styles — add to `tailwind.config.js`
- For new features — follow the feature-based folder structure
