@AGENTS.md

# CLAUDE.md

このリポジトリで作業する際のガイダンス。

## 概要

メンズ専門美容室「SENSE」の LP。Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 で構築されたフロントエンド単体プロジェクト。サーバ API やデータベースは持たない。

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router, Turbopack)
- **言語**: TypeScript
- **スタイル**: Tailwind CSS v4 (`@import "tailwindcss"` のみ、`tailwind.config.*` なし)
- **フォント**: `next/font/google` で Inter (display) と Noto Sans JP (sans) を読み込み、CSS 変数 `--font-inter` / `--font-noto-jp` 経由で参照
- **アイコン**: ライブラリ未導入。インライン SVG で個別実装

## ローカル開発

```bash
npm run dev       # http://localhost:3000
npm run build     # 静的エクスポート (out/) — basePath 付与
npm run lint
```

dev サーバを Claude 経由で起動する場合は `.claude/launch.json` 経由で `preview_start`(Bash で直接起動するより安全)。

## デプロイ構成 (重要)

このリポジトリは **Vercel と GitHub Pages の両方に同時デプロイ**される。`next.config.ts` がビルド環境を判定して設定を切り替えているので、`basePath` 周りを触る前に必ず仕組みを把握すること。

| 環境 | URL | 設定 |
|---|---|---|
| Vercel | https://sense-lp.vercel.app/ | `VERCEL=1` を検知 → basePath なし、Image 最適化あり、SSR 可 |
| GitHub Pages | https://junjunjun0415.github.io/sense-lp/ | `output: 'export'` + `basePath: '/sense-lp'` で静的書き出し |

### CI

- `.github/workflows/deploy.yml` — main push で `npm run build` → `out/` を `actions/deploy-pages` で公開
- Vercel は GitHub 連携で自動デプロイ(設定は Vercel 側)

### basePath を扱う際の注意

GitHub Pages では `basePath: '/sense-lp'` がパスに付くため:

- **クロスページリンクは必ず `next/link` を使う**(basePath を自動付与)。`<a href="/company">` は GH Pages 側で 404 になる
- セクション内のアンカー(`#concept` など)は `<a>` のままで OK
- 画像など `/public` の絶対パスを直書きする場合は要注意。`next/image` 経由なら自動付与される

## アーキテクチャ

### ページ構成

```
src/app/
├── layout.tsx          # html lang="ja", フォント読み込み, 黒背景デフォルト
├── page.tsx            # トップ。各セクションを並べるだけ
├── globals.css         # Tailwind v4 + CSS変数 (--accent, --font-*)
└── company/page.tsx    # 会社概要(下層ページ)
```

### コンポーネント

```
src/components/
├── PageHeader.tsx              # 下層ページ用 sticky ヘッダー
└── sections/
    ├── HeroSection.tsx         # ヒーロー(独自ヘッダー内蔵)
    ├── SectionLabel.tsx        # 全セクション共通の見出し (英字 + 和字)
    ├── ConceptSection.tsx
    ├── PointsSection.tsx
    ├── MenuSection.tsx
    ├── StylistSection.tsx
    ├── GallerySection.tsx
    ├── SalonInfoSection.tsx
    └── Footer.tsx
```

新しいセクションを追加する際は `SectionLabel` を冒頭に置き、`page.tsx` の並びに追加する。

## デザインシステム

- **配色**: 黒背景 (`bg-black` / `bg-zinc-950`) + ライムイエローアクセント (`--accent: #e8ff3b`、Tailwind では `bg-accent` / `text-accent`)
- **タイポ**:
  - 見出し英字: `font-display` (Inter Black) — 巨大装飾文字に多用
  - 和文: `font-sans` (Noto Sans JP)
  - 微小な英字ラベル: `tracking-[0.3em]` 〜 `tracking-[0.4em]` の wide tracking が定型
- **装飾英字**: 各セクションに `position: absolute` の薄い巨大文字(opacity 0.04〜0.05)を背景装飾として配置するのが定型パターン
- **画像**: 仮ビジュアルは CSS グラデーション + 中央のラベル文字 + 黄色のアクセントブロックで構成。差し替える場合は `/public/` に置いて `<img>` または `next/image` で参照

## 仮データ

スタイリスト名・価格・住所・電話番号などはすべて**仮**。実データに差し替える場合は各セクションの上部にある配列定数(`stylists`, `menus`, `companyInfo`, `history`, `businesses` など)を編集する。

## 注意事項

- `.claude/` はローカルツール設定用に `.gitignore` 済み
- `node_modules` は当然コミットしないが、`package-lock.json` はコミットする(`npm ci` を CI で使うため)
- 本番ビルド (`npm run build`) は GitHub Pages 用設定が走る。Vercel と同じ挙動を確認したい場合は `VERCEL=1 npm run build` を実行
