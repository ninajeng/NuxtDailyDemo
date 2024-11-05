# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

<br/>
<br/>

# Day 1 - 建立 Nuxt3 專案

## 環境準備

Node.js - v18 版以上，建議使用偶數 ( v18 或 v20 ) LTS 版本

## 建立專案

在終端機使用指令

```
npx nuxi@latest init [專案名稱]
```

開啟開發伺服器

```
npm run dev
```

## Nuxt 基礎指令

### 初始化新的 Nuxt3 專案

官方文件 : [nuxi init](https://nuxt.com/docs/api/commands/init)

```
npx nuxi init [專案與資料夾名稱]
```

<br/>

### 添加功能，如元件、路由...等

官方文件 : [nuxi add](https://nuxt.com/docs/api/commands/add)

```
npx nuxi add <TEMPLATE> <NAME>
```

- `<TEMPLATE>` : 要生成的模板名稱，如 api 、plugin、 component、composable、 middleware、 layout、page
- `<NAME>` : 要生成的檔案名稱與路徑

<br/>

### 元件的用途

官方文件 : [`<NuxtRouteAnnouncer />`](https://nuxt.com/docs/api/components/nuxt-route-announcer)、[`<NuxtWelcome />`](https://nuxt.com/docs/api/components/nuxt-welcome)。

<br/>

### 使用自定義的頁面

step 1： `npx nuxi add page` 指令新增頁面  
 會產生放置頁面路由的 pages 資料夾

step 2：更換 app.vue 的 `<NuxtWelcome />` 元件  
替換成 `<NuxtPage />` 顯示 pages 資料夾新增的頁面

<br/>

### 引入 useRoute

useRoute 是一個 global 的 composable  
使用 useRoute 可以取得網址相關參數

```
const route = useRoute();
// route.fullPath 取得目前路由的路徑
```
