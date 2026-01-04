# portfolio2 → Astro（静的サイト）移行 作業指示書（レポート）

対象リポジトリ  
https://github.com/Naoya-Yasuda/portfolio2

作成日（JST）: 2026-01-04

---

## 0. 目的 / 背景

### 目的
- **静的中心（作品紹介 / 経歴 / リンク）**のポートフォリオを、最新のフロントエンド構成へ刷新し、**Node/依存関係の古さで動かなくなる事故をなくす**。
- 現状のデザインや情報設計は極力維持しつつ、**ビルド＆デプロイを安定化**させる。

### 背景（現状の課題）
- 現在の構成は Vue 2 + Vue CLI（webpack）系で、Node の更新や依存の更新で破綻しやすい。
- **Vue 2 は 2023-12-31 にEOL（終了）**となっており、新規開発としてはリスクが高い。
- **Vue CLI はメンテナンスモード**で、新規は Vite 系推奨。

---

## 1. 現状分析（package.json から読み取れること）

### 主要スタック
- Vue: `^2.6.11`（Vue 2）
- Vue CLI: `@vue/cli-service 5.0.8` だが、プラグインは `~4.3.0` が混在
- webpack: `^4.43.0`
- sass / sass-loader / css-loader / style-loader 等

### 依存の特徴
- UI: FontAwesome（`@fortawesome/*`）
- スクロール: `vue-smoothscroll`
- パーティクル: `vue-particles`（※ devDependencies にあるが、実行時に使うなら dependencies に置くべき。現状のままでも動いていたなら、どこかで CDN or 直接読み込み等の可能性あり）
- PDFコピー: `copy:pdf` が `docs/img` へ PDF をコピーする（GitHub Pages を docs/ で配信していた可能性）

### ここが詰まりポイントになりやすい
- Vue CLI + webpack4 は、Node の世代が上がるほど破綻しやすい（依存の互換が厳しい）
- `@vue/cli-plugin-*` の 4.x と `@vue/cli-service` の 5.x 混在は不安定要因

---

## 2. 移行方針（結論）

### 推奨：Astro（静的生成）へ移行し、Vue 依存を段階的に除去
**静的中心のポートフォリオ**なら、Astro の「HTML主体 + 必要箇所だけJS」という思想が合う。

#### なぜ Astro か（このプロジェクト視点）
- サーバー機能やAPIを持たないなら、**静的サイトは攻撃面が小さい**（運用も軽い）
- webpack を捨てて、**Vite ベースのエコシステム**に寄せられる
- GitHub Pages との相性が良い（公式ガイドあり）

### 注意：Astro の公式 Vue 統合は「Vue 3 コンポーネント向け」
Astro の `@astrojs/vue` は **Vue 3 コンポーネントのSSR/ハイドレーション**を対象にしているため、
Vue 2 のコンポーネントを「そのまま」持ち込む方針はおすすめしない。

#### そのための現実的な進め方（おすすめ順）
1. **まずは“Vueを使わず”に Astro の `.astro` / HTML / CSS に移植**（最短で安定）
2. どうしても動的UIが必要なら、**小さな islands を素のJS**で足す  
   - 例：スムーススクロール、パーティクル表示、モーダル等
3. もし Vue コンポーネント資産が大きく残したい場合は、先に **Vue 3 に上げてから** Astro へ統合（ただし作業量は増える）

---

## 3. ゴール（Definition of Done）

- [ ] `npm run dev` でローカル起動できる
- [ ] `npm run build` が成功し、成果物が `dist/`（または `docs/`）に生成される
- [ ] GitHub Pages で公開URL（`https://<user>.github.io/portfolio2/` 想定）から表示できる
- [ ] 既存の見た目（主要セクション、フォント、配色、画像、PDFリンク）が維持される
- [ ] ルーティング（複数ページがある場合）は同等に動く
- [ ] “必要な動き”だけがJSで動く（不要な巨大バンドルを避ける）

---

## 4. 作業手順（フェーズ別）

### Phase A：ブランチ戦略 & 退避
1. 移行用ブランチ作成
```bash
git checkout -b migrate/astro
```
- `git` = バージョン管理ツール
- `checkout` = ブランチ/コミットを切り替える
- `-b` = new branch（新しいブランチを作って切り替える）

2. 旧ビルド成果物がコミットされている場合の整理方針を決める
- 既存に `docs/` があるので、Pages が `docs/` を参照している可能性がある  
  → 後述の Phase E で「Actionsに寄せる」か「docs出力継続」か決める

---

### Phase B：Astro プロジェクトを導入（新土台）
> 以降は「ルートをAstroに置き換える」前提。旧Vueはブランチ/タグで残す。

1. Astro 初期化（リポジトリ直下で）
```bash
npm create astro@latest
```
- `npm` = Node Package Manager
- `create` = 雛形生成
- `astro@latest` = Astro の最新テンプレート

2. 依存インストール
```bash
npm install
```
- `install` = 依存関係をインストール

3. 開発起動
```bash
npm run dev
```
- `run` = package.json の scripts を実行
- `dev` = 開発サーバー（ホットリロード）

---

### Phase C：静的資産の移植（画像/PDF/CSS）
1. 画像やPDFの置き場所を整理
- Astro は `public/` 配下のファイルを **そのまま**公開パス `/` に出す
- 既存の `src/assets/...` から参照している画像は、次のどちらかに寄せる
  - (推奨) `public/img/...` に寄せて、参照も `/img/...` に統一
  - もしくは Astro の `src/assets/` と import で管理（ただし移行初期は public が楽）

