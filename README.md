# RandomPicker
くじ引きツール、という名のVueJSアプリケーションの習作。
`localStorage` に依存しているので `file://` なURLでは動作しない。

## 公開場所
GitHub Pages : [https://motooka.github.io/RandomPicker/](https://motooka.github.io/RandomPicker/)
gh-pagesで公開する都合上、ビルド成果物すなわち `/dist` ディレクトリ配下をリポジトリにコミットしてある。作業時、 `npm run build` または `npm run serve` してからcommitするのを忘れないように。

## 主な依存物
- NodeJS 14.17.2
- VueJS 3.1.x
	- [ドキュメント](https://v3.ja.vuejs.org/guide/introduction.html)
	- [3.1.1 リリースノート](https://github.com/vuejs/vue-next/blob/master/CHANGELOG.md#311-2021-06-07)
- TypeScript 4.3
- [Webpack](https://webpack.js.org/) : ビルド時にお世話になってる
- [Webpack DevServer](https://webpack.js.org/configuration/dev-server/) : ローカル開発環境でお世話になってる

## ローカル開発環境の開始と終了
- 初期構築 : `npm install`
- ビルド : `npm run build`
	- その結果、 `dist` ディレクトリに成果物が入る。
- ビルドした結果を [http://localhost:20080/](http://localhost:20080/) で動作させる :
	- 起動 : `npm run serve`
	- 終了 : Ctrl-C
	- このコマンドではビルドしないことには注意
	- ポート番号を変えるには [webpack.config.js](./webpack.config.js) を修正（コミットしないように注意）
- watchとかは後で作る（watchができるまでの開発環境は、ターミナル2つ立ち上げ体制を推奨）

## ライセンス
MIT License
see [LICENSE](./LICENSE) for more details.
