# SENSE LP

メンズ専門美容室「SENSE」のランディングページ。

> ＃存在するなら進化しろ！

## 公開URL

| 環境 | URL |
|---|---|
| Vercel | https://sense-lp.vercel.app/ |
| GitHub Pages | https://junjunjun0415.github.io/sense-lp/ |

## 技術スタック

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- フォント: Inter / Noto Sans JP (`next/font/google`)

## セットアップ

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。

### スクリプト

| コマンド | 内容 |
|---|---|
| `npm run dev` | 開発サーバ起動 (Turbopack) |
| `npm run build` | 本番ビルド (GitHub Pages 用に静的エクスポート) |
| `npm run start` | ビルド済みアプリの起動 |
| `npm run lint` | ESLint |

## ディレクトリ構成

```
src/
├── app/
│   ├── layout.tsx          # ルートレイアウト (フォント・メタ)
│   ├── page.tsx            # トップページ (各セクションを並べるだけ)
│   ├── globals.css         # Tailwind + CSS 変数
│   └── company/page.tsx    # 会社概要ページ
└── components/
    ├── PageHeader.tsx      # 下層ページ用ヘッダー
    └── sections/
        ├── HeroSection.tsx
        ├── ConceptSection.tsx
        ├── PointsSection.tsx
        ├── MenuSection.tsx
        ├── StylistSection.tsx
        ├── GallerySection.tsx
        ├── SalonInfoSection.tsx
        ├── Footer.tsx
        └── SectionLabel.tsx
```

## デザインシステム

- ベース: 黒背景 (`bg-black` / `bg-zinc-950`)
- アクセント: ライムイエロー `#e8ff3b` (`bg-accent` / `text-accent`)
- 巨大装飾英字: `font-display` (Inter Black) を `text-white/[0.04]` 程度の薄さでセクション背景に配置
- 見出し: 英字ラベル + 和字大見出しの組み合わせ (`SectionLabel`)

新規セクションは `src/components/sections/` に追加し、`src/app/page.tsx` から並べてください。

## デプロイ

`main` ブランチに push すると、Vercel と GitHub Pages の両方が自動デプロイされます。

### マルチターゲット対応

`next.config.ts` でビルド環境を判定し、設定を切り替えています:

| 環境 | 判定 | 動作 |
|---|---|---|
| Vercel | `VERCEL=1` | basePath なし。Image 最適化を有効化 |
| GitHub Pages (CI) | それ以外の本番ビルド | `output: 'export'` + `basePath: '/sense-lp'` で静的書き出し |
| ローカル dev | `NODE_ENV=development` | basePath なし |

クロスページリンクには **必ず `next/link` を使用** してください(GitHub Pages の basePath を自動付与するため)。

### GitHub Pages のワークフロー

`.github/workflows/deploy.yml` が `npm run build` → `out/` を `actions/deploy-pages` 経由で公開します。

## ライセンス

Private project. All rights reserved.