2. PDF（既存 `copy:pdf` の置換）
- 旧：`cp src/assets/images/portfolios/MDXQ2023_slide.pdf docs/img`
- 新（推奨）：PDFを `public/img/MDXQ2023_slide.pdf` に置く（コピー不要にする）
  - 参照URLは `/img/MDXQ2023_slide.pdf`

※ `cp` は copy（コピー）コマンド  
- `cp <src> <dst>` の形式でファイルをコピーする（Linux/macOS共通）

---

### Phase D：ページ構造を Astro に写す（最重要）
1. レイアウト作成
- `src/layouts/BaseLayout.astro` を作り、`<head>`, 共通ヘッダ/フッタ、CSS読み込みを集約
2. ページを作る
- `src/pages/index.astro` に、旧サイトの構造（Hero / Works / About / Links 等）を移植
- もし Vue Router で複数ページなら：
  - `src/pages/works.astro`
  - `src/pages/about.astro`
  - のようにファイルを増やす

3. コンポーネント分割
- `src/components/` に、セクション単位の `.astro` コンポーネントを作って切り出す
  - 例：`WorksSection.astro`, `ProfileSection.astro`, `Footer.astro`

---

### Phase E：GitHub Pages 公開（2パターン）

#### パターン1（推奨）：GitHub Actions で Pages にデプロイ
- Astro公式の「GitHub Pages へのデプロイガイド」に沿う
- メリット：ローカル環境差分が消える、運用が安定

必須設定（`astro.config.mjs`）
- `site`: `https://<GitHubユーザー名>.github.io`
- `base`: `/portfolio2/`（リポジトリ名）

> base を入れないと、CSS/JSのパスがズレて表示が崩れやすい。

#### パターン2：従来どおり `docs/` 出力を使う（互換重視）
- GitHub Pages の設定が「main ブランチ /docs」を見ている場合に合わせる
- Astro は `outDir` を `./docs` にできるので、出力先を合わせられる

`astro.config.mjs` で例：
- `outDir: './docs'`

※ただし、`docs/` に古い成果物が残る運用は事故が起きやすいので、可能ならパターン1へ寄せる

---

### Phase F：動的要素（スムーススクロール/パーティクル）を置換
現状依存：
- `vue-smoothscroll`
- `vue-particles`

Astro移行後は、Vueプラグインに依存せず、次の方針で置換するのが安全。

1. スムーススクロール
- CSS の `scroll-behavior: smooth;` で足りるならそれで終わり（最軽量）
- 追加制御が必要なら小さな JS を `src/scripts/` 等に置き、クリック時に `element.scrollIntoView({ behavior: 'smooth' })` を使う

2. パーティクル
- ライブラリに依存する場合でも「クライアントでだけ動く」ように分離（islands的に読み込む）
- まずは “動かさなくても成立する” デザインに落とし込み → 後で追加、が手戻りが少ない

---

### Phase G：依存整理（セキュリティ/保守性）
- Vue 2 はEOLのため、原則として **新サイトでは排除**する
- 旧 `webpack`, `vue-cli-service`, `vue-template-compiler` などは Astro 移行後に不要
- FontAwesome はそのまま使える（AstroでもCDN or npm で可）

---

## 5. ファイル/ディレクトリ設計（推奨）

```
public/
  img/
    ...（画像）
    MDXQ2023_slide.pdf
src/
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    works.astro（必要なら）
  components/
    Header.astro
    WorksSection.astro
    ProfileSection.astro
    Footer.astro
  styles/
    global.scss（または global.css）
```

---

## 6. Claude Code に渡す “具体的タスク分割”（コピペ用）

### Task 1：現状の構造棚卸し
- `src/` を解析して、ページ構成（セクション/ルーティング）と、動的要素（particles/scroll等）の使用箇所を一覧化して。

### Task 2：Astro 雛形＋静的資産移植
- Astro を初期化し、`public/` に画像/PDFを移し、参照パスを `/img/...` に統一して。
- CSS を `src/styles/global.scss`（またはcss）として読み込むようにして、見た目の差分を最小化して。

### Task 3：ページ移植
- `src/pages/index.astro` を作り、旧サイトと同じセクション順に並べて。
- セクションは `src/components` に分割して、差分が見やすい構成にして。

### Task 4：GitHub Pages
- `astro.config.mjs` に `site` と `base: '/portfolio2/'` を設定して。
- GitHub Actions で build→deploy まで通して。

### Task 5：動的要素の置換
- スムーススクロールは CSS で可能ならそれで置換。
- particles は“なくても成立する”状態を先に作り、必要なら後で軽量実装を提案して。

---

## 7. 参考（一次情報）
※リンクはそのまま記載

- Vue 2 EOL: https://v2.vuejs.org/eol/
- Vue CLI Maintenance Mode: https://cli.vuejs.org/
- Vue Tooling（Vite推奨）: https://vuejs.org/guide/scaling-up/tooling
- Astro Vue integration（Vue 3向け）: https://docs.astro.build/en/guides/integrations-guide/vue/
- Astro config（base/outDir など）: https://docs.astro.build/en/reference/configuration-reference/
- Astro deploy GitHub Pages: https://docs.astro.build/en/guides/deploy/github/

---

## 8. 次に必要な情報（精度をさらに上げるため）
この指示書は package.json ベースで作っています。手戻りをさらに減らすため、以下のどれかを追加で共有すると良いです：

- `src/` 配下の構造（`src/components`, `src/assets`, `src/App.vue` の中身）
- Vue Router を使っているかどうか（`src/router` の有無）
- `vue.config.js` の内容（出力先が docs かどうか確定できる）

