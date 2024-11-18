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

Nuxt3 提供了 **Auto Imports** 功能  
放在 components 資料夾內的元件都可以直接在 `<template></template>` 載入，不再需要使用 import 語法，可以直接在任何元件、頁面使用元件的名稱。

```html
<template>
  <h1>首頁</h1>
  <Card />
</template>
```

在 Nuxt3 也可以不使用 **Auto Imports** 功能載入元件，使用 import 語法也是可以的

```html
<script setup>
  import Card from "@/components/Card.vue";
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

若想要將頁面中的區塊拆分成元件進行管理，可以在 components 資料夾中建立**對應的頁面資料夾**來管理元件。  
使用資料夾管理元件，將元件自動載入需要在元件加入資料夾的名稱 ( 大駝峰 ) 。  
例如 `<HomeBanner />` 會從 components 資料夾中載入 home/banner.vue。

### 再更細部拆分元件

再更進一步，可以把元件內的內容拆分出來。  
以 banner.vue 為例，.banner-title 、.banner-subtitle、.banner-button，可以拆分成：

- home/banner/Title.vue
- home/banner/Subtitle.vue
- home/banner/Button.vue
- home/banner/index.vue --- 進入點

在 index.vue **進入點**中，使用資料夾的路徑 ( 大駝峰 ) 載入 `<HomeBannerTitle />`、`<HomeBannerSubTitle />`、`<HomeBannerButton />` 。

## 關於 Auto Imports 功能

Auto Imports 可以自動載入以下功能，不需明確地匯入 :

- 自己建立的元件 ( components/ 目錄 )。( [文件](https://nuxt.com/docs/guide/directory-structure/components) )
- Nuxt3 內建的元件 ，例如 `<NuxtPage />` 。 ( [文件](https://nuxt.com/docs/api/components/nuxt-page) )
- Vue Composables ( composables/ 目錄 )。 ( [文件](https://vuejs.org/guide/reusability/composables) )
- Nuxt3 內建的 Composables ，例如 **useFetch() 。** ( [文件](https://nuxt.com/docs/api/composables/use-fetch) )
- 自己建立的工具函數 ( utils/ 目錄 )。 ( [文件](https://nuxt.com/docs/guide/directory-structure/utils) )
- Vue API ( 例如 生命週期 Hook、 ref() 、reactive 、computed …等 ) 。

components/ 、composables/、utils/ 三個目錄是 Nuxt3 固定的目錄結構。關於 Auto Imports ，可以閱讀官方文件 : https://nuxt.com/docs/guide/concepts/auto-imports

## **元件預設的 Auto Imports 設定**

根據 [官方文件](https://nuxt.com/docs/api/nuxt-config#components)， **預設會掃描** `~/components/global` 與 `~/components` 資料夾，將 `~/components/global` 路徑下的元件**全域註冊**。而 `~/components` 路徑下的元件則會是區域註冊。

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
    dirs: [],
  },
});
```

### 練習

建立卡片元件，並進行細部拆分。

<br/>

# Day 5 - 使用指令建立 Composables

## 建立 Composables

```
npx nuxi add composable <composable-name>
```

在檔案目錄中會新建立放置組合函數的 composables 資料夾，例如輸入指令 `npx nuxi add composable useCounter` 會建立 composables/useCounter.ts 並生成預設格式

## 在 composable 中使用 Vue API

因為 Nuxt3 會自動導入 ( Auto Imports ) Vue API，所以使用 ref() 、 reactive() 、生命週期等功能就不需要另外導入，直接調用即可。

```jsx
// composables/useCounter.ts

// import { ref } from 'vue';  <--- 因為有 Auto Imports ，所以不用 import ref
export function useCounter() {
  const count = ref(0);

  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  return {
    count,
    increment,
    decrement,
  };
}
```

## 使用 Composables

可以直接在 .js、.ts 和 .vue 中自動導入組合函數

```jsx
// index.vue
<script setup>
const { count, increment, decrement } = useCounter()
</script>

<template>
  <p>{{ count }}</p>
</template>
```

## 新增其他具有 Auto Imports 功能的 Composable

