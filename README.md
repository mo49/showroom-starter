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
  - public/に出力したファイルを見たい場合は、publicファルダまで移動して`npm run public`でローカルサーバーを立ち上げます。`http://localhost:9000/`にアクセスすると表示されます。

## ページを追加する方法

### HTML

`src/pug/page/`に`${page_name}.pug`を追加します。

### CSS/JS

webpackのエントリーポイントを追加することでCSS/JSファイルを増やすことはできますが、ページごとに別々のCSS/JSファイルを読み込む仕様ではありません。  

## 多重階層のサイトを作る場合

サイトのルートディレクトリではなく、サブディレクトリに配置するサイトを作成する場合は、ファイルのパス設定を変更する必要があります。  
たとえば`http://example.com/sub/`というサイト構成ならば、`src/constants.yml`を以下のように変更します。

```yml
SUB_DIR: sub
```

さらにpublic直下にsubフォルダを作成し、imgフォルダをsubフォルダ内に移動させます。


## 使用言語

- HTMLテンプレート：[pug](https://pugjs.org/api/getting-started.html)
- CSSメタ言語：[Sass(SCSS)](http://sass-lang.com/)
- JavaScript：[ES2015](https://babeljs.io/docs/en/learn)

## 依存ライブラリ

- [Babel](https://babeljs.io/)
- [webpack](https://webpack.js.org/)
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
- [PostCSS](https://postcss.org/)

## 参考リポジトリ

- https://github.com/google/web-starter-kit
- https://github.com/Microsoft/TypeScript-Vue-Starter
- https://github.com/kayac/kayac-html5-starter
- https://github.com/nyawach/vue-ts-hmr-starter