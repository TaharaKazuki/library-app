# ライブラリアプリ

## 概要

このプロジェクトは、Express.jsとTypeScriptを使用したライブラリ管理アプリケーションです。

## 開発環境のセットアップ

### 必要条件

- Node.js (v16以上)
- npm (v7以上)

### インストール

```bash
# 依存関係のインストール
npm install
```

### 開発サーバーの起動

```bash
# 開発モードでサーバーを起動
npm run dev
```

サーバーは http://localhost:3000 で起動します。

### ビルドと本番環境での実行

```bash
# プロジェクトのビルド
npm run build

# 本番環境でサーバーを起動
npm run start
```

## コード品質

このプロジェクトでは、以下のツールを使用してコード品質を維持しています：

- ESLint: コードの静的解析
- Prettier: コードフォーマット
- Husky & lint-staged: コミット前のコード品質チェック

### コマンド

```bash
# リントの実行
npm run lint

# リントの実行と自動修正
npm run lint:fix

# コードのフォーマット
npm run format
```

## エディタの設定

VSCodeを使用している場合は、以下の拡張機能をインストールすることをお勧めします：

- ESLint
- Prettier
- Code Spell Checker

これらの拡張機能は、`.vscode/extensions.json`ファイルに記載されています。

## ライセンス

ISC