可以在 nuxt.config.ts 加入 imports.dirs 屬性，填入資料夾名稱。原本 `~/composables` 和 `~/utils` 目錄預設的 Auto Imports 不會被覆寫

```jsx
export default defineNuxtConfig({
  imports: {
    dirs: ["stores"],
  },
});
```

官方文件 : https://nuxt.com.cn/docs/api/nuxt-config#imports

### 練習

建立 composable，透過 AJAX 取得資料。

<br/>

# Day 6 - NuxtLink 與 路由基礎配置

## NuxtLink

在 Vite 與 Vue CLI 可以使用 `<RouterLink>` 建立導航至其他頁面的路由連結。

```html
<!-- app.vue -->
<template>
  <!-- 使用 RouterLink 導航至 首頁 頁面 ( 路徑 / ) -->
  <!-- 編譯成 : <a href="/">首頁</a>-->
  <RouterLink to="/">首頁</RouterLink>

  <!-- 使用 RouterLink 導航至 關於 頁面  ( 路徑 /about ) -->
  <!-- 編譯成 : <a href="/about">關於</a>-->
  <RouterLink to="/about">關於</RouterLink>
</template>
```

而在 Nuxt 則是會使用 `<NuxtLink>` 取代 `<RouterLink>` 元件實作頁面換頁的連結。

```html
<!-- app.vue -->
<template>
  <h2>NuxtLink 基礎用法</h2>
  <ul class="list">
    <li>
      <!-- 使用 NuxtLink 導航至 首頁 頁面 ( 路徑 / ) -->
      <!-- 編譯成 : <a href="/">首頁</a>-->
      <NuxtLink to="/">首頁</NuxtLink>
    </li>
    <li>
      <!-- 使用 NuxtLink 導航至 關於 頁面  ( 路徑 /about ) -->
      <!-- 編譯成 : <a href="/about">關於</a>-->
      <NuxtLink to="/about">關於</NuxtLink>
    </li>
  </ul>
</template>
```

它繼承了 `<RouterLink>` 的所有屬性並提供了額外的功能，例如: `external` 、`target` 屬性 …等。除此之外，與 `<RouterLink>` 相同， `<NuxtLink>` 也會被編譯為 HTML a 標籤。

