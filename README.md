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

<br/>

# Day 3 - 使用指令建立 Layouts

## 共用內容

app.vue 作為 Nuxt3 預設的進入點，網站有共用內容的時候可以放在 app.vue ，例如 : 頁首與頁尾

```html
<!-- app.vue -->
<template>
  <header>頁首</header>
  <NuxtPage />
  <footer>頁尾</footer>
</template>
```

在全部的頁面都會呈現相同的內容。如果在部分頁面希望指定不同的頁首與頁尾的情況，就需要改成使用 Nuxt3 的模板功能。

## 預設 Layout

Nuxt3 預設會將 default.vue 作為預設的模板。當頁面元件與 <NuxtLayout> 沒有特別指定模板，將會使用 default.vue 作為預設的 Layout 。

step 1：使用 `npx nuxi add layout default` 指令建立預設模板。  
default.vue 內的 `<slot />` 插槽用途為顯示頁面的內容。

```html
<!-- layouts/default.vue -->
<template>
  <header>預設模板的表頭</header>
  <slot />
  <footer>預設模板的表尾</footer>
</template>
```

step 2：在 app.vue 加入 `<NuxtLayout>` 元件來啟用模板。

```html
<!-- app.vue -->
<template>
  <h1>最外層的 App.vue</h1>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

## 具名 Layout

除了預設模板以外，還可以新增多個模板，以建立 admin 模板為例 :

### 新增具名 Layout

使用 `npx nuxi add layout admin` 指令建立 another 模板。

```html
<!-- layouts/another.vue -->
<template>
  <header>admin 模板的表頭</header>
  <slot />
  <footer>admin 模板的表尾</footer>
</template>
```

### 在頁面指定使用具名 Layout

step 1：建立頁面。 以 order 頁面為例，可以使用 `npx nuxi add page order` 指令來建立頁面，或是手動建立 pages/order.vue 檔案

### 練習

使用 Nuxt3 Layout 功能拆分前台與後台的頁首頁尾區塊

- 前台 index.vue 與 about.vue 頁面皆使用 default.vue 模板 ( 預設 Layout ）
- 後台 admin/index.vue 與 admin/order.vue 頁面皆使用 admin.vue 模板 ( 具名 Layout )

<br/>

# Day 4 - 使用指令建立元件

## 建立元件

可以使用 `npx nuxi add component 元件名稱` 指令建立元件。  
在檔案目錄中會新建立放置元件的 components 資料夾。

## 使用元件

在 Vite 、 Vue CLI 與 Nuxt2 ，都必須要使用 import 匯入元件

```html
<script setup>
  import Card from "@/components/Card.vue";
</script>

<template>
  <h1>首頁</h1>
  <Card />
</template>
```
Nuxt3 提供了 **Auto Imports**  功能  
放在 components  資料夾內的元件都可以直接在 `<template></template>` 載入，不再需要使用 import 語法，可以直接在任何元件、頁面使用元件的名稱。

```html
<template>
  <h1>首頁</h1>
  <Card />
</template>
```
在 Nuxt3 也可以不使用 **Auto Imports**  功能載入元件，使用 import 語法也是可以的
```html
<script setup>
  import Card from '@/components/Card.vue';
  // import { Card } from '#components'; 

  // Nuxt3  Direct Imports 語法
  // https://nuxt.com/docs/guide/directory-structure/components#direct-imports
</script>

<template>
  <h1>首頁</h1>
  <Card />
</template>
```

## 使用資料夾管理元件

若想要將頁面中的區塊拆分成元件進行管理，可以在 components  資料夾中建立**對應的頁面資料夾**來管理元件。  
使用資料夾管理元件，將元件自動載入需要在元件加入資料夾的名稱 ( 大駝峰 ) 。  
例如 `<HomeBanner />` 會從 components 資料夾中載入 home/banner.vue。

### 再更細部拆分元件
再更進一步，可以把元件內的內容拆分出來。  
以 banner.vue 為例，.banner-title 、.banner-subtitle、.banner-button，可以拆分成：  
- home/banner/Title.vue
- home/banner/Subtitle.vue
- home/banner/Button.vue
- home/banner/index.vue  --- 進入點  

在 index.vue **進入點**中，使用資料夾的路徑 ( 大駝峰 )  載入  `<HomeBannerTitle />`、`<HomeBannerSubTitle />`、`<HomeBannerButton />` 。

## 關於 Auto Imports 功能

Auto Imports 可以自動載入以下功能，不需明確地匯入 :  

- 自己建立的元件 ( components/ 目錄 )。( [文件](https://nuxt.com/docs/guide/directory-structure/components) )
- Nuxt3 內建的元件 ，例如 `<NuxtPage />` 。 ( [文件](https://nuxt.com/docs/api/components/nuxt-page) )
- Vue Composables ( composables/  目錄 )。 ( [文件](https://vuejs.org/guide/reusability/composables) )
- Nuxt3 內建的 Composables ，例如  **useFetch() 。** (  [文件](https://nuxt.com/docs/api/composables/use-fetch) )
- 自己建立的工具函數 ( utils/ 目錄 )。  ( [文件](https://nuxt.com/docs/guide/directory-structure/utils) )
- Vue API ( 例如 生命週期 Hook、 ref() 、reactive 、computed  …等 ) 。

 components/ 、composables/、utils/  三個目錄是 Nuxt3 固定的目錄結構。關於 Auto Imports ，可以閱讀官方文件 : https://nuxt.com/docs/guide/concepts/auto-imports

## **元件預設的 Auto Imports 設定**

根據 [官方文件](https://nuxt.com/docs/api/nuxt-config#components)， **預設會掃描** "~/components/global" 與 "~/components" 資料夾，將 "~/components/global" 路徑下的元件**全域註冊**。而 "~/components" 路徑下的元件則會是區域註冊。

```jsx
default defineNuxtConfig({
  components: {
    dirs: [
      {
        path: "~/components/global",  
        global: true,  // 全域註冊
      },
      "~/components",  // 區域註冊
    ],
  },
});
```

若要禁用元件的 **Auto Imports** ，可以在 nuxt.config.ts 將 components.dirs 設定為空陣列 

```jsx
export default defineNuxtConfig({
  components: {
    dirs: []
  }
})
```

<br>