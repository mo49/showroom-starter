## 動作確認

macOS High Sierra 10.13.6

## 環境構築

- node.js
    - version8.12.0以上。随時`.node-version`を確認。

- node_modules

```
yarn
```
もしくは
```
npm install
```

## 開発手順

- `npm run start` / `yarn start`
    - ローカル開発環境ブラウザの立ち上げ、自動でビルド・リロードを行います。基本的にはこちらのコマンドだけで開発ができます。

- `npm run build` / `yarn build`
    - productionモードの最適化された状態でビルドします。`webpack-dev-server`コマンドでは開発用サーバー上でファイルを展開しているだけなので、実ファイルを取得する場合はビルドする必要があります。

## 使用言語

- HTMLテンプレート：[pug](https://pugjs.org/api/getting-started.html)
- JavaScript：[ES2015](https://babeljs.io/docs/en/learn)

## 依存ライブラリ

- [Babel](https://babeljs.io/)
- [webpack](https://webpack.js.org/)
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)