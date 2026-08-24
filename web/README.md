# Доктор Горбатенко А.И. — многостраничный сайт

React + TypeScript (Vite) + React Router. SEO под продвижение и запись.

## Запуск

```bash
cd web
npm install
npm run dev
```

## Страницы

| URL | Раздел |
|-----|--------|
| `/` | Главная |
| `/uslugi` | Цены |
| `/konsultaciya` | Консультация |
| `/pod-kluch` | Операция «под ключ» |
| `/hirurgiya-stop` | Хирургия стоп |
| `/hirurgiya-kolena` | Хирургия колена |
| `/konferencii` | Конференции |
| `/voprosy` | FAQ |
| `/zapis` | Запись |

## SEO

- Отдельные title/description/canonical на каждую страницу
- JSON-LD: WebSite, BreadcrumbList, Physician (главная), FAQPage
- `public/robots.txt`, `public/sitemap.xml`
- SPA fallback: `public/_redirects` (Netlify), `vercel.json`

Перед деплоем укажите домен в `.env` и в sitemap/robots.
