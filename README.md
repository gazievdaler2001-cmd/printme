# PrintMe

**AI-сервис кастомизации одежды.** Пользователь создаёт дизайн футболки или худи
с помощью ИИ (или загружает своё фото), видит результат на реалистичном мокапе,
настраивает принт и оформляет заказ. Компания печатает дизайн методом DTF,
упаковывает и доставляет.

> Статус: **Фаза 0 — каркас проекта.** Внешние интеграции (OpenAI, Cloudflare R2,
> Telegram) работают в режиме заглушек, пока не заданы ключи в `.env`.

## Технологии

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** (premium / minimal / mobile-first)
- **Prisma** + **PostgreSQL**
- **Cloudflare R2** (хранилище, S3-совместимое)
- **OpenAI API** (генерация / стилизация / удаление фона / upscale)
- **Fabric.js** (редактор принта — Фаза 2)
- Локализация **RU + TJ** (`/ru`, `/tg`)

## Структура

```
src/
├─ app/
│  ├─ layout.tsx              # корневой layout
│  └─ [locale]/              # локализованные маршруты (ru, tg)
│     ├─ layout.tsx          # html/body, header, footer
│     ├─ page.tsx            # Главная (Hero, How it works, ...)
│     ├─ catalog/            # Каталог примеров
│     ├─ studio/             # Создать дизайн (ядро — Фаза 2)
│     ├─ about/ shipping/ cart/
├─ components/
│  └─ layout/                # SiteHeader, SiteFooter, LocaleSwitcher
├─ lib/
│  ├─ env.ts                 # доступ к env + детект MOCK-режимов
│  ├─ prisma.ts  openai.ts  r2.ts  telegram.ts  pricing.ts
│  ├─ catalog-data.ts        # статичные данные каталога (Фаза 0)
│  └─ i18n/                  # config + dictionaries (ru, tg)
├─ middleware.ts             # редирект на локаль по умолчанию
prisma/
├─ schema.prisma            # Product, CatalogItem, Design, Order
└─ seed.ts
```

## Запуск

```bash
cp .env.example .env        # заполните по необходимости (можно оставить пустыми — MOCK)
npm install
npm run db:generate         # prisma generate
npm run dev                 # http://localhost:3000 -> /ru
```

С реальной БД:

```bash
npm run db:push             # применить схему к PostgreSQL
npm run db:seed             # товары + каталог
```

## Скрипты

| Скрипт | Назначение |
|--------|-----------|
| `npm run dev` | дев-сервер |
| `npm run build` / `start` | прод-сборка / запуск |
| `npm run typecheck` | проверка типов |
| `npm run db:push` / `db:seed` / `db:studio` | работа с БД |

## Дорожная карта (фазы)

- [x] **Фаза 0** — каркас: Next.js + TS + Tailwind + Prisma + i18n + заглушки интеграций
- [ ] **Фаза 1** — маркетинг: Главная, Каталог (из БД), О нас, Доставка
- [ ] **Фаза 2** — Studio: редактор принта (Fabric.js) + мокапы + цена
- [ ] **Фаза 3** — AI: OpenAI (генерация / стилизация / remove-bg / upscale / модерация)
- [ ] **Фаза 4** — заказ: корзина, форма, сохранение, Telegram-уведомление
- [ ] **Фаза 5** — админка: заказы, просмотр дизайна, смена статуса
