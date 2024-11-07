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

### 添加功能，如元件、路由...等

官方文件 : [nuxi add](https://nuxt.com/docs/api/commands/add)

```
npx nuxi add <TEMPLATE> <NAME>
```

- `<TEMPLATE>` : 要生成的模板名稱，如 api 、plugin、 component、composable、 middleware、 layout、page
- `<NAME>` : 要生成的檔案名稱與路徑

### 元件的用途

官方文件 : [`<NuxtRouteAnnouncer />`](https://nuxt.com/docs/api/components/nuxt-route-announcer)、[`<NuxtWelcome />`](https://nuxt.com/docs/api/components/nuxt-welcome)。

### 使用自定義的頁面

step 1： `npx nuxi add page` 指令新增頁面  
 會產生放置頁面路由的 pages 資料夾

step 2：更換 app.vue 的 `<NuxtWelcome />` 元件  
替換成 `<NuxtPage />` 顯示 pages 資料夾新增的頁面

### 引入 useRoute

useRoute 是一個 global 的 composable  
使用 useRoute 可以取得網址相關參數

```
const route = useRoute();
// route.fullPath 取得目前路由的路徑
```

<br/>

# Day 2 - 引入 SCSS

## 加入預處理器

依需求加入預處理器

Sass：

```
npm install -D sass
```

Less：

```
npm install -D less
```

Stylus：

```
npm install -D stylus
```

### 使用預處理器

安裝 Sass 編譯器後，就可以在 VUE SFC 的 `<style>` 區塊撰寫 SCSS。

```
<!-- pages/index.vue -->

<template>
  <h1>Hello world</h1>
</template>

<style lang="scss">
$primary:blue;
h1{
  color: $primary;
}
</style>
```

如果需要使用 Less，可以將 `<style>` 標籤的 `lang` 屬性設為 `less`：

```
<style lang="less">
@primary: blue;
h1 {
  color: @primary;
}
</style>
```

## 設定全域共用樣式

使用 Nuxt3 開發時，會在 [nuxt.config.ts](https://nuxt.com/docs/guide/directory-structure/nuxt-config) 設置全域的樣式，讓網站中所有頁面和元件的 HTML 都可以使用編譯後的選擇器。

### step 1：建立樣式表

由於 [`nuxi add`](https://nuxt.com.cn/docs/api/commands/add) 指令不包含生成 [assets](https://nuxt.com.cn/docs/guide/directory-structure/assets) 資料夾的功能，因此需要手動在專案根目錄下建立 assets 資料夾。

以下以建立 assets/stylesheets/all.scss 為例 :

1. 在專案的根目錄（與 nuxt.config.ts 檔案同層）手動建立 assets 資料夾。
2. 在 assets 資料夾中建立子資料夾 stylesheets 來存放樣表。
3. 在 assets/stylesheets 資料夾內新增 all.scss 檔案，例如：

```scss
// assets/stylesheets/all.scss

.title {
  color: red;
  font-style: italic;
}
```

建立樣式表後，專案的資料夾結構應如下：

```
nuxt3-project/
├── assets/
│   └── stylesheets/
│       └── all.scss
├── nuxt.config.ts
├── pages/
│   └── index.vue
└── ... 其他檔案 ( 省略 )

```

### step 2：設定 nuxt.config.ts

在 [css 選項](https://nuxt.com.cn/docs/api/nuxt-config#css) 填入樣式檔案的路徑，將樣式設置為全域的樣式。

```tsx
// nuxt.config.ts
export default defineNuxtConfig({
  //... 其他設定
  css: ["@/assets/stylesheets/all.scss"],
});
```

補充，`@` 是專案資料夾 “根目錄” 路徑的縮寫 ( alias ) 。以下檔案結構為例， `@` 會指向 `nuxt3-project/` 。其他的縮寫可以閱讀官方文件 : [alias](https://nuxt.com/docs/api/nuxt-config#alias) 。

```
nuxt3-project/  <-------  @ 縮寫指向根目錄
├── assets/
│   └── stylesheets/
│       └── all.scss
├── nuxt.config.ts
├── pages/
│   └── index.vue
└── ... 其他檔案 ( 省略 )

```

### step 3：在 SFC 中使用樣式

設置全域樣式後，可以在 SFC 的 `<template>` 區塊中使用 `.title` 樣式。

```html
<!-- pages/index.vue -->
<template>
  <p class="title">全域共用樣式</p>
</template>
```

其他關於 Nuxt3 在中加入樣式的細節，可以閱讀官方文件：[Nuxt3 加入樣式](https://nuxt.com/docs/getting-started/styling)。

## 設定全域共用 SCSS 或 SASS 變數

在 Nuxt3 ，若希望在每個頁面與元件都共用同一支 SCSS 或 SASS 變數，需要在 nuxt.config.ts 設定 vite 選項的 [css.preprocessorOptions.scss.additionalData](https://vitejs.dev/config/shared-options.html#css-preprocessoroptions-extension-additionaldata)。

```
// nuxt.config.ts
export default defineNuxtConfig({
  //... 其他設定
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/stylesheets/_variables.scss"; // 在全部的元件都引入 _variables.scss
          `,
        },
      },
    },
  },
});
```

### 使用時機

這一段設定的目的是讓變數在編譯的時候自動加載到每個 SFC 的 `<style>` 中。這樣就可以直接使用這些變數，不需要在每個 SFC 都寫 `@import "@/assets/stylesheets/_variables.scss"` 。

以上方的 assets/stylesheets/\_variables.scss 檔案為例，定義了以下變數：

```scss
// assets/stylesheets/_variables.scss

$fs-base: 1rem;

$fs-sm: $fs-base * 0.875;
$fs-md: $fs-base * 1.5;
$fs-lg: $fs-base * 2;
$fs-xl: $fs-base * 2.5;
```

在 nuxt.config.ts 設定 css.preprocessorOptions.scss.additionalData 後，可以在 SFC 直接使用這些變數。例如：

```scss
// pages/hello.vue
<template>
  <h1>Hello world</h1>
</template>

<style lang="scss">
h1 {
  font-size: $fs-xl;
}
</style>
```

### 練習

在 Nuxt3 引入 Bootstrap5，並設置全域共用樣式

<br>