以下將對 `<NuxtLink>` 的 `target` 與 `external` 屬性進行解說，其他屬性可以至 [官方文件](https://nuxt.com/docs/api/components/nuxt-link#nuxtlink) 查詢

### 1 - target

`target` 屬性用於控制連結點擊後的打開方式，其行為與值跟 HTML a 標籤的 [target 屬性](https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/a#target) 相同。

允許的值 :

- **`_self`**（預設）：在當前瀏覽器視窗打開連結。
- **`_blank`**：在新頁籤打開連結。
- **`_parent`**：在上一層父層視窗打開連結。
- **`_top`**：在最頂層父層視窗打開連結。

```html
<!-- app.vue -->
<template>
  <ul class="list">
    <li>
      <!-- 使用 target 屬性打開新頁籤 -->
      <NuxtLink to="/about" target="_blank"
        >關於 ( 使用 <code>target="_blank"</code> )</NuxtLink
      >
    </li>
  </ul>
</template>
```

### 2 - external

`external`會將 `<NuxtLink>` 識別為外部連結，強制渲染成 HTML a 標籤而不是 `<RouterLink>`。

在設定 `external`屬性之後就不能再使用以下 “**繼承自 `<RouterLink>` 的所有屬性” 。這些屬性都依賴於 Vue Router** 管理狀態 ， **但** `<NuxtLink>` **加入** `external`之後會被 Vue Router 忽略，狀態會改由瀏覽器管理 ，不會由 **Vue Router 管理 :**

- exactActiveClass
- replace
- ariaCurrentValue
- activeClass

```html
<!-- app.vue -->
<template>
  <ul class="list">
    <li>
      <!-- 使用 external 屬性在 NuxtLink 中打開外部連結 -->
      <NuxtLink to="https://www.google.com/" external
        >google ( 外部連結 )</NuxtLink
      >
    </li>
    <li>
      <!-- 加入 external 之後 replace 、activeClass 會被忽略 -->
      <NuxtLink
        to="https://www.google.com/"
        external
        replace
        activeClass="active"
      >
        google ( 外部連結；<code>replace </code>、<code>activeClass</code>
        屬性失效)
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
  .active {
    color: red;
  }
</style>
```

### 繼承自 RouterLink 的屬性

使用 `<NuxtLink>` 時，如果不同時使用 external 屬性，所有繼承自 RouterLink 的屬性，都會與在 Vue Router 中的使用方式完全一致。例如 `to`、`replace`、`activeClass`…等。

> When not using **`external`**, **`<NuxtLink>`** supports all Vue Router's [RouterLink props](https://router.vuejs.org/api/interfaces/RouterLinkProps.html) -取自 [官方文件](https://nuxt.com/docs/api/components/nuxt-link#routerlink)

```html
<!-- app.vue -->
<template>
  <!-- 使用 to 屬性指定導航路徑 -->
  <NuxtLink to="/">首頁</NuxtLink>

  <!-- 使用 replace 屬性，不在瀏覽器留下新的歷史紀錄 -->
  <NuxtLink to="/about" replace>關於</NuxtLink>

  <!-- 使用 activeClass 屬性設定與目前路由配對的 CSS 樣式 -->
  <NuxtLink to="/contact" activeClass="active">聯絡</NuxtLink>
</template>
```

### 修改 linkActiveClass 與 linkExactActiveClass 的預設值

`<NuxtLink>` 的 `linkActiveClass`與 `linkExactActiveClass`屬性的運作與預設值和 Vue Router 相同，預設值分別為 '`router-link-active`’ 與 '`router-link-exact-active`’。

如果希望自定義這些屬性並調整應用到連結上的 class 名稱，可以參照 Nuxt3 [Router Options](https://nuxt.com/docs/guide/recipes/custom-routing#router-options) 的方法在 `nuxt.config.ts` 中使用 `router.options` 來設定 `linkActiveClass` 及`linkExactActiveClass`。

例如，如果希望路由 URL 與頁面連結相符時套用 `.active`class，可以進行以下設定

```jsx
// nuxt.config.ts
export default defineNuxtConfig({
  router: {
    options: {
      linkActiveClass: "active",
      linkExactActiveClass: "active",
    },
  },
});
```

這樣一來，當頁面渲染後，符合條件的連結的 `<a>` 標籤將會套用 `.active` class：

```html
<template>
  <!-- 當 URL 為 /about 時，實際在網頁上的內容會渲染成: -->
  <!-- <a href="/about" class="active">關於</a> -->
  <NuxtLink to="/about">關於</NuxtLink>
</template>
```

## 建立基礎路由結構

在 Day1 的題目練習中，我們有用指令在 pages 資料夾中新增 `index.vue` ，然後在 `app.vue` 以 `<NuxtPage />` 顯示新增的頁面。

“在 pages 資料夾中新增 index.vue” 這一步其實就是在使用 Nuxt 提供的路由功能，透過 `pages/` 資料夾來為個每個頁面元件建立路由。並且在預設情境下，`pages/index.vue` 會對應到路由的 `/` 路徑。

### Nuxt pages 資料夾路由功能的特點

在使用 pages 資料夾之後就不需要明確地在路由表定義路由物件格式與屬性，包括 `path` 、`component`、`name` 、`children` … 等。 嵌套式路由 ( 巢狀路由 ) 與動態路由也是一併使用資料夾管理，不需再額外寫路由表。

`pages`資料夾定義的結構，經編譯會生成對應的的路由結構。

### 練習

新增頁面元件、設定 linkActiveClass

<br/>

# Day 7 - 嵌套式路由、 useRouter & useRoute

## 嵌套式路由

當頁面路由有多層級的頁面，例如一個主頁面下包含多個子頁面時，可以使用嵌套式路由在主要路由下建立多個子路由，以建立更直觀、清晰的 URL 結構。除此之外，若所有子頁面都有共用的區塊，可以在主頁面放入這些共用的元件，避免程式碼的重複。

關於在 Nuxt3 使用嵌套式路由可以閱讀 [官方文件](https://nuxt.com/docs/guide/directory-structure/pages#nested-routes) 。

### 資料夾結構

以 `product` 路由為例，來實作嵌套式路由。資料夾結構為：

```jsx
pages/
|-- product/
|   |-- productA.vue
|   |-- productB.vue
|   |-- index.vue
|
|-- product.vue
|-- index.vue
```

`pages/product.vue`

- 作為主要的產品頁面，也作為嵌套路由的主容器。需要使用 `<NuxtPage />` 來顯示嵌套式路由頁面的內容，並加入 `<NuxtLink>` 元件提供導航連結。
- 當切換到 `/product/productA` 或 `/product/productB` 時，對應的頁面內容將被渲染到 `<NuxtPage />` 元件所在的位置。
- 在這一頁面的其他區塊，將作為所有子頁面共用的區塊，在切換到 `/product/productA` 或 `/product/productB` 時，共用的區塊也都會被渲染。

`pages/product` 資料夾

- 這個資料夾將用來放置產品頁面的子路由，例如產品內頁和產品列表頁。

`pages/product/productA.vue` 與 `pages/product/productB.vue`

- 作為要在產品頁面下實作的嵌套式路由。

## 在 Nuxt3 使用路由方法與屬性

Nuxt3 將 `vue-router` 的功能整合進 Composables，其運作行為與 `vue-router` 相同。因此在 `pages/` 資料夾**的**頁面元件中可以使用 Composition API 的路由寫法 `useRouter()` 與 `useRoute()` 來使用路由。

### useRoute

`useRoute` 用於取得目前路由的詳細資訊，包括路由參數、查詢參數、路由名稱等。以上方範例的 `pages/product/productA.vue` 為例，以下使用 `useRoute` 來獲取不同的路由資訊：

```html
<!-- pages/product/productA.vue -->
<script setup>
  // Auto Imports
  const route = useRoute();

  // 獲取路由中的查詢參數
  // 例如 : 路由路徑為 /product/productA ， route.query 為空物件
  // 例如 : 路由路徑為 /product/productA?q=產品名稱 ， route.query 為 { q:'產品名稱' }
  console.log(route.query);

  // 獲取包含路由路徑 ( path ) 、查詢參數 ( query ) 和 hash 的完整 URL
  console.log(route.fullPath);

  // 獲取路由的唯一名稱 ( name ) ，會以 pages 資料夾結構來命名，以 productA.vue 來說會是  product-productA
  console.log(route.name);
</script>

<template>
  <h2>產品內頁 productA</h2>
</template>

<style scoped></style>
```

其他關於 `useRoute` 屬性的內容可以閱讀 [Nuxt3 文件](https://nuxt.com/docs/api/composables/use-route) 以及 [vue-router 文件](https://router.vuejs.org/api/interfaces/RouteLocationNormalizedLoadedTyped.html#Properties)

### useRouter

`useRouter` 提供操作路由的方法，包括導航到不同的頁面、替換當前路由等。

- `router.push('/product/productA')`  
  在換頁的同時調用 history.pushState()，將 URL `/product/productA` 加入到瀏覽器的歷史紀錄中  
  [history.pushState() 參考資料](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState)

- `router.replace('/product/productB')`  
  在換頁的同時調用 history.replaceState()，將瀏覽器最後一筆的歷史紀錄修改成 `/product/productB`  
  [history.replaceState() 參考資料](https://developer.mozilla.org/zh-CN/docs/Web/API/History/replaceState)

- `router.go(1)`  
  在換頁的同時調用 history.go()，根據傳入的參數在瀏覽器歷史紀錄中移動，傳入 -1 移動到前一頁， 1 則移動到下一頁

其他關於 `useRouter` 屬性的內容可以閱讀 [Nuxt3 文件](https://nuxt.com/docs/api/composables/use-router) 以及 [vue-router 文件](https://router.vuejs.org/api/interfaces/Router.html#Methods)

### 練習

建立嵌套式路由，練習使用 useRouter 進行換頁、使用 useRoute 取得網頁資訊。

<br/>

# Day 8 - 動態路由與 404 錯誤頁面處理

## 動態路由

在嵌套式路由的範例中，使用了靜態路由來處理 `productA.vue` 和 `productB.vue` 的結構，每個產品內頁都對應一個元件，如果這些元件中有大量程式碼重複，會導致代碼冗餘和維護困難。

為了解決這個問題，可以改成使用**動態路由**。動態路由通過 URL 參數來控制頁面顯示，不需為每個產品建立元件。如此一來就只需要用一個共用的元件，根據 URL 參數變化來顯示對應的產品內容。

### 建立方式

1. 使用中括號 `[ ]` 來命名動態路由，並在中括號內填入動態路由的名稱。  
   以 `/pages/product/productA.vue` 與 `/pages/product/productB.vue` 這兩支檔案為例，可以將它們合併為 `product/[id].vue` ，其中 `id` 為動態路由的名稱，後續取得動態路由的資訊將會使用到 `id` 這個名稱。

2. 在 `product/[id].vue` 可以使用路由 `useRoute()` 方法的 `params` 屬性，以動態路由的名稱 `id` 取得動態的 URL 參數。  
   例如進入 `/product/productA` 路徑可以在 `[id].vue` 中使用 `params.id` 來取得路由的 `productA` 字串。

```html
<!-- /pages/product/[id].vue -->

<script setup>
  // Auto Imports
  const route = useRoute();

  // 獲取路由中的動態參數
  // 例如 : 路由路徑為 /product/productA ， route.params 為 { id: 'productA'}
  // { id: 'productA'}
  console.log(route.params);
</script>

<template>
  <h2>產品內頁 {{ route.params.id }}</h2>
</template>

<style scoped></style>
```

## 404 錯誤頁面

### 匹配所有層級的路由

在 Nuxt3 中，`[...slug].vue` 用於匹配特定路徑下所有層級的路由。當 URL 沒有匹配到相對應的路由時，會被 [...slug].vue 捕捉。  
以下方的路由結構為例，`/pages/product/[...slug].vue` 會匹配 `/product` 路徑下的所有路由。如果 URL 為 `/product/productA/info`，由於沒有匹配到對應的 .vue 檔案，因此會匹配到 `/pages/product/[...slug].vue`。

```jsx
/pages
  ├── product
  │   ├── [id].vue
  │   ├── index.vue
  │   └── [...slug].vue
  ├── index.vue
  └── product.vue
```

`/pages/product/[...slug].vue` 檔案內容如下。進入 `[...slug].vue` 之後，可以通過 `route.params` 獲取動態路由參數 `slug` 的值。`slug` 參數是一個陣列，表示路徑中的每一層。例如對於　`/product/productA/info` 路徑，`route.params.slug` 的值為 `[ "productA", "info" ]`。

```html
<!-- /pages/product/[...slug].vue -->
<script setup>
  const route = useRoute();
</script>

<template>
  <p>匹配到的 Params:{{ route.params.slug }}</p>
  <p>每個陣列元素對應一個層級</p>
</template>
```

關於更多 `[...slug].vue` 的資訊可以閱讀官方文件 : [**Catch-all Route**](https://nuxt.com/docs/guide/directory-structure/pages#catch-all-route)

### 建立 404 Not Found 頁面

理解了 `[...slug].vue` 的作用後，我們可以利用它來實作全站的 404 頁面。只需在 `./pages` 目錄下建立 `[...slug].vue`，並使用 `setResponseStatus()` 設定 HTTP 404 狀態碼。這樣，所有未匹配到的路由請求都將由此頁面處理。

```html
<!-- /pages/[...slug].vue -->
<script setup>
  const route = useRoute();
  const event = useRequestEvent(); // 獲取當前請求的事件

  // 設定 HTTP 404 狀態碼
  setResponseStatus(event, 404);
</script>

<template>
  <h1>404 Not Found</h1>
  <p>你所請求的頁面：{{ route.params.slug.join('/') }}，不存在。</p>
</template>

<style scoped>
  h1 {
    color: red;
    text-align: center;
  }
  p {
    text-align: center;
  }
</style>
```

### 練習

建立動態路由、404 錯誤頁面。
